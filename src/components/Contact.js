import React, { Component } from "react";
import CloseIcon from "react-icons/lib/fa/times-circle";
import { Link } from "react-router-dom";
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
  }

  handleSend = () => {
    var { name, email, subject, message, sent } = this.state;
    axios
      .post(
        `/api/sendEmail/?name=${name}&email=${email}&subject=${subject}&message=${message}`
      )
      .then(res => {
        // console.log(res.data);
      });
  }

  resetState = () => {
    if (!this.state.sent) {
      // console.log(this.state);
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
    // console.log("handleClick triggered--->");
    this.handleSend();
    this.resetState();
    window.location.reload();
  };

  handleInput = (e) => {
    // console.log("e--->", e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    // console.log("state--->", this.state);
    return (
      <div className="contact-container">
        <div className="xBtn-container">
          <Link to="/">
            <button className="xBtn">
              <CloseIcon />
            </button>
          </Link>
        </div>
        <h1 className="header">Contact Form</h1>
        <span className="contact-form">
          <input
            className="name"
            placeholder="Name:"
            type="text"
            name="name"
            onChange={this.handleInput}
          />
          <input
            className="email"
            placeholder="Email:"
            type="text"
            name="email"
            onChange={this.handleInput}
          />
          <input
            className="subject"
            placeholder="Subject:"
            type="text"
            name="subject"
            onChange={this.handleInput}
          />
          <input
            className="message"
            placeholder="Message:"
            type="text"
            name="message"
            onChange={this.handleInput}
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
