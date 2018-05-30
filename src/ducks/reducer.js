import axios from 'axios';

const initialState = {
    user: {},
    cart: [],
    products: [],
    indiv: {}
}

const GET_PRODUCTS = "GET_PRODUCTS"

export default function reducer (state = initialState, action){
    switch (action.type) {
        case GET_PRODUCTS + "_FULFILLED":
            return Object.assign({}, state, {products: action.payload});
        default:
            return state;
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
    let product = axios
}