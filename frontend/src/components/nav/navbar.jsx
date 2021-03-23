import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      queryResults: [],
    };

    this.logoutUser = this.logoutUser.bind(this);
    this.fetchTasks = this.fetchTasks.bind(this);
    this.queryList = this.queryList.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  componentDidMount() {
    document.addEventListener("click", this.clearState);
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="right-navbar-loggedin">
          <Link to={`/profile`}>
            <img
              className="navbar-profile-pic"
              src={this.props.currentUser.user.photoUrl}
            ></img>
            Profile&nbsp;&nbsp;
          </Link>
          <Link id="link" to={"/posts"}>
            All Posts
          </Link>
          <Link id="link" to={"/profile"}>
            Profile
          </Link>
          <Link id="link" to={"/chores"}>
            Chores
          </Link>
          <Link id="link" to={"/expenses"}>
            Expenses
          </Link>
          <Link to={`/events`}>&nbsp;&nbsp;Events&nbsp;&nbsp;</Link>&nbsp;&nbsp;
          <button className="logout-btn" onClick={this.logoutUser}>
            &nbsp;&nbsp;Logout&nbsp;
          </button>
        </div>
      );
    } else {
      return (
        <div className="navbar-right">
          <Link to={`/events`}>&nbsp;&nbsp;Events&nbsp;&nbsp;</Link>&nbsp;&nbsp;
          <Link to="/login">Login&nbsp;&nbsp;</Link>&nbsp;&nbsp;
          <div className="navbar-signup-button">
            <Link to="/signup">Signup</Link>
          </div>
        </div>
      );
    }
  }

  fetchTasks(query) {
    this.setState({ ["query"]: query });
    if (query.length !== 0) {
      fetch("/api/tasks/search-tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      })
        .then((res) => res.json())
        .then((results) => {
          this.setState({ ["queryResults"]: results.task });
          // this.setState({ ["queryResults"]: results});
        });
    }
  }

  clearState() {
    this.setState({
      query: "",
      queryResults: [],
    });
  }

  queryList() {
    if (this.state.query.length === 0) {
      return null;
    }

    const list = this.state.queryResults.map((item, i) => {
      return (
        <div className="result-item-parent">
          <Link
            key={i}
            to={`/tasks/${item._id}`}
            onClick={() => this.clearState()}
          >
            <li className="result-item" key={i}>
              <div className="search-item-picture">
                <img src={item.photoUrl}></img>
                <div className="search-item-name">
                  <li>
                    <span id="result-1">Name:</span> {item.name}
                  </li>
                  <li>
                    <span id="result-1">Difficulty: </span> {item.difficulty}
                  </li>
                  <li>
                    <span id="result-1">Category: </span>
                    {item.category}
                  </li>
                </div>
              </div>
            </li>
          </Link>
        </div>
      );
    });
    if (list.length === 0) {
      return <p className="query-p">No tasks by that name</p>;
    }
    return list;
  }

  render() {
    return (
      <div className="navbar-parent">
        <div className="NavBar">
          <div className="navbar-left">
            <Link to="/">
              <img src="logo_word.png" alt="LOGO" className="logo-img-word" />
            </Link>
            <div className="search-parent">
              <input
                type="text"
                value={this.state.query}
                placeholder="Search Task Names"
                onChange={(e) => this.fetchTasks(e.target.value)}
              />
              <ul
                className={`search-results ${
                  this.state.query.length > 0 ? "block" : ""
                }`}
              >
                {this.queryList()}
              </ul>
            </div>
          </div>
          {this.getLinks()}
        </div>
      </div>
    );
  }
}

export default NavBar;
