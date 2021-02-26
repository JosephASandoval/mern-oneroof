import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../styles/signup_form.css'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      username: this.state.username,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history); 
  }

  renderErrors() {
    return(
      <ul className='session-errors-container'>
        {Object.keys(this.state.errors).map((error, i) => (
          <li className='session-errors' key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form-container">
        <h2> Sign Up </h2>
        <form onSubmit={this.handleSubmit}>
          <div className="signup-form">
            <br/>
            <input className='form-input' type="text"
                value={this.state.firstName}
                onChange={this.update('firstName')}
                placeholder="First Name"
              />

              <input className='form-input' type="text"
                value={this.state.lastName}
                onChange={this.update('lastName')}
                placeholder="Last Name"
              />

              <br/>

              <input className='form-input' type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Username"
              />
            
              <input className='form-input' type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
              <br/>
              <input className='form-input' type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            
              <input className='form-input' type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
              />
            <br/>
            <br/>
            <input className='submit-button' type="submit" value="Submit" />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);