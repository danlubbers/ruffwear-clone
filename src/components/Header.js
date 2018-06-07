import React, { Component } from 'react';
import RuffLogo from '../assets/ruffdoggies-logo.png';
// React Icon Logos
import SearchIcon from 'react-icons/lib/fa/search'
import Paw from 'react-icons/lib/fa/paw'
import Cart from 'react-icons/lib/fa/shopping-cart'
// Images for Shop dropdown
import Harness from '../assets/navigation-harnesses-image.jpg'
import Leashes from '../assets/navigation-leashes.jpg'
import Apparel from '../assets/navigation-apparel.jpg'
import LifeJackets from '../assets/navigation-life-jackets.jpg'
import Collars from '../assets/navigation-collars.jpg'
import Boots from '../assets/navigation-boots.jpg'
import Packs from '../assets/navigation-packs.jpg'
import Bowls from '../assets/navigation-bowls.jpg'
import Safety from '../assets/navigation-safety.jpg'
import Beds from '../assets/navigation-beds.jpg'
import Toys from '../assets/navigation-toys.jpg'
import GC from '../assets/navigation-gift-cards.jpg'
import NewGear from '../assets/navigation-new-gear.jpg'
import HumanGear from '../assets/navigation-human-gear.jpg'
import TravelGear from '../assets/navigation-travel-gear.jpg'
import Specials from '../assets/navigation-specials.jpg'
// Images for Tails dropdown
import MyDog from '../assets/navigation-mydogismy.jpg'
import OurStores from '../assets/navigation-our-stories.jpg'
import OurAmb from '../assets/navigation-our-ambassadors.jpg'
// Images for About dropdown
import OurPath from '../assets/navigation-our-path.jpg'
import OurPack from '../assets/navigation-our-pack.jpg'
import OurDesign from '../assets/navigation-design-philosophy.jpg'
import OurPractices from '../assets/navigation-our-practices.jpg'
import Partners from '../assets/navigation-partners.jpg'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {getUser} from '../ducks/reducer';
import {connect} from 'react-redux';
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showShop: false,
            showTails: false,
            showAbout: false,
            selectedShop: 'harnesses',
            images: {
                harnesses: Harness,
                leashes: Leashes,
                apparel: Apparel,
                lifeJackets: LifeJackets,
                collars: Collars,
                boots: Boots,
                packs: Packs, 
                bowls: Bowls,
                safety: Safety,
                beds: Beds,
                toys: Toys,
                giftCards: GC,
                newGear: NewGear,
                humanGear: HumanGear,
                travelGear: TravelGear,
                specials: Specials
            },
            selectedAbout: 'ourPath',
            aboutImages: {
                ourPath: OurPath,
                ourPack: OurPack,
                ourDesign: OurDesign,
                ourPractices: OurPractices,
                partners: Partners
            }
        }
        this.handleClickHome = this.handleClickHome.bind(this);
        this.handleClickShop = this.handleClickShop.bind(this);
        this.handleClickTails = this.handleClickTails.bind(this);
        this.handleClickAbout = this.handleClickAbout.bind(this);
    }
    handleClickHome() {
        this.setState({showShop: false, showTails: false, showAbout: false})
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
    
    componentDidMount(){
        this.props.getUser()
    }
    handleMouseOverShop(event) {
        // console.log(event.target)
        // console.log(event.target.id)
        this.setState({selectedShop: event.target.id});
    }
    handleMouseOverAbout(event) {
        this.setState({selectedAbout: event.target.id});
    }
    render() {
        let { showShop, showTails, showAbout } = this.state;
        let slideCssShop = showShop ? 'slide-menu slide-menu-position' : 'slide-menu';
        let slideCssTails = showTails ? 'slide-menu slide-menu-position' : 'slide-menu';
        let slideCssAbout = showAbout ? 'slide-menu slide-menu-position' : 'slide-menu';
        let logInDisplay = this.props.user ? <a href={process.env.REACT_APP_LOGOUT}>
        <h1 className="login">LogOut</h1></a> : <a href={process.env.REACT_APP_LOGIN}><h1 className="login">Login</h1></a>
        let currentImageShop = this.state.images[this.state.selectedShop];
        let currentImageAbout = this.state.aboutImages[this.state.selectedAbout];
        // console.log(slideCssShop)
        // console.log(slideCssTails)
        return (
            <header>
                <nav>
                    <div>
                        <Link to='/' onClick={this.handleClickHome}>  <img className='ruff-logo' src={RuffLogo} alt='ruff logo' /> </Link>
                    </div>
                    <div>
                        <div className='nav-lists'>
                            <ul className='nav-list-primary'>
                                <li className='shopBtn' onClick={this.handleClickShop}>SHOP</li>
                                <li className='tailsBtn' onClick={this.handleClickTails}>TAILS</li>
                                <li className='aboutBtn' onClick={this.handleClickAbout}>ABOUT</li>
                            </ul>
                            <ul className='nav-list-controls'>
                            <Link to='/search' onClick={this.handleClickHome}><li className='search-icon' onClick={this.handleClickHome}><SearchIcon size={25} /></li></Link>
                                <Link to='/contact' onClick={this.handleClickHome}><li className='paw-icon'><Paw size={25} /></li></Link>
                                <Link to='/cart' onClick={this.handleClickHome}>  <li className='cart-icon'><Cart size={25} /></li> </Link>
                                {/* <Link to='/login'><li className='login'>Login</li></Link> */}
                                {logInDisplay}
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* Shop DropDown Navbar*/}
                <div className={slideCssShop}>
                    <div className='shop-container'>
                        <div className='container-left'>
                            <img className='current-shop-image' src={currentImageShop} alt='different image displayed on hover' />
                        </div>
                        <div className='container-right'>
                            <div className='gear-list'>
                                <ul>
                                    <h3>GEAR</h3>
                                    <div className='gear-container'>
                                        <div className='gear-split-left'>
                                            <Link to='/collections/harnesses' onClick={this.handleClickShop} 
                                            ><li onMouseOver={e=>this.handleMouseOverShop(e)} id='harnesses'>Harnesses</li> </Link>
                                            <Link to='/collections/leashes' onClick={this.handleClickShop}><li onMouseOver={e=>this.handleMouseOverShop(e)} id='leashes'>Leashes</li> </Link>
                                            <li onMouseOver={e=>this.handleMouseOverShop(e)} id='collars'>Collars</li> 
                                            <Link to='/collections/apparel' onClick={this.handleClickShop}> <li onMouseOver={e=>this.handleMouseOverShop(e)} id='apparel'>Apparel</li> </Link>
                                             <li onMouseOver={e=>this.handleMouseOverShop(e)} id='lifeJackets'>Life Jackets</li>
                                            <Link to='/collections/boots' onClick={this.handleClickShop}> <li onMouseOver={e=>this.handleMouseOverShop(e)} id='boots'>Boots</li> </Link>
                                        </div>
                                        <div className='gear-split-right'>
                                        <Link to='/collections/packs' onClick={this.handleClickShop}> <li onMouseOver={e=>this.handleMouseOverShop(e)} id='packs'>Packs</li> </Link>
                                            <li onMouseOver={e=>this.handleMouseOverShop(e)} id='bowls'>Bowls</li>
                                            <li onMouseOver={e=>this.handleMouseOverShop(e)} id='safety'>Safety</li>
                                            <li onMouseOver={e=>this.handleMouseOverShop(e)} id='beds'>Beds</li>
                                            <li onMouseOver={e=>this.handleMouseOverShop(e)} id='toys'>Toys</li>
                                            <li onMouseOver={e=>this.handleMouseOverShop(e)} id='giftCards'>Gift Cards</li>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                            <div className='collections-container'>
                                <ul>
                                    <h3>COLLECTIONS</h3>
                                    <div className='collections-list'>
                                        <li onMouseOver={e=>this.handleMouseOverShop(e)} id='newGear'>New Gear</li>
                                        <li onMouseOver={e=>this.handleMouseOverShop(e)} id='harnesses'>Cooling Gear</li>
                                        <li onMouseOver={e=>this.handleMouseOverShop(e)} id='humanGear'>Human Gear</li>
                                        <li onMouseOver={e=>this.handleMouseOverShop(e)} id='travelGear'>Travel Gear</li>
                                        <li onMouseOver={e=>this.handleMouseOverShop(e)} id='specials'>Specials</li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Tails DropDown Navbar */}
                <div className={slideCssTails}>
                    <div className='tails-container'>
                        <div className='my-dog-container'>
                            <div className='my-dog-text-container'>
                                <a href='https://www.instagram.com/explore/tags/mydogismy/' target='_blank' rel='noopener noreferrer'><h1 className='my-dog-text'>#MyDogIsMy</h1></a>
                            </div>
                            <img className='my-dog' src={MyDog} alt='my dog' />
                        </div>
                        <div className='our-stories-container'>
                            <div className='ourStoriesBtn-container'>
                                <button className='ourStoriesBtn'>Our Stories</button>
                            </div>
                            <img className='our-stories' src={OurStores} alt='our stories' />
                        </div>
                        <div className='our-amb-container'>
                            <div className='ourAmbBtn-container'>
                                <button className='ourAmbBtn'>Our Ambassadors</button>
                            </div>
                            <img className='our-amb' src={OurAmb} alt='our ambassadors' />
                        </div>
                    </div>
                </div>
                {/* About DropDown Navbar */}
                <div className={slideCssAbout}>
                    <div className='about-container'>
                        <div className='about-container-left'>
                            <img className='our-path' src={currentImageAbout} alt='two dogs running' />
                        </div>
                        <div className='about-container-right'>
                            <div className='about-list'>
                                <ul>
                                    <li onMouseOver={e=>this.handleMouseOverAbout(e)} id='ourPath'>Our Path</li>
                                    <li onMouseOver={e=>this.handleMouseOverAbout(e)} id='ourPack'>Our Pack</li>
                                    <li onMouseOver={e=>this.handleMouseOverAbout(e)} id='ourDesign'>Our Design Philosophy</li>
                                    <li onMouseOver={e=>this.handleMouseOverAbout(e)} id='ourPractices'>Our Practices</li>
                                    <li onMouseOver={e=>this.handleMouseOverAbout(e)} id='partners'>Partners</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
function mapStateToProps(state) {
    return {
        user: state.user
    }
 }
 
 export default connect(mapStateToProps, {getUser}) (Header);