import axios from 'axios';

const initialState = {
    user: {},
    cart: [],
    products: [],
    searchProducts:[],
    indiv: {
        product_id: 29,
        category: "harnesses",
        title: "HI & LIGHT™ HARNESS ",
        subtitle: "lightweight, low-profile",
        description: "The Ruffwear Hi & Light™ Harness is a lightweight, low-profile adventure harness. This minimalist harness has four points of adjustment for a sleek, comfortable fit down to size XXXS. It features an aluminum V-ring leash attachment point on the back, a debris-resistant liner, reflective trim for low-light visibility, and a light loop for attaching The Beacon™. Scaled to fit even the smallest canine companions, the Hi & Light Harness is a great option for any dog that enjoys exploring in a harness.",
        price: "39.95",
        sizes: [
            "XXXSmall",
            "XXSmall",
            "XSmall",
            "Small",
            "Medium",
            "Large/XLarge"
        ],
        colors: [
            [
                "BLUE ATOLL",
                "#0DB0D1"
            ],
            [
                "TWILIGHT GRAY",
                "#444549"
            ],
            [
                "SOCKEYE RED",
                "#DD3326"
            ]
        ],
        imgs: [
            "http://res.cloudinary.com/danlubbers/image/upload/v1527702035/ruffdoggies/harnesses/hero-colors/3082-HiLightHarness-SockeyeRed-Left-WEB_640x.jpg"
        ],
        thumbnail: "http://res.cloudinary.com/danlubbers/image/upload/v1527626820/ruffdoggies/harnesses/3082-HiLightHarness-SockeyeRed-Right-WEB_372x279.jpg"
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
        case GET_INDIV_PRODUCT:
        console.log(action.payload);
        
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

export function getIndiv(product){
    console.log(product);
    
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
        color: color
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