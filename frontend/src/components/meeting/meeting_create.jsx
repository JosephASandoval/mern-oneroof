import React from "react";
import { uploadPhoto } from "../../util/photo_api_util";
import { Link } from "react-router-dom";
import "./meeting_create.css";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

class MeetingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      hostId: this.props.currentUser._id,
      location: "",
      description: "",
      date: undefined,
      startTime: "",
      endTime: "",
      photoUrl: "",
      photoFile: null,
      photoId: "",
    };

    this.handleClick = this.handleClick.bind(this);
    this.handlePhotoFile = this.handlePhotoFile.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleDayChange(day) {
    this.setState({ date: day });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.meetings !== prevState.meetings) {
      this.props.history.push(`/meetings/${nextProps.meetings.meetingId}`);
    }
    return { errors: nextProps.errors };
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    if (this.state.photoFile) {
      const data = new FormData();
      data.append("file", this.state.photoFile);

      uploadPhoto(data).then((res) => {
        let newMeeting = {
          name: this.state.name,
          hostId: this.state.hostId,
          location: this.state.location,
          description: this.state.description,
          date: this.state.date,
          startTime: this.state.startTime,
          endTime: this.state.endTime,
          photoId: res.data.newData.photoId,
          photoUrl: res.data.newData.Location,
        };
        this.props
          .createMeeting(newMeeting)
          .then((newMeeting) =>
            this.props.history.push(`/meetings/${newMeeting.meeting.data._id}`)
          )
          .catch((err) => this.renderErrors());
      });
    } else {
      let newMeeting = {
        name: this.state.name,
        hostId: this.state.hostId,
        location: this.state.location,
        description: this.state.description,
        date: this.state.date,
        startTime: this.state.startTime,
        endTime: this.state.endTime,
        photoId: this.state.photoId,
        photoUrl: this.state.photoUrl,
      };
      this.props
        .createMeeting(newMeeting)
        .then((newMeeting) =>
          this.props.history.push(`/meetings/${newMeeting.meeting.data._id}`)
        )
        .catch((err) => this.renderErrors());
    }
  }

  handlePhotoFile(e) {
    e.preventDefault();
    this.setState({
      photoFile: e.target.files[0],
    });
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
    const { selectedDay } = this.state;

    if (this.props.currentUser === undefined) {
      return null;
    }
    return (
      <div>
        <form className="meeting-create-form">
          <h1 className="meeting-create-header">Create New Meeting</h1>

          <div className="input-field-meeting-create-container">
            <label className="meeting-create-label">
              Meeting Name:&nbsp;&nbsp;
            </label>
            <input
              type="text"
              className="input-field-meeting-create"
              value={this.state.name}
              onChange={this.update("name")}
            />
          </div>

          <div className="input-field-meeting-create-container">
            {selectedDay && (
              <label>Day: {selectedDay.toLocaleDateString()}</label>
            )}
            {!selectedDay && (
              <label className="meeting-create-label">
                Meeting Date:&nbsp;&nbsp;
              </label>
            )}
            <span className="input-field-meeting-create">
              <DayPickerInput onDayChange={this.handleDayChange} />
            </span>
          </div>

          <div className="input-field-meeting-create-container">
            <label className="meeting-create-label">
              Start Time:&nbsp;&nbsp;
            </label>
            <input
              type="time"
              className="input-field-meeting-create"
              value={this.state.startTime}
              onChange={this.update("startTime")}
            />
          </div>

          <div className="input-field-meeting-create-container">
            <label className="meeting-create-label">
              End Time:&nbsp;&nbsp;
            </label>
            <input
              type="time"
              className="input-field-meeting-create"
              value={this.state.endTime}
              onChange={this.update("endTime")}
            />
          </div>

          <div className="input-field-meeting-create-container">
            <label className="meeting-create-label">
              Location or Link:&nbsp;&nbsp;
            </label>
            <input
              type="text"
              className="input-field-meeting-create"
              value={this.state.location}
              onChange={this.update("location")}
            />
          </div>

          <div className="input-field-meeting-create-container">
            <label className="meeting-create-label">
              Description:&nbsp;&nbsp;
            </label>
            <input
              type="textbox"
              className="input-field-meeting-create textbox"
              value={this.state.description}
              onChange={this.update("description")}
            />
          </div>

          <div className="input-field-meeting-create-container">
            <label className="meeting-create-label">
              Meeting Photo:&nbsp;&nbsp;
            </label>
            <input
              type="file"
              className="input-field-meeting-create textbox"
              name=""
              onChange={this.handlePhotoFile}
            />
          </div>

          <div>
            <div>
              <input
                type="submit"
                className="host-meeting-button"
                value="Save Meeting"
                onClick={this.handleClick}
              />
            </div>
          </div>
          <div className="errors">{this.renderErrors()}</div>
        </form>
      </div>
    );
  }
}
export default MeetingForm;
