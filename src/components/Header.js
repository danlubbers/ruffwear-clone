import React, {Component} from 'react';
import RuffLogo from '../assets/ruffdoggies-logo.png'
// React Icon Logos
import SearchIcon from 'react-icons/lib/fa/search'
import Paw from 'react-icons/lib/fa/paw'
// Images for Navbar
import Harness from '../assets/navigation-harnesses-image.jpg'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showMenu: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({showMenu: !this.state.showMenu})
    }

    render() {
        let {showMenu} = this.state;
        let slideCSS = showMenu ? 'slide-menu slide-menu-position' : 'slide-menu';

        return(
            <header>
                <nav>
                    <div>
                        <img className='ruff-logo' src={RuffLogo} alt='ruff logo'/>
                    </div>
                    <div>
                        <div className='nav-lists'>
                            <ul className='nav-list-primary'>
                                <li className='shopBtn' onClick={this.handleClick}>SHOP</li>
                                <li>TAILS</li>
                                <li>ABOUT</li>   
                            </ul>
                            <ul className='nav-list-controls'>
                                <li className='search-icon'><SearchIcon/></li>
                                <li className='paw-icon'><Paw/></li>
                            </ul>
                        </div>
                    </div>
                </nav>


                <div className={slideCSS}>
                    <div className='shop-container'>
                        <div className='container-left'>
                            <img className='harness-image' src={Harness} alt='harness'/>
                        </div>
                        
                        <div className='container-right'>
                            <div className='gear-list'>
                                <ul>
                                    <h3>GEAR</h3>
                                    <div className='gear-container'>
                                        <div className='gear-split-left'>
                                            <li>Harnesses</li>
                                            <li>Leashes</li>
                                            <li>Collars</li>
                                            <li>Apparel</li>
                                            <li>Life Jackets</li>
                                            <li>Boots</li>
                                        </div>
                                        <div className='gear-split-right'>
                                            <li>Packs</li>
                                            <li>Bowls</li>
                                            <li>Safety</li>
                                            <li>Beds</li>
                                            <li>Toys</li>
                                            <li>Gift Cards</li>
                                    </div>
                                    </div>
                                </ul>
                            </div>
                            <div className='collections-container'>
                                <ul>
                                    <h3>COLLECTIONS</h3>
                                    <div className='collections-list'>
                                        <li>New Gear</li>
                                        <li>Cooling Gear</li>
                                        <li>Human Gear</li>
                                        <li>Travel Gear</li>
                                        <li>Specials</li>
                                    </div>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </header>


        )

    }
    
}

export default Header;