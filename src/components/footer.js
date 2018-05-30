import React, { Component } from 'react';
import { connect } from 'react-redux'
import topo from '../assets/topo.png';
import fitguide from '../assets/Fit-Guide.jpg';

class Footer extends Component {
    constructor(props){
        super(props)
    }

    render(){

        return (
            <div className='footer'> 
            
            <h1>jjjjjj</h1>
                </div>
        )
    }
}

function mapStateToProps(state){
    if (!state) return {}

}

export default connect(mapStateToProps)(Footer)