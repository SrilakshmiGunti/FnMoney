import axios from 'axios';
import React, { Component } from 'react';
import './RegistrationForm.css';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      message: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { username, email, password } = this.state;

    axios.post('http://localhost:5000/api/register', { username, email, password })
      .then(response => {
        this.setState({
          username: '',
          email: '',
          password: '',
          message: 'Registration successful!'
        });
      })
      .catch(error => {
        this.setState({ message: 'Error registering user' });
      });
  }

  render() {
    const { username, email, password, message } = this.state;

    return (
      <div className="registration-container">
        <div className="registration-form">
          <h2>Register</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={this.handleChange}
                required
                className="form-input"
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
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                required
                className="form-input"
              />
            </div>
            <button type="submit" className="submit-btn">Register</button>
          </form>
          {message && <p className="message">{message}</p>}
        </div>
      </div>
    );
  }
}

export default RegistrationForm;
