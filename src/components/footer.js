import React from 'react';
import { connect } from 'react-redux'
import fitguide from '../assets/Fit-Guide.jpg';
import Rightarrow from 'react-icons/lib/fa/angle-right';
import Insta from 'react-icons/lib/fa/instagram';
import Fb from 'react-icons/lib/fa/facebook';
import Yt from 'react-icons/lib/fa/youtube-play';
import Pin from 'react-icons/lib/fa/pinterest-p';
import Twitter from 'react-icons/lib/fa/twitter';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        let logInDisplay = this.props.user ? <a href={process.env.REACT_APP_LOGOUT}>
        <li className="login">LogOut</li></a> : <a href={process.env.REACT_APP_LOGIN}><li className="login">Login</li></a>
        let itemNumber = this.props.cart.reduce((prev, next) => {
            return prev + next.quantity},0)
        return (
            <div className='footer'>
                <div className='background'>
                    <div className='background-top'>
                        <div className='newslettercontainer'>
                            <h1 className='news-h1'> JOIN OUR ADVENTURES </h1>
                            <p className='news-p'> Sign up for our newsletter and stay on track with the Ruffwear pack. </p>
                            <div className='input-container'>
                                <input className='news-input' placeholder="Email Address" />
                                <button className='news-button'> <Rightarrow size={35} /> </button>
                            </div>
                        </div>
                        <div className='image-container'> 
                            <img src={fitguide} className="fitpic" alt='fit guide'/>
                        </div>
                    </div>
                    <div className='background-bot'>
                        <div className='background-bottom-container'>
                            <div className='background-bottom-left'>
                                <h1> BECOME A DEALER </h1>
                                <p> Explore a partnership with Ruffwear. </p>
                                <button> SIGN ME UP </button>
                                <h1> 2018 CATALOG </h1>
                                <p> Flip through our digital pages for some outdoor canine inspiration. </p>
                              <a href="https://cdn.shopify.com/s/files/1/1577/4333/files/SS18-Workbook-Dealer-DigitalVersion-Consumer.pdf?11875748574486177020"> <button> LEARN MORE </button> </a>
                            </div>
                            <div className='background-bottom-right'>
                                <div className='right-left'>
                                    <h1> MY ACCOUNT </h1>
                                    <ul>
                                      <Link to='/cart'>  <li> Cart({itemNumber}) </li> </Link>
                                        <li> Account </li>
                                        {logInDisplay}
                                    </ul>
                                </div>
                                <div className='right-middle'>
                                    <h1> LEARN MORE </h1>
                                    <ul>
                                        <li> Ambassadors </li>
                                        <li> Partnerships </li>
                                        <li> Pro Purchase </li>
                                        <li> Distributors </li>
                                        <li> Affiliates </li>
                                        <li> Careers </li>
                                        <li> Blog </li>
                                    </ul>
                                </div>
                                <div className='right-right'>
                                    <h1> SUPPORT </h1>
                                    <ul>
                                        <li> Our Guarantee </li>
                                        <li> Fit Guide </li>
                                        <li> Shipping </li>
                                        <li> Returns </li>
                                        <li> Contact Us </li>
                                        <li> Dealer Login </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='footer-bottom-container'>
                    <div className='social-media'> 
                        <ul>
                            <a href='https://www.instagram.com/ruffwear/'> <li>  <Insta size={30}/> </li> </a>
                            <a href='https://www.facebook.com/ruffwear/'> <li>  <Fb size={30}/> </li> </a>
                            <a href='https://www.youtube.com/ruffwear/'> <li>  <Yt size={30}/> </li> </a>
                            <a href='https://www.pinterest.com/ruffwear/'> <li>  <Pin size={30}/> </li> </a>
                            <a href='https://twitter.com/ruffwear/'>  <li> <Twitter size={30}/> </li> </a>
                        </ul>
                    </div>
                    <div className='terms'>
                        <span> © 2018 Ruffwear </span>
                        <span> Terms of Use and Privacy Policy </span>
                    </div>
                </div>
             
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        cart: state.cart
    }

}

export default connect(mapStateToProps)(Footer)