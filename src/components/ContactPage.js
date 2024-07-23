// src/components/ContactPage.js
import React, { Component } from 'react';
import axios from 'axios'; // Import axios for HTTP requests
import './ContactPage.css';

class ContactPage extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    successMessage: '',
    errorMessage: ''
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = this.state;

    // Send the message to the backend
    axios.post('http://localhost:5000/api/contact', { name, email, message })
      .then(response => {
        this.setState({
          name: '',
          email: '',
          message: '',
          successMessage: 'Thank you for your message!',
          errorMessage: ''
        });
      })
      .catch(error => {
        this.setState({
          successMessage: '',
          errorMessage: 'Error sending message. Please try again.'
        });
      });
  };

  render() {
    const { name, email, message, successMessage, errorMessage } = this.state;

    return (
      <div className="contact-page-container">
        <h2>Contact Us</h2>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={this.handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    );
  }
}

export default ContactPage;
