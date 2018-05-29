import React, { Component } from 'react';
import { connect } from 'react-redux'
import topo from '../assets/topo.png';
import fitguide from '../assets/Fit-Guide.jpg';

class footer extends Component {
    constructor(props){
        super(props)
    }

    render(){

        return (
            <div> 
            <img src = {topo} />
                </div>
        )
    }
}

function mapStateToProps(state){
    if (!state) return {}

}

export default connect(mapStateToProps)(footer)