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
      res.status(200).send(product[0])})
      .catch(err => {
        console.error(err);
        res.status(500).send(err);
      });
  },
  search: (req, res) => {
    const dbInstance = req.app.get("db");
    let query = `%${req.query.find}%`
    let cap = `%${req.query.find.toUpperCase()}%`
    let low = `%${req.query.find.toLowerCase()}%`
    
    dbInstance.search([query, cap, low]).then(products => {
      res.status(200).send(products)})
      .catch(err => {
        console.error(err);
        res.status(500).send(err);
      });
  },

  getCart: (req, res) => {
    const dbInstance = req.app.get("db");
    // const {user_id} = req.user    

    //CHANGE 99 BACK TO user_id AFTER IMPLEMENTING auth0!///////    
    dbInstance.get_cart([99]).then(cart => {
      res.status(200).send(cart)})
      .catch(err => {
        console.error(err);
        res.status(500).send(err);
      });
  },

  addCart: (req, res) => {
    const dbInstance = req.app.get("db");
    const {product_id, qty, size, colorIndex } = req.body
    // const {user_id} = req.user

    //CHANGE 99 BACK TO user_id AFTER IMPLEMENTING auth0!///////
    dbInstance.addToCart([99, product_id, qty, size, colorIndex])
      .then(cart => res.status(200).send(cart))
      .catch(err => {
        console.error(err);
        res.status(500).send(err);
      });
  },

  updateQuantity: (req, res) => {
    const dbInstance = req.app.get("db");
    let { cart_id, newQuantity } = req.body;
    // const {user_id} = req.user    

    //CHANGE 99 BACK TO user_id AFTER IMPLEMENTING auth0!///////    
    dbInstance.changeQuantity([ newQuantity, cart_id, 99]).then(cart => {
        res.status(200).send(cart)})
      .catch(err => {
        console.error(err);
        res.status(500).send(err);
      });
  },


  delete: (req, res) => {
    const dbInstance = req.app.get("db");
    // const {user_id} = req.user 
           
    //CHANGE 99 BACK TO user_id AFTER IMPLEMENTING auth0!///////        
    dbInstance.deleteProduct([req.params.id, 99]).then(cart => {
      res.status(200).send(cart);
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
    dbInstance.emptyCart([req.user.user_id])
      .then(noProducts => {
        res.status(200).send(noProducts); // clear out cart here
      })
      .catch(err => {
        console.error(err);
        res.status(500).send(err);
      });
  }
};
