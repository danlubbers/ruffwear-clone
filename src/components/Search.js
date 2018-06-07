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
        // console.log(res.data)
        this.setState({search: e})
        axios.get(`/api/search/?find=${e}`).then(res=>this.setState({products: res.data}))
    }

    render() {
        let productsArray = this.state.products.map(element=>{
            return (
                <div className='products-array-container'>
                    <Link to={`/Product/${element.product_id}`}><img className='products-image' src={element.thumbnail} alt='ruff doggie products'/></Link>
                    <p className='products-title'>{element.title}</p>
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