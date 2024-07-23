// src/components/AssessmentForm.js
import React, { Component } from 'react';
import axios from 'axios';
import './AssessmentForm.css';

class AssessmentForm extends Component {
  state = {
    assessmentName: '',
    score: '',
    message: ''
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { assessmentName, score } = this.state;

    axios.post('http://localhost:5000/api/assessments', { assessmentName, score }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => {
        this.setState({
          assessmentName: '',
          score: '',
          message: 'Assessment submitted successfully!'
        });
      })
      .catch(error => {
        this.setState({ message: 'Error submitting assessment' });
      });
  };

  render() {
    const { assessmentName, score, message } = this.state;

    return (
      <div className="assessment-form-container">
        <h2 className="form-title">Submit Assessment</h2>
        <form className="assessment-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="assessmentName">Assessment Name:</label>
            <input
              type="text"
              id="assessmentName"
              name="assessmentName"
              value={assessmentName}
              onChange={this.handleChange}
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="score">Score:</label>
            <input
              type="number"
              id="score"
              name="score"
              value={score}
              onChange={this.handleChange}
              required
              className="input-field"
            />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    );
  }
}

export default AssessmentForm;
