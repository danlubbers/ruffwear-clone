import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from 'react-icons/lib/fa/times-circle';
import axios from 'axios';

class Search extends Component {
    constructor() {
        super()

        this.state = {
            search: '',
            products: []
        }

    }

    searchForProducts(e) {

        this.setState({search: e})
        axios.get(`/api/search/?find=${e}`).then(res=>this.setState({products: res.data}))
    }

    render() {
        let productsArray = this.state.products.map(e=>{

            return (
                <div className='products-array-container'>
                    <Link to={`/Product/${e.product_id}`}><img className='products-image'src={e.thumbnail} /></Link>
                    <p className='products-title'>{e.title}</p>
                </div>
            )
        })
         return(
             <div className='search-container'>
                <div className='xBtn-container'>
                    <Link to='/'><button className='xBtn'><CloseIcon/></button></Link>
                </div>
                <div className='search-input-container'>
                    <input className='search-input' value={this.state.search} onChange={e=>this.searchForProducts(e.target.value)} placeholder='Click to search for Items here...' />
                </div>
                <div className='search-display'>
                    {productsArray}
                </div>
            </div>

        )
    }
}

export default Search;