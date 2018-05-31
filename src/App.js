import React, { Component } from 'react';
import router from './router'
import './styles/App.css'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='header'>
          <Header/>                
        </div>

          {router}
        <div className='footer'>
           <Footer/>
        </div>
      </div>
    );
  }
}

export default App;