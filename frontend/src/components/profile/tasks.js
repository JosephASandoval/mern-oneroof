import React from "react";
import { Link } from "react-router-dom";
import "./tasks.css";

class Tasks extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.clearTasks();
    this.props.getUserTasks(this.props.currentUser._id);
  }

  render() {
    if (!this.props.tasks) {
      return null;
    }
    return (
      <div>
        <br></br>
        <div className="button-container">
          <Link to="/tasks/new">
            <button id="add-task-button">Create New Task</button>
          </Link>
        </div>
        <ul className="task-wrap">
          {Object.values(this.props.tasks).map((task, i) => (
            <li className="task-list" key={i}>
              <div>
                <div className="single-task-container">
                  <div>
                    <Link to={`/tasks/${task._id}`}>
                      {" "}
                      <img
                        className="task-profile-photo"
                        src={task.photoUrl}
                      ></img>
                    </Link>
                  </div>
                  <div>
                    <Link className="task-name" to={`/tasks/${task._id}`}>
                      {task.name}
                    </Link>
                  </div>
                </div>
                <br></br>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Tasks;
