import React, { Component } from "react";
import axios from "axios";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      subject: "",
      email: "",
      message: "",
      sent: false
    };
    this.handleSend = this.handleSend.bind(this);
    this.handleInputChangeName = this.handleInputChangeName.bind(this);
    this.handleInputChangeEmail = this.handleInputChangeEmail.bind(this);
    this.handleInputChangeSubject = this.handleInputChangeSubject.bind(this);
    this.handleInputChangeMessage = this.handleInputChangeMessage.bind(this);
  }

  handleSend() {
    var { name, email, subject, message, sent } = this.state;
    if (validateEmail(email)){

      axios
        .post(
          `/api/sendEmail/?name=${name}&email=${email}&subject=${subject}&message=${message}`
        )
        .then(res => {
          console.log(res.data);
        });
    }
  }

  resetState = () => {
    if (!this.state.sent) {
      console.log(this.state);
      this.setState({
        name: "",
        email: "",
        subject: "",
        message: "",
        sent: false
      });
    }
  };

  handleClick = () => {
    console.log("handleClick triggered--->");
    this.handleSend();
    this.resetState();
    window.location.reload();
  };
  handleInputChangeName(value) {
    this.setState({ name: value });
  }
  handleInputChangeEmail(value) {
    this.setState({ email: value });
  }
  handleInputChangeSubject(value) {
    this.setState({ subject: value });
  }
  handleInputChangeMessage(value) {
    this.setState({ message: value });
  }
  render() {
    console.log("state--->", this.state);
    return (
      <div className="contact-container">
        <h1 className="header">Contact Form</h1>
          <span className="contact-form">
            <input
              className="name"
              placeholder="Name:"
              onChange={e => this.handleInputChangeName(e.target.value)}
            />
            <input
              className="email"
              placeholder="Email:"
              onChange={e => this.handleInputChangeEmail(e.target.value)}
            />
            <input
              className="subject"
              placeholder="Subject:"
              onChange={e => this.handleInputChangeSubject(e.target.value)}
            />
            <textarea
              rows="4"
              cols="50"
              className="message"
              placeholder="Message:"
              onChange={e => this.handleInputChangeMessage(e.target.value)}
            />
            <button className="send" onClick={this.handleClick}>
              <h2 className="submitBtn">Submit</h2>
            </button>
          </span>
      </div>
    );
  }
}

export default Contact;

export function validateEmail(email){

}