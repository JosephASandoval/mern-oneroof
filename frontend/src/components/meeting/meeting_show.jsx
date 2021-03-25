import React from "react";
import { Link } from "react-router-dom";
import "./meeting_show.css";

class MeetingShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleJoin = this.handleJoin.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = { clicked: true };
  }

  handleClick(e) {
    e.preventDefault();
    this.props
      .deleteMeeting(this.props.meeting._id)
      .then(() => this.props.history.push("/profile"));
  }

  componentDidMount() {
    this.props.getMeetings();
    this.props.getJoins();
  }

  handleJoin(e) {
    e.preventDefault();
    this.props.createJoin({
      joinerId: this.props.currentUser.user._id,
      meetingId: this.props.meeting._id,
    });
    this.setState({ clicked: false });
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteJoin(this.props.joinedMeeting._id);
    this.setState({ clicked: false });
  }

  handleMeetingShowRendering() {
    if (this.props.loggedIn && this.props.meeting) {
      return (
        <div>
          <div className="meeting-show-container">
            <div className="meeting-photo-container">
              <img
                className="meeting-photo-show"
                src={this.props.meeting.photoUrl}
              />
            </div>
            <div className="meeting-info-show">
              <div>
                <label id="meeting-label">Meeting Name: </label>
                {this.props.meeting.name}{" "}
              </div>
              <div>
                {" "}
                <label id="meeting-label">Date: </label>
                {Object.values(this.props.meeting.date)
                  .slice(5, 10)
                  .concat(
                    "-",
                    Object.values(this.props.meeting.date).slice(0, 4)
                  )}
              </div>
              <div>
                {" "}
                <label id="meeting-label">From: </label>
                {this.props.meeting.startTime} to {this.props.meeting.endTime}
              </div>
              <div>
                <label id="meeting-label">Location or Link: </label>
                {this.props.meeting.location}
              </div>
              <div>
                <label id="meeting-label">Description: </label>
                {this.props.meeting.description}
              </div>
              <div className="buttons">
                {this.props.currentUser.user._id ===
                this.props.meeting.hostId ? (
                  <div>
                    <div>
                      <Link to={`/meetings/${this.props.meeting._id}/edit`}>
                        <button className="edit-show-meeting-button">
                          &nbsp;Edit Meeting
                        </button>
                      </Link>
                    </div>
                    <div>
                      <button
                        className="delete-show-meeting-button"
                        onClick={this.handleClick}
                      >
                        &nbsp;Delete Meeting
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    {this.props.joinedMeeting ? (
                      <button
                        onClick={this.handleDelete}
                        className="unjoin-show-meeting-button"
                      >
                        Unjoin
                      </button>
                    ) : (
                      <button
                        className="join-show-meeting-button"
                        onClick={this.handleJoin}
                      >
                        Join
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  render() {
    if (this.props.meeting === undefined) {
      return null;
    }
    return <div>{this.handleMeetingShowRendering()}</div>;
  }
}

export default MeetingShow;
