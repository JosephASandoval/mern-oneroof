import React from "react";
import { Link } from "react-router-dom";
import "./meeting_index.css";

class MeetingButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: true };
    this.handleJoin = this.handleJoin.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.getJoins();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.meeting._id !== this.props.meeting._id) {
      this.props.getJoins();
    }
  }

  handleJoin(e) {
    e.preventDefault();
    this.props.createJoin({
      joinerId: this.props.currentUser._id,
      meetingId: this.props.meeting._id,
    });
    this.setState({ clicked: false });
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteJoin(this.props.joinedMeeting._id);
    this.setState({ clicked: false });
  }

  render() {
    return (
      <div>
        {this.props.joinedMeeting ? (
          <button onClick={this.handleDelete} className="index-unjoin-button">
            Unjoin
          </button>
        ) : this.props.currentUser._id === this.props.meeting.hostId ? (
          <div className="index-hosting-button">
            <Link
              className="hosting-text"
              to={`/meetings/${this.props.meeting._id}`}
            >
              Hosting
            </Link>
          </div>
        ) : (
          <button
            onClick={this.handleJoin}
            className="index-participating-button"
          >
            Join
          </button>
        )}
      </div>
    );
  }
}

export default MeetingButton;
