import React from 'react';
import Supporting from './../assests/Supporting-page';
class Home extends React.Component{
  constructor(props) {
  super(props)

      this.state = {
          
      }
 }   
render(){
  return(
    <div>
      <img className="header-img" src={Supporting} alt="big-pic"/>
    </div>
  )
 }
}