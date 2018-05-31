import React, { Component } from 'react';
import router from './router'
import './styles/App.css'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='header'>
          <Header/>                
        </div>

          {router}

      </div>
    );
  }
}

export default App;