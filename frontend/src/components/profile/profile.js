import React from "react";
import NavBarContainer from "./navbar_container";
import "./profile.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }
  render() {
    return (
      <div className="profile-container">
        <div className="profile-username">
          {this.props.currentUser.username}
        </div>
        <div className="navbar-profile">
          <NavBarContainer />
        </div>
      </div>
    );
  }
}

export default Profile;
