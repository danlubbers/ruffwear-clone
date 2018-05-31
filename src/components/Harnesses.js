import React from 'react';
import { connect } from 'react-redux';
import Headerimg from '../assets/Header-Image-Harnesses.jpg';


class Harnesses extends React.Component{
    constructor(props) {
        super(props)
    }


    render(){

        return(
            <div className='harnesses'>
            <div className='pic-container'>
                <img className='harnesses-pic' src={Headerimg} alt='Harness Header img'/>
                <h1> HARNESSES </h1>
               <h3> SHOP </h3>

            </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    if (!state) return {}

}

export default connect(mapStateToProps)(Harnesses)

