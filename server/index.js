require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const controller = require("./controller");
const session = require("express-session");
const Auth0Strategy = require("passport-auth0");
const stripe = require("stripe")(process.env.S_STRIPE_KEY);
const passport = require("passport");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// •••••••••••••••• PROCESS.ENV •••••••••••••••• //

const {
  CONNECTION_STRING,
  SESSION_SECRET,
  DOMAIN,
  CLIENT_ID,
  CLIENT_SECRET,
  CALLBACK_URL,
  SERVER_PORT,
  S_STRIPE_KEY,
  REACT_APP_STRIPE_KEY,
  SUCCESS_REDIRECT,
  FAILURE_REDIRECT
} = process.env;

app.use(express.static(`${__dirname}/../build`));

app.use(bodyParser.json());
app.use(cors());

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());


// •••••••••••••••• AUTHENTICATION •••••••••••••••• //

passport.use(
  new Auth0Strategy(
    {
      domain: DOMAIN,
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      callbackURL: CALLBACK_URL,
      scope: "openid profile"
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      const db = app.get("db");
      const { id, displayName } = profile;
      db
        .find_user([id])
        .then(users => {
          if (users[0]) {

            return done(null, users[0].user_id);
          } else {
            return db
              .create_user([id, displayName])
              .then(createUser => {
                return done(null, createUser[0].user_id);
              })
              .catch(console.log);
          }
        })
        .catch(console.log);
    }
  )
);

passport.serializeUser((id, done) => {
  return done(null, id);
});

passport.deserializeUser((id, done) => {
  // console.log('inside deserialize')
  app
    .get("db")
    .find_session_user([id])
    .then(user => {
      // console.log(user[0])
      done(null, user[0]);
    })
    .catch(err => {
      console.error(err);
    });
});

///////Auth endpoints////////////////////

app.get("/auth", passport.authenticate("auth0"));

app.get(
  "/auth/callback",
  passport.authenticate("auth0", {
    successRedirect: SUCCESS_REDIRECT,
    failureRedirect: FAILURE_REDIRECT
  })
);

app.get("/auth/me", function(req, res) {
  if (req.user) {
    res.status(200).send(req.user);
  } else {
    res.status(401).send("Banned!!!");
  }
});

app.get("/logout", function(req, res) {
  req.logOut();
  res.redirect(FAILURE_REDIRECT);
});



// •••••••••••••••• ENDPOINTS •••••••••••••••• //

app.get(`/api/getproducts/:category`, controller.getProducts);

app.get(`/api/getoneproduct/:id`, controller.getOneProduct);

app.get(`/api/search`, controller.search);

app.get(`/api/getcart`, controller.getCart);

app.post(`/api/addtocart`, controller.addCart);

app.put(`/api/changequantity`, controller.updateQuantity);

app.delete(`/api/deleteproduct/:id`, controller.delete);

// ••••••••••••••••TEST ENDPOINTS •••••••••••••••• //

app.post(`/api/addtocarttest`, controller.addCartTest);

// •••••••••••••••• STRIPE •••••••••••••••• //

app.post(`/api/payment`, controller.stripe);



// •••••••••••••••• NODEMAILER •••••••••••••••• //

app.post("/api/sendEmail", (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.PASSWORD
      }
    });
    let mailOptions = {
      from: req.query.email,
      to: process.env.MY_EMAIL,
      subject: req.query.subject,
      text: req.query.message
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      res.send(mailOptions);
    });
  });
});


// •••••••••••••••• CONNECTION_STRING && SERVER_PORT•••••••••••••••• //

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  app.listen(SERVER_PORT, () => {
    console.log(`listening on PORT: ${SERVER_PORT}`);
  });
});

