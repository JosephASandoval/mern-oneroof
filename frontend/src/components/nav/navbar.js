import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../../styles/navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push("/");
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className='loggedin-navbar-container'>
          <Link id='link' to={"/posts"}>All Posts</Link>
          <Link id='link' to={"/profile"}>Profile</Link>
          <Link id='link' to={"/chores"}>Chores</Link>
          <Link id='link' to={"/expenses"}>Expenses</Link>
          <button className='logout-button' onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className = 'splash-navbar-container'>
          <Link className='link-word' to={"/signup"}>Signup</Link>
          <Link className='link-word' to={"/login"}>Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <header className='main-nav'>
        <img src='logo_word.png' alt='LOGO' className='logo-img-word'/>
        {this.getLinks()}
      </header>
    );
  }
}

export default withRouter(NavBar);
