import React from 'react';
import Header from './Header';
import Footer from './Footer';

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