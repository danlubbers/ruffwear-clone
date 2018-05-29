import React, {Component} from 'react';
import RuffLogo from '../assets/ruffdoggies-logo.png'

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <header>
                <nav>
                    <div>
                        <img className='ruff-logo' src={RuffLogo} alt='ruff logo'/>
                    </div>
                    <div>
                        <ul>
                            <li>SHOP</li>
                            <li>TAILS</li>
                            <li>ABOUT</li>
                            <li>Search Icon</li>
                            <li>Cart Icon</li>
                        </ul>
                    </div>
                </nav>
            </header>


        )

    }
    
}

export default Header;