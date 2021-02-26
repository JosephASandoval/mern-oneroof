import React from "react";
import { Link } from "react-router-dom";
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
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className='nav-bar-container'>
          <Link id='link' to={"/posts"}>All Posts</Link>
          <Link id='link' to={"/profile"}>Profile</Link>
          <Link id='link' to={"/new_post"}>Write a Post</Link>
          <button className='logout-button' onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className = 'link-container'>
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

export default NavBar;
