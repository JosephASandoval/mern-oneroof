import React from "react";
import { Link } from "react-router-dom";
import "./meeting_index.css";
import Meeting_button_container from "./meeting_button_container";

class MeetingIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers().then(() => this.props.getMeetings());
    this.props.getJoins();
  }

  componentWillUnmount() {
    this.props.fetchUsers();
  }

  handleMeetingRendering() {
    if (this.props.loggedIn) {
      return (
        <div className="index-meetings-container">
          <div className="hosting-meetings">
            <ul>
              {Object.values(this.props.meetings).map((meeting) => (
                <li key={meeting._id}>
                  <Link to={`/meetings/${meeting._id}`}>
                    <div className="meeting-index-parent">
                      <div className="meeting-index-parent-info">
                        <div>
                          <div>
                            <img
                              className="meeting-index-photo"
                              src={meeting.photoUrl}
                            ></img>
                          </div>
                        </div>
                        <div className="meeting-index-description-list">
                          <div className="date-index">
                            Date:&nbsp;
                            <span id="meeting-index-info">
                              {Object.values(meeting.date).slice(0, 10)}
                            </span>
                          </div>
                          <div className="date-index">
                            Meeting Name:&nbsp;
                            <span id="meeting-index-info">{meeting.name}</span>
                          </div>
                          <div className="date-index">
                            Participating:&nbsp;
                            <span id="meeting-index-info">
                              {this.props.count[meeting._id]
                                ? this.props.count[meeting._id]
                                : "0"}
                            </span>
                          </div>
                          <div className="date-index">
                            From:&nbsp;
                            <span id="meeting-index-info">
                              {meeting.startTime} to {meeting.endTime}
                            </span>
                          </div>
                          <div className="date-index">
                            Location:&nbsp;
                            <span id="meeting-index-info">
                              {meeting.location}
                            </span>
                          </div>
                          <div className="date-index">
                            Hosted by:&nbsp;
                            <span id="meeting-index-info">
                              {this.props.users[meeting.hostId].username}
                            </span>
                          </div>
                        </div>
                        <div className="index-button-container">
                          <Meeting_button_container meeting={meeting} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
  }

  render() {
    if (!this.props.meetings) {
      return null;
    }

    return <div>{this.handleMeetingRendering()}</div>;
  }
}

export default MeetingIndex;
