import axios from 'axios';
import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'; // Import the updated CSS file

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    axios.post('http://localhost:5000/api/login', { email, password })
      .then(response => {
        if (response.data.message === 'Login successful') {
          this.props.navigate('/');
        } else {
          this.setState({ error: 'Invalid credentials' });
        }
      })
      .catch(error => {
        this.setState({ error: 'An error occurred. Please try again.' });
      });
  };

  render() {
    const { email, password, error } = this.state;

    return (
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                required
              />
            </div>
            {error && <p className="error">{error}</p>}
            <button type="submit" className="submit-btn">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

const LoginFormWithNavigate = (props) => {
  const navigate = useNavigate();
  return <LoginForm {...props} navigate={navigate} />;
}

export default LoginFormWithNavigate;
