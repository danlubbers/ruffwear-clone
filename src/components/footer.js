import React, { Component } from 'react';
import { connect } from 'react-redux'
import topo from '../assets/topo.png';
import fitguide from '../assets/Fit-Guide.jpg';
import Rightarrow from 'react-icons/lib/fa/angle-right';
import Insta from 'react-icons/lib/fa/instagram';
import Fb from 'react-icons/lib/fa/facebook';
import Yt from 'react-icons/lib/fa/youtube-play';
import Pin from 'react-icons/lib/fa/pinterest-p';
import Twitter from 'react-icons/lib/fa/twitter';

class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {

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
                        <img src={fitguide} className="fitpic" />
                    </div>
                    <div className='background-bot'>
                        <div className='container'>
                            <div className='left'>
                                <h1> BECOME A DEALER </h1>
                                <p> Explore a partnership with Ruffwear. </p>
                                <button> SIGN ME UP </button>
                                <h1> 2018 CATALOG </h1>
                                <p> Flip through our digital pages for some outdoor canine inspiration. </p>
                                <button> LEARN MORE </button>
                            </div>
                            <div className='right'>
                                <div className='right-left'>
                                    <h1> MY ACCOUNT </h1>
                                    <ul>
                                        <li> Cart </li>
                                        <li> Account </li>
                                        <li> Log In / Log Out </li>
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
             
            </div>
        )
    }
}

function mapStateToProps(state) {
    if (!state) return {}

}

export default connect(mapStateToProps)(Footer)