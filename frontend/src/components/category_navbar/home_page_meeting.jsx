import React from "react";
import { Link } from "react-router-dom";

class HomePageMeetingButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleParticipateButton = this.handleParticipateButton.bind(this);
    this.handleJoin = this.handleJoin.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers().then(() => this.props.getMeetings());
    this.props.getJoins();
  }

  handleJoin(e) {
    e.preventDefault();
    this.props.createJoin({
      joinerId: this.props.currentUser.user._id,
      meetingId: this.props.meeting._id,
    });
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteJoin(this.props.joinedMeeting._id);
  }

  handleParticipateButton() {
    if (!this.props.auth) {
      return (
        <div className="trending-meeting-button">
          <div className="signintojoin-button">
            {" "}
            <Link
              to={{
                pathname: `/login`,
                state: { redirectLink: `/meetings/${this.props.meeting._id}` },
              }}
              className="index-signin-text"
              onClick={() => this.props.openModal("LogIn")}
            >
              Login to Join
            </Link>{" "}
          </div>
        </div>
      );
    } else {
      return (
        <div className="trending-meeting-button">
          {this.props.joinedMeeting ? (
            <button
              onClick={this.handleDelete}
              className="trending-unjoin-button"
            >
              Unjoin
            </button>
          ) : this.props.currentUser.user._id === this.props.meeting.hostId ? (
            <label className="trending-hosting-button">
              <Link
                className="hosting-text"
                to={`/meetings/${this.props.meeting._id}`}
              >
                Hosting
              </Link>
            </label>
          ) : (
            <button
              onClick={this.handleJoin}
              className="trending-participating-button"
            >
              Join
            </button>
          )}
        </div>
      );
    }
  }
  render() {
    return (
      <div className="home-page-meeting-details-box">
        <div className="meeting-pic-and-info">
          <div>
            <img
              src={this.props.meeting.photoUrl}
              className="home-page-meeting-images"
            ></img>
          </div>

          <div className="home-page-meeting-details">
            <div className="home-page-meeting-name">
              <span className="header-meeting-trend">
                {this.props.meeting.name}
              </span>
            </div>
            <div>
              <span className="meeting-text">Date:</span>{" "}
              {Object.values(this.props.meeting.date).slice(0, 10)}
            </div>
            <div>
              <span className="meeting-text">From:</span>&nbsp;
              <span>
                {this.props.meeting.startTime} to {this.props.meeting.endTime}
              </span>
            </div>
            <div>
              <span className="meeting-text">End Time:</span>{" "}
              {this.props.meeting.endTime}
            </div>
            <div>
              <span className="meeting-text">Partcipating:</span>{" "}
              {this.props.count[this.props.meeting._id]}
            </div>
            <div>
              <span className="meeting-text">Location:</span>{" "}
              {this.props.meeting.location}
            </div>
            <div>
              <span className="meeting-text">Description:</span>{" "}
              {this.props.meeting.description}
            </div>
          </div>
          <div className="trending-meeting-button-container">
            {" "}
            {this.handleParticipateButton()}
          </div>
        </div>
      </div>
    );
  }
}

export default HomePageMeetingButton;
