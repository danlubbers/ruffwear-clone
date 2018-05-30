const stripe = require("stripe")(process.env.S_STRIPE_KEY);

module.exports = {
  getHarnessesProducts: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance.products
      .getHarnessesProducts()
      .then(products => res.status(200).send(products))
      .catch(err => {
        console.error(err);
        res.status(500).send(err);
      });
  },

  getOneHarnessesProduct: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance.products
      .getOneHarnessesProduct(req.params.id)
      .then(productID => res.status(200).send(productID))
      .catch(err => {
        console.error(err);
        res.status(500).send(err);
      });
  },

  getLeashesProducts: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance.products
      .getLeashesProducts()
      .then(products => res.status(200).send(products))
      .catch(err => {
        console.error(err);
        res.status(500).send(err);
      });
  },

  getOneLeashesProduct: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance.products
      .getOneLeashesProduct(req.params.id)
      .then(productID => res.status(200).send(productID))
      .catch(err => {
        console.error(err);
        res.status(500).send(err);
      });
  },

  getCollarsProducts: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance.products
      .getCollarsProducts()
      .then(products => res.status(200).send(products))
      .catch(err => {
        console.error(err);
        res.status(500).send(err);
      });
  },

  getOneCollarsProduct: (req, res) => {
    const dbInstance = req.app.get("db");

    dbInstance.products
      .getOneCollarsProduct(req.params.id)
      .then(productID => res.status(200).send(productID))
      .catch(err => {
        console.error(err);
        res.status(500).send(err);
      });
  },

  getBootsProducts: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance.products
      .getBootsProducts()
      .then(products => res.status(200).send(products))
      .catch(err => {
        console.error(err);
        res.status(500).send(err);
      });
  },

  getOneBootsProduct: (req, res) => {
    const dbInstance = req.app.get("db");

    dbInstance.products
      .getOneBootsProduct(req.params.id)
      .then(productID => res.status(200).send(productID))
      .catch(err => {
        console.error(err);
        res.status(500).send(err);
      });
  },

  cartProducts: (req, res) => {
    const dbInstance = req.app.get("db");

    dbInstance.cart
      .getAllCart(req.user.user_id)
      .then(productID => res.status(200).send(productID))
      .catch(err => {
        console.error(err);
        res.status(500).send(err);
      });
  },

  updateQuantity: (req, res) => {
    const dbInstance = req.app.get("db");
    let { cartID, newQuantity } = req.body;
    dbInstance.cart
      .changeQuantity(cartID, newQuantity)
      .then(response => {
        // console.log(response);
        dbInstance.cart
          .getAllCart(req.user.user_id)
          .then(cart => {
            res.status(200).send(cart);
          })
          .catch(err => {
            console.error(err);
            res.status(500).send(err);
          });
      })
      .catch(err => {
        console.error(err);
        res.status(500).send(err);
      });
  },

  addCart: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance.cart
      .addToCart(req.user.user_id, req.body.productID)
      .then(cartID => res.status(200).send(cartID))
      .catch(err => {
        console.error(err);
        res.status(500).send(err);
      });
  },

  delete: (req, res) => {
    const dbInstance = req.app.get("db");
    // console.log(req.params.id);
    dbInstance.cart.deleteProduct(req.params.id).then(product => {
      res.status(200).send(product);
    });
  },

  stripe: (req, res) => {
    const dbInstance = req.app.get("db");
    const charge = stripe.charges.create({
      amount: req.body.amount,
      currency: "usd",
      source: req.body.token.id,
      description: "RuffDoggies"
    });
    dbInstance.cart
      .emptyCart(req.user.user_id)
      .then(noProducts => {
        res.status(200).send(noProducts); // clear out cart here
      })
      .catch(err => {
        console.error(err);
        res.status(500).send(err);
      });
  }
};
