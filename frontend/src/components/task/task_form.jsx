import React from "react";
import "./task.css";
import { uploadPhoto } from "../../util/photo_api_util";

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authorId: this.props.currentUser._id,
      name: "",
      instructions: this.props.instructions,
      comments: [],
      workTime: "",
      difficulty: "",
      category: "",
      numCompletes: 0,
      photoId: "",
      photoFile: null,
      photoUrl: "",
    };
    this.handleInstruction = this.handleInstruction.bind(this);
    this.addInstruction = this.addInstruction.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handlePhotoFile = this.handlePhotoFile.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }
  handleInstruction(e) {
    e.preventDefault();
    this.setState({ ["pendingInstruction"]: e.target.value });
  }
  addInstruction(e) {
    e.preventDefault();
    let newInstructions = this.state.instructions.concat(
      this.state.pendingInstruction
    );
    this.setState({ ["instructions"]: newInstructions });
    this.setState({ ["pendingInstruction"]: "" });
  }
  handleClick(e) {
    e.preventDefault();
    if (this.state.photoFile) {
      const data = new FormData();
      data.append("file", this.state.photoFile);

      uploadPhoto(data).then((res) => {
        let newTask = {
          authorId: this.state.authorId,
          name: this.state.name,
          instructions: this.state.instructions,
          comments: this.state.comments,
          workTime: this.state.workTime,
          difficulty: this.state.difficulty,
          category: this.state.category,
          numCompletes: this.state.numCompletes,
          photoId: res.data.newData.photoId,
          photoUrl: res.data.newData.Location,
        };
        this.props
          .createTask(newTask)
          .then((task) =>
            this.props.history.push(`/tasks/${task.task.data._id}`)
          )
          .catch((err) => this.renderErrors());
      });
    } else {
      this.props
        .createTask(this.state)
        .then((task) => this.props.history.push(`/tasks/${task.task.data._id}`))
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
    if (this.props.currentUser === undefined) {
      return null;
    }
    return (
      <div className="form-container">
        <form id="task_form" className="task-form-cont">
          <h1 className="task-create-header">Create New Task</h1>
          <br />
          <br />

          <div className="task-top">
            <div className="task-pic-name">
              <input
                type="file"
                name=""
                id=""
                onChange={this.handlePhotoFile}
              />
              <input
                type="text"
                onChange={this.update("name")}
                placeholder="Name of your task"
              />
            </div>
            <div className="task-info">
              <label>
                <div className="work-time-option-container">
                  <h3>Work Time:</h3>
                  <select onChange={this.update("workTime")}>
                    <option value="" selected disabled>
                      Please select
                    </option>
                    <option value="< 15 min">15 min</option>
                    <option value="15 min">15 min</option>
                    <option value="30 min">30 min</option>
                    <option value="45 min">45 min</option>
                    <option value="60 min">60 min</option>
                    <option value="75 min">75 min</option>
                    <option value="90 min">90 min</option>
                    <option value="105 min">105 min</option>
                    <option value="120 min">120 min</option>
                    <option value="> 120 min">120 min</option>
                  </select>
                </div>
              </label>
              <label>
                <div className="difficulty-option-container">
                  <h3>Difficulty:</h3>
                  <select onChange={this.update("difficulty")}>
                    <option value="" selected disabled>
                      Please select
                    </option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                </div>
              </label>
              <label>
                <div className="category-option-container">
                  <h3>Category:</h3>
                  <select onChange={this.update("category")}>
                    <option value="" selected disabled>
                      Please select
                    </option>
                    <option value="Chores">Chores</option>
                    <option value="Expenses">Expenses</option>
                  </select>
                </div>
              </label>
            </div>
          </div>
          <div className="task-middle">
            <div className="task-owner">
              <h3>Task Creator:</h3>
              <h5>
                <img
                  className="task-owner-pic"
                  src={this.props.currentUser.photoUrl}
                  alt=""
                />
                <span>{this.props.currentUser.username}</span>
              </h5>
            </div>
          </div>
        </form>
        <div className="ing-inst-container">
          <form className="inst-form" onSubmit={this.addInstruction}>
            <h3>Instructions:</h3>
            <div className="inst-form-inputs">
              <input type="submit" value="+" />
              <input
                className="add-instruction-input"
                type="text"
                placeholder="Add instruction"
                value={this.state.pendingInstruction}
                onChange={this.handleInstruction}
              />
            </div>
            <ul className="instruction-list-form">
              {this.state.instructions.map((instruction, idx) => {
                return <li key={idx}>{instruction}</li>;
              })}
            </ul>
          </form>
        </div>
        <input
          className="save-task-btn"
          type="submit"
          value="Save Task"
          onClick={this.handleClick}
        />
        <div>{this.renderErrors()}</div>
      </div>
    );
  }
}
export default TaskForm;
