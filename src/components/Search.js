import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from 'react-icons/lib/fa/times-circle';
import axios from 'axios';

class Search extends Component {
    constructor() {
        super()

        this.state = {
            search: '',
            products: [],
            timeout: null
        }

    }

    searchForProducts(e) {
        this.setState({search: e})
        clearTimeout(this.state.timeout)
        this.setState({
            timeout: setTimeout(() => {
                if(!e){
                    this.setState({
                        products: []
                    })
                }
                else{
                    axios.get(`/api/search/?find=${e}`).then(res=>{
                        if(!this.state.search){
                            return null
                        }
                        this.setState({products: res.data})
                    })
                }
            }, 500)
        })        

    }

    render() {
        let productsArray = this.state.products.map((element,i)=>{
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