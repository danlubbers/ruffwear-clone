import React from 'react';
import { connect } from 'react-redux';
import Headerimg from '../assets/Header-Image-Harnesses.jpg';


class Harnesses extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {

        return (

            <div className='harnesses'>
                <div className='pic-container'>
                    <div className='spotlight-text'>
                        <h3 className='shop'> SHOP </h3>
                        <h1 className='description'> HARNESSES </h1>
                    </div>
                    <img className='harnesses-pic' src={Headerimg} alt='Harness Header img' />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    if (!state) return {}

}

export default connect(mapStateToProps)(Harnesses)

