import React from "react";
import "./task_edit.css";

class TaskEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.task;
    this.update = this.update.bind(this);
    this.handleInstClick = this.handleInstClick.bind(this);
    this.handleInstruction = this.handleInstruction.bind(this);
    this.queueInstruction = this.queueInstruction.bind(this);
    this.pushInstruction = this.pushInstruction.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getTasks();
    this.props.getUserTasks(this.props.currentUser._id);
  }

  componentDidUpdate() {
    if (this.state === null) {
      this.setState(
        Object.assign(this.props.task, {
          ingIdx: "",
          instIdx: "",
          queueIng: "",
          queueInst: "",
        })
      );
    }
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  handleInstClick(idx) {
    this.setState({ ["instIdx"]: idx });
  }

  handleInstruction(e) {
    e.preventDefault();
    let newInstruction = this.state.instructions;
    newInstruction[this.state.instIdx] = e.target.value;
    this.setState({ ["instructions"]: newInstruction });
  }

  queueInstruction(e) {
    e.preventDefault();
    this.setState({ ["queueInst"]: e.target.value });
  }

  pushInstruction(e) {
    e.preventDefault();
    let pushInst = this.state.instructions.slice();
    pushInst = pushInst.concat(this.state.queueInst);
    this.setState({ ["instructions"]: pushInst }, () => {
      this.setState({ ["queueInst"]: "" });
    });
  }

  handleDelete(e) {
    e.preventDefault();
    this.props
      .deleteTask(this.props.task._id)
      .then(this.props.history.push(`/profile`));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .updateTask(this.state)
      .then(() => this.props.history.push(`/tasks/${this.props.task._id}`));
  }

  render() {
    const task = this.props.task;

    if (this.state === null) {
      return null;
    }
    if (this.props.currentUser._id !== task.authorId) {
      this.props.history.push("/");
    }
    return (
      <div className="task-edit-parent">
        <div className="task-edit">
          <div className="task-edit-top">
            <div className="task-edit-top-left">
              <div className="task-edit-img-parent">
                <div className="task-edit-img">
                  <img src={task.photoUrl}></img>
                </div>
                <label className="task-edit-name">
                  Task Name:
                  <input
                    type="text"
                    value={this.state.name}
                    placeholder={task.name}
                    onChange={this.update("name")}
                  />
                </label>
              </div>
            </div>
            <div className="task-edit-top-right">
              <label>
                Difficulty:
                <select
                  onChange={this.update("difficulty")}
                  value={this.state.difficulty}
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </label>
              <label>
                Work Time:
                <select
                  onChange={this.update("workTime")}
                  value={this.state.workTime}
                >
                  <option value="15 min">15 min</option>
                  <option value="30 min">30 min</option>
                  <option value="45 min">45 min</option>
                  <option value="60 min">60 min</option>
                  <option value="75 min">75 min</option>
                  <option value="90 min">90 min</option>
                  <option value="105 min">105 min</option>
                  <option value="120 min">120 min</option>
                </select>
              </label>
              <label>
                Category:&nbsp;&nbsp;
                <select
                  onChange={this.update("category")}
                  value={this.state.category}
                >
                  <option value="" selected disabled>
                    Please select
                  </option>
                  <option value="Chores">Chores</option>
                  <option value="Expenses">Expenses</option>
                </select>
              </label>
              <label>Completed? {task.numCompletes !== 0 ? `yes` : `no`}</label>
            </div>
          </div>
          <div className="task-edit-bottom">
            <div className="task-edit-bottom-left">
              <div className="task-edit-instructions">
                <label>Instructions </label>
                <ul>
                  {this.state.instructions.map((instruction, idx) => {
                    return (
                      <li key={idx}>
                        <textarea
                          className="task-edit-textarea"
                          type="text"
                          value={this.state.instructions[idx]}
                          placeholder={instruction}
                          onClick={() => this.handleInstClick(idx)}
                          onChange={this.handleInstruction}
                        />
                      </li>
                    );
                  })}
                </ul>
                <div className="task-edit-bottom-last-input">
                  <textarea
                    className="instruction-input"
                    type="text"
                    value={this.state.queueInst}
                    placeholder="Add Instruction"
                    onChange={this.queueInstruction}
                  />
                  <button onClick={this.pushInstruction}>+</button>
                </div>
              </div>
            </div>
            <div className="task-edit-bottom-right">
              <div className="task-edit-buttons">
                <button
                  className="task-edit-delete"
                  onClick={this.handleDelete}
                >
                  Delete Task{" "}
                </button>
                <button className="task-edit-save" onClick={this.handleSubmit}>
                  Save Task
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskEdit;
