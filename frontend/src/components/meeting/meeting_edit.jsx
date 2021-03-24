import React from "react";
import "./meeting_create.css";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import "./meeting_edit.css";
import { Link } from "react-router-dom";

class EditMeeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.meeting;

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
  }

  componentDidMount() {
    this.props.getMeetings();
    this.props.clearErrors();
  }

  handleDayChange(day) {
    this.setState({ date: day });
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .updateMeeting(this.state)
      .then(() =>
        this.props.history.push(`/meetings/${this.props.meeting._id}`)
      )
      .catch((err) => this.renderErrors());
  }

  renderErrors() {
    return (
      <ul>
        {Object.values(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>*{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    const meeting = this.props.meeting;
    const { selectedDay } = this.state;
    if (this.state === null) {
      return null;
    }

    return (
      <div>
        <form className="meeting-edit-form">
          <h1 className="meeting-edit-header">Edit Meeting</h1>

          <div className="input-field-meeting-edit-container">
            <label label className="meeting-create-label">
              Meeting Name:&nbsp;&nbsp;
            </label>
            <input
              type="text"
              className="input-field-meeting-create"
              value={this.state.name}
              placeholder={meeting.name}
              onChange={this.update("name")}
            />
          </div>

          <div className="input-field-meeting-edit-container">
            {selectedDay && (
              <label>Day: {selectedDay.toLocaleDateString()}</label>
            )}
            {!selectedDay && (
              <label className="meeting-create-label">Choose a day</label>
            )}
            <span className="input-field-meeting-create">
              <DayPickerInput onDayChange={this.handleDayChange} />
            </span>
          </div>

          <div className="input-field-meeting-edit-container">
            <label className="meeting-create-label">
              Start Time:&nbsp;&nbsp;
            </label>
            <input
              type="time"
              className="input-field-meeting-create"
              value={this.state.startTime}
              placeholder={meeting.startTime}
              onChange={this.update("startTime")}
            />
          </div>

          <div className="input-field-meeting-edit-container">
            <label className="meeting-create-label">
              End Time:&nbsp;&nbsp;
            </label>
            <input
              type="time"
              className="input-field-meeting-create"
              value={this.state.endTime}
              placeholder={meeting.endTime}
              onChange={this.update("endTime")}
            />
          </div>

          <div className="input-field-meeting-edit-container">
            <label className="meeting-create-label">
              Location:&nbsp;&nbsp;
            </label>
            <input
              type="text"
              className="input-field-meeting-create"
              value={this.state.location}
              placeholder={meeting.location}
              onChange={this.update("location")}
            />
          </div>

          <div className="input-field-meeting-edit-container">
            <label className="meeting-create-label">
              Description:&nbsp;&nbsp;
            </label>
            <input
              type="textbox"
              className="input-field-meeting-create"
              value={this.state.description}
              placeholder={meeting.description}
              onChange={this.update("description")}
            />
          </div>

          <button className="host-meeting-button" onClick={this.handleSubmit}>
            Save Meeting
          </button>
          <div>
            <Link to="/profile">
              {" "}
              <button className="go-back">Go back</button>
            </Link>
          </div>
          <div className="errors">{this.renderErrors()}</div>
        </form>
      </div>
    );
  }
}

export default EditMeeting;
