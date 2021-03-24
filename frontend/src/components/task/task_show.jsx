import React from "react";
import "./task_show.css";
import "./complete.css";
import { Link } from "react-router-dom";

import CommentShowContainer from "../comment/comment_index_container";

class TaskShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    this.handleUncomplete = this.handleUncomplete.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
    this.props.getTasks();
    this.props.clearCompletes();
    this.props.getTaskCompletes(this.props.taskId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.taskId !== this.props.taskId) {
      this.props.clearCompletes();
      this.props.getTask(this.props.taskId);
      this.props.getTaskCompletes(this.props.taskId);
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props
      .deleteTask(this.props.task._id)
      .then(this.props.history.push(`/profile`));
  }

  handleComplete(e) {
    e.preventDefault();
    this.props.createComplete({
      completerId: this.props.currentUser.user._id,
      taskId: this.props.task._id,
    });
    this.props.getTaskCompletes(this.props.taskId);
  }

  handleUncomplete(completeId) {
    this.props.deleteComplete(completeId);
    this.props.getTaskCompletes(this.props.taskId);
  }

  render() {
    if (
      this.props.task === undefined ||
      Object.keys(this.props.authors).length === 0
    ) {
      return null;
    }
    const task = this.props.task;
    const author = this.props.authors[task.authorId];

    // sorting through completes
    const completes = Object.values(this.props.completes);
    const completeIds = Object.keys(this.props.completes);
    let peopleCompleted = [];
    let i;
    for (i = 0; i < completes.length; i++) {
      peopleCompleted.push(completes[i].completerId);
    }
    let idx =
      this.props.currentUser === undefined
        ? null
        : Object.values(this.props.currentUser).length === 0
        ? null
        : peopleCompleted.indexOf(this.props.currentUser.user._id);
    let completeId = completeIds[idx];
    // sorting through completes

    const userOnlyBtns =
      this.props.currentUser === undefined ? null : this.props.currentUser
          .user === undefined ? null : this.props.currentUser.user._id !==
        task.authorId ? null : (
        <div className="user-only-btns">
          <Link className="user-only-btn-edit" to={`/tasks/${task._id}/edit`}>
            Edit Task
          </Link>
          <button className="user-only-btn-delete" onClick={this.handleDelete}>
            Delete Task
          </button>
        </div>
      );

    const completeBtn =
      this.props.currentUser === undefined ? null : this.props.currentUser
          .user === undefined ? null : this.props.currentUser.user._id ===
        task.authorId ? null : peopleCompleted.includes(
          this.props.currentUser.user._id
        ) ? (
        <button
          className="complete-btns"
          onClick={() => this.handleUncomplete(completeId)}
        >
          Uncomplete
        </button>
      ) : (
        <button className="complete-btns" onClick={this.handleComplete}>
          Complete
        </button>
      );

    return (
      <div className="task-show-container">
        <div className="task-show-info">
          <div className="task-pic">
            <img src={task.photoUrl} alt="" />
            <h4>{task.name}</h4>
          </div>
          <div className="task-misc-info">
            <ul>
              <li>
                <h4>
                  Difficulty:&nbsp;&nbsp;<span>{task.difficulty}</span>
                </h4>
              </li>
              <li>
                <h4>
                  Work Time:&nbsp;&nbsp;<span>{task.workTime}</span>
                </h4>
              </li>
              <li>
                <h4>Number Completed:&nbsp;&nbsp;{peopleCompleted.length}</h4>
              </li>
              {completeBtn}
              {userOnlyBtns}
            </ul>
          </div>
        </div>
        <div className="task-detail-info">
          <div className="task-show-ing-inst">
            <h4>Instructions: </h4>
            <ul className="task-inst-list">
              {task.instructions.map((instruction, idx) => {
                return <li key={idx}>{instruction}</li>;
              })}
            </ul>
          </div>
          <div className="task-owner-tip-info">
            <div className="task-show-owner">
              <div className="task-show-owner-personal-cont">
                <h3>Task&nbsp;Owner:</h3>
                <div className="task-show-owner-content">
                  <img src={author.photoUrl} alt="author-img" />
                  <h4>{author.username}</h4>
                </div>
              </div>
              <div className="task-show-owner-tip-cont">
                <h4>Task Tip:</h4>
                {task.tip}
              </div>
            </div>
          </div>
        </div>
        <CommentShowContainer task={task} authors={this.props.authors} />
        <Link className="task-show-go-back-btn-text" to="/profile">
          <button className="task-show-go-back-btn">Go Back</button>
        </Link>
      </div>
    );
  }
}

export default TaskShow;
