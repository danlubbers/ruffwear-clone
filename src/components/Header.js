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
            showShop: false,
            showTails: false,
            showAbout: false
        }
        this.handleClickShop = this.handleClickShop.bind(this);
        this.handleClickTails = this.handleClickTails.bind(this);
        this.handleClickAbout = this.handleClickAbout.bind(this);
    }

    handleClickShop() {
        this.setState({
            showShop: !this.state.showShop,
            showTails: false,
            showAbout: false
        })
    }

    handleClickTails() {
        this.setState({
            showTails: !this.state.showTails,
            showShop: false,
            showAbout: false
        })
    }

    handleClickAbout() {
        this.setState({
            showAbout: !this.state.showAbout,
            showShop: false,
            showTails: false
        })
    }

    render() {
        let {showShop, showTails, showAbout} = this.state;
        let slideCssShop = showShop ? 'slide-menu slide-menu-position' : 'slide-menu';
        let slideCssTails = showTails ? 'slide-menu slide-menu-position' : 'slide-menu';
        let slideCssAbout = showAbout ? 'slide-menu slide-menu-position' : 'slide-menu';

        console.log(slideCssShop)
        console.log(slideCssTails)
        return(
            <header>
                <nav>
                    <div>
                        <img className='ruff-logo' src={RuffLogo} alt='ruff logo'/>
                    </div>
                    <div>
                        <div className='nav-lists'>
                            <ul className='nav-list-primary'>
                                <li className='shopBtn' onClick={this.handleClickShop}>SHOP</li>
                                <li className='tailsBtn' onClick={this.handleClickTails}>TAILS</li>
                                <li className='aboutBtn' onClick={this.handleClickAbout}>ABOUT</li>   
                            </ul>
                            <ul className='nav-list-controls'>
                                <li className='search-icon'><SearchIcon/></li>
                                <li className='paw-icon'><Paw/></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* Shop DropDown Navbar*/}
                <div className={slideCssShop}>
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

                {/* Tails DropDown Navbar */}
                <div className={slideCssTails}>
                    <h1>TAILS</h1>
                </div>

                {/* About DropDown Navbar */}
                <div className={slideCssAbout}>
                    <h1>ABOUT</h1>
                </div>
            </header>


        )

    }
    
}

export default Header;