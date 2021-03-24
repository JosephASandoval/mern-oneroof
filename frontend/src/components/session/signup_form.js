import React from "react";
import { withRouter } from "react-router-dom";
import { uploadPhoto } from "../../util/photo_api_util";
import "./session_forms.css";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      password2: "",
      photoId: "",
      photoUrl: "",
      photoFile: null,
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
    this.handlePhotoFile = this.handlePhotoFile.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.signedIn === true) {
      this.props.history.push("/");
    }

    return { errors: nextProps.errors };
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.photoFile) {
      const data = new FormData(e.target);
      data.append("file", this.state.photoFile);
      uploadPhoto(data).then((res) => {
        let user = {
          username: this.state.username,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          photoId: res.data.newData.photoId,
          photoUrl: res.data.newData.Location,
          password: this.state.password,
          password2: this.state.password2,
        };
        this.props.signup(user, this.props.history);
      });
    } else {
      let user = {
        username: this.state.username,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        photoId: this.state.photoId,
        photoUrl: this.state.photoUrl,
        password: this.state.password,
        password2: this.state.password2,
      };
      this.props.signup(user, this.props.history);
    }
  }

  handlePhotoFile(e) {
    e.preventDefault();
    this.setState({
      photoFile: e.target.files[0],
    });
  }

  handleDemoLogin(e) {
    e.preventDefault();
    let user = {
      email: "demouser@gmail.com",
      password: "demouser",
    };
    this.props
      .login(user)
      .then(() => this.props.history.push(this.props.redirectLink));
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
      <div className="form-container-session-sign">
        <form onSubmit={this.handleSubmit}>
          <div className="form">
            <h2>Sign Up</h2>

            <div className="signup-inputs">
              <label>
                Email:&nbsp;
                <input
                  type="text"
                  className="input-field"
                  value={this.state.email}
                  onChange={this.update("email")}
                  placeholder="Email"
                />
              </label>

              <label>
                First Name:&nbsp;
                <input
                  type="text"
                  className="input-field"
                  value={this.state.firstName}
                  onChange={this.update("firstName")}
                  placeholder="First Name"
                />
              </label>

              <label>
                Last Name:&nbsp;
                <input
                  type="text"
                  className="input-field"
                  value={this.state.lastName}
                  onChange={this.update("lastName")}
                  placeholder="Last Name"
                />
              </label>

              <label>
                Username:&nbsp;
                <input
                  type="text"
                  className="input-field"
                  value={this.state.username}
                  onChange={this.update("username")}
                  placeholder="Username"
                />
              </label>

              <label>
                Password:&nbsp;
                <input
                  type="password"
                  className="input-field"
                  value={this.state.password}
                  onChange={this.update("password")}
                  placeholder="Password"
                />
              </label>

              <label>
                Confirm Password:&nbsp;
                <input
                  type="password"
                  className="input-field"
                  value={this.state.password2}
                  onChange={this.update("password2")}
                  placeholder="Confirm Password"
                />
              </label>

              <label>
                Upload Profile Picture:&nbsp;
                <input
                  type="file"
                  className="input-field upload-pic"
                  name=""
                  id=""
                  onChange={this.handlePhotoFile}
                />
              </label>
            </div>

            <button className="submit-button-login input-field">Submit</button>
            <button
              className="login-demo-button"
              onClick={this.handleDemoLogin}
            >
              Demo Login
            </button>
            <div className="session-errors">{this.renderErrors()}</div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
