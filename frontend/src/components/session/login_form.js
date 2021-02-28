import React from "react";
import { withRouter } from "react-router-dom";
import "../../styles/login_form.css";

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
    this.handleGuest = this.handleGuest.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/posts");
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.login(user);
  }

  handleGuest(e) {
    e.preventDefault();
    let user = {
      email: "guest@gmail.com",
      password: "guest",
    };
    this.props.login(user);
  }

  renderErrors() {
    return (
      <ul className="session-errors-container">
        {Object.keys(this.state.errors).map((error, i) => (
          <li className="session-errors" key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <h2> LOG IN </h2>
        <div>
          <form className="entry-form" onSubmit={this.handleSubmit}>
            <br />
            <input
              className="form-input"
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
            />
            <br />
            <input
              className="form-input"
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            <br />
            <input className="submit-button" type="submit" value="Submit" />
            <button className="submit-button input-field">Login</button>
            <br />
            <button
              className="submit-button input-field"
              onClick={this.handleGuest}
            >
              Guest Login
            </button>

            <div className="">{this.renderErrors()}</div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
