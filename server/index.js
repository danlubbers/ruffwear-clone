
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const controller = require('./controller.js')

require('dotenv').config()

const app = express();

app.use( bodyParser.json() );

massive( process.env.CONNECTION_STRING ).then ( db =>
    { console.log("database connected")
    app.set('db', db);
})

const port =  3111
app.listen( port, () => { console.log("Be-Booo-Booo-Bop...Server Online...Beep-Boop")})