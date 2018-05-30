const stripe = require("stripe")(process.env.S_STRIPE_KEY);

module.exports = {
  getProducts: (req, res) => {
    const dbInstance = req.app.get("db");
    const {category} = req.params

    dbInstance.get_products([category]).then(products => {
      res.status(200).send(products)})
      .catch(err => {
        console.error(err);
        res.status(500).send(err);
      });
  },

  getOneProduct: (req, res) => {
    const dbInstance = req.app.get("db");
    const {id} = req.params

    dbInstance.get_one_product([id]).then(product => {
      res.status(200).send(product)})
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
        console.log(response);
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
    console.log(req.params.id);
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
