import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import "./session_forms.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.isAuthenticated === false) {
      return { errors: nextProps.errors };
    }
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.login(user, this.props.history);
    // .then(() => this.props.history.push(this.props.redirectLink))
  }

  handleDemoLogin(e) {
    e.preventDefault();
    let user = {
      email: "demouser@gmail.com",
      password: "demouser",
    };
    this.props.login(user);
    // .then(() => this.props.history.push(this.props.redirectLink))
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="form-container-session">
        <h1>OneRoof</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form">
            <h2>Login</h2>

            <label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email:&nbsp;&nbsp;
              <input
                type="text"
                className="input-field"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
              />
            </label>

            <label>
              Password:&nbsp;&nbsp;
              <input
                type="password"
                className="input-field"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />
            </label>

            <button className="submit-button-login input-field">Login</button>
            <button
              className="login-demo-button"
              onClick={this.handleDemoLogin}
            >
              Demo Login
            </button>
            <div className="session-errors">{this.renderErrors()}</div>
          </div>
        </form>

        <br></br>
        <div className="signup-option">
          <label>Not a User?</label>
          <br></br>
          <Link to="/signup">
            {" "}
            <button className="signup-button input-field">Sign Up</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
