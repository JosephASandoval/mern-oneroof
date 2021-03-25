import React from "react";
import { Link } from "react-router-dom";
import "./meetings.css";
import "../meeting/meeting_index.css";

class Meetings extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers();
    this.props.getMeetings();
    this.props.getUserJoins(this.props.currentUser._id);
  }

  render() {
    if (!this.props.meetings && !this.props.meetingJoined) {
      return null;
    }
    return (
      <div>
        <div className="hosting-meetings">
          <ul>
            {Object.values(this.props.meetings).map((meeting, i) => {
              if (this.props.currentUser._id === meeting.hostId) {
                return (
                  <li key={i}>
                    <div className="meeting-index-parent">
                      <div className="meeting-index-parent-info">
                        <div>
                          <div>
                            <Link to={`/meetings/${meeting._id}`}>
                              {" "}
                              <img
                                className="meeting-index-photo"
                                src={meeting.photoUrl}
                              ></img>
                            </Link>
                          </div>
                        </div>
                        <div className="meeting-index-description-list">
                          <div className="date-index">
                            Date:&nbsp;
                            <span id="meeting-index-info">
                              {Object.values(meeting.date)
                                .slice(5, 10)
                                .concat(
                                  "-",
                                  Object.values(meeting.date).slice(0, 4)
                                )}
                            </span>
                          </div>
                          <div className="date-index">
                            Meeting Name:&nbsp;
                            <Link
                              id="meeting-name"
                              to={`/meetings/${meeting._id}`}
                            >
                              {meeting.name}
                            </Link>
                          </div>
                          <div className="date-index">
                            Partcipating:&nbsp;
                            <span className="meeting-index-info">
                              {this.props.count[meeting._id]}
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
                        <div className="index-hosting-button">
                          <Link
                            className="hosting-meeting-txt"
                            to={`/meetings/${meeting._id}`}
                          >
                            Hosting
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              }
            })}
          </ul>
        </div>

        <div className="participating-meetings hosting-meetings ">
          <ul>
            {this.props.meetingJoined.map((meeting, i) => {
              return (
                <li key={i}>
                  <div className="meeting-index-parent">
                    <div className="meeting-index-parent-info">
                      <div>
                        <div>
                          <Link to={`/meetings/${meeting._id}`}>
                            {" "}
                            <img
                              className="meeting-index-photo"
                              src={meeting.photoUrl}
                            ></img>
                          </Link>
                        </div>
                      </div>
                      <div className="meeting-index-description-list">
                        <div className="date-index">
                          Date:&nbsp;
                          <span id="meeting-index-info">
                            {Object.values(meeting.date)
                              .slice(5, 10)
                              .concat(
                                "-",
                                Object.values(meeting.date).slice(0, 4)
                              )}
                          </span>
                        </div>
                        <div className="date-index">
                          Meeting Name:&nbsp;
                          <Link
                            id="meeting-name"
                            to={`/meetings/${meeting._id}`}
                          >
                            {meeting.name}
                          </Link>
                        </div>
                        <div className="date-index">
                          Partcipating:&nbsp;
                          <span className="meeting-index-info">
                            {this.props.count[meeting._id]}
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
                      <div className="index-participating-button">
                        <Link
                          className="participating-meeting-txt"
                          to={`/meetings/${meeting._id}`}
                        >
                          Participating
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Meetings;
