import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Home extends React.Component{
    render(){
        return(
            // Header
            <div>
                <Header/>
                <Footer/>
            </div>
        )
    }
}

export default Home