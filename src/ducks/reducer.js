import axios from "axios";

const initialState = {
   user: {},
   cart: [{price:0, quantity:0, imgs:[''], colors:[['',''],['',''],['','']], color_img_index: 0}],
   products: [],
   searchProducts:[],
   indiv: {
       imgs:['', '', ''],
       colors:[['', ''],['',''],['','']],
       sizes:['S','','']
   }
}

const GET_USER_INFO = "GET_USER_INFO";
const GET_PRODUCTS = "GET_PRODUCTS";
const GET_INDIV_PRODUCT = "GET_INDIV_PRODUCT";
const GET_CART = "GET_CART";
const ADD_TO_CART = "ADD_TO_CART";
const CHANGE_QUANTITY = "CHANGE_QUANTITY";
const DELETE_FROM_CART = "DELETE_FROM_CART";
const SEARCH = "SEARCH";

export default function reducer (state = initialState, action){
   switch (action.type) {
       case GET_USER_INFO + "_FULFILLED":
           return Object.assign({}, state, {user: action.payload})
       case GET_PRODUCTS + "_FULFILLED":
           return Object.assign({}, state, {products: action.payload});
       case GET_INDIV_PRODUCT + '_FULFILLED':
           return Object.assign({}, state, {indiv: action.payload});
       case SEARCH + "_FULFILLED":
           return Object.assign({}, state, {searchProducts: action.payload});               
       case GET_CART + "_FULFILLED":
           return Object.assign({}, state, {cart: action.payload});
       case ADD_TO_CART + "_FULFILLED":
           return Object.assign({}, state, {cart: action.payload});
       case CHANGE_QUANTITY + "_FULFILELD":
           return Object.assign({}, state, {cart: action.payload}); 
       case DELETE_FROM_CART + "_FULFILLED":
       console.log(action.payload);
       
           return Object.assign({}, state, {cart: action.payload});               
       default:
           return state;
   }
}

export function getUser(){
   let userData = axios.get('/auth/me').then( res => {
       return res.data
   })
   return{
       type: GET_USER_INFO,
       payload: userData
   }
}

export function getProducts(category){
   let products = axios.get(`/api/getproducts/${category}`).then(res => {
       return res.data
   })
   return {
       type: GET_PRODUCTS,
       payload: products
   }
}

export function getIndiv(id){
   let product = axios.get(`/api/getoneproduct/${id}`).then(res => {
           return res.data
       }
   )
  
   return{
       type: GET_INDIV_PRODUCT,
       payload: product
   }
}

export function search(str){
   let products = axios.get(`/api/search?=${str}`).then(res => {
       return res.data
   })
   return{
       type: SEARCH,
       payload: products
   }
}

export function getCart(){
   let cart = axios.get(`/api/getcart`).then(res => {
       return res.data
   })
   return{
       type: GET_CART,
       payload: cart
   }
}

export function addToCart(id, qty, size, color){
   let cart = axios.post(`/api/addtocart`, {
       product_id: id,
       qty:qty,
       size: size,
       colorIndex: color
   }).then(res => res.data)
   return {
       type: ADD_TO_CART,
       payload: cart
   }
}

export function changeQuantity(id, qty){
   let cart = axios.put(`/api/changequantity`, {
       cart_id: id,
       newQuantity: qty
   }).then(res => res.data)
   return {
       type: CHANGE_QUANTITY,
       payload: cart
   }
}

export function deleteFromCart(id){
    let cart = axios.delete(`/api/deleteproduct/${id}`).then(res => {
        return res.data
    })
    return {
        type: DELETE_FROM_CART,
        payload: cart
    }
}
