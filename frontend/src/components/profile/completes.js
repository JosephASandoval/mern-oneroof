import React from "react";
import { Link } from "react-router-dom";
import "./tasks.css";

class Completes extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getTasks();
    this.props.getAllCompletes();
  }

  render() {
    if (!this.props.tasksCompleted) {
      return <div>you have no completes</div>;
    }
    return (
      <div>
        <div>
          {!this.props.tasksCompleted ? (
            <div>
              <p>You currently have no completed tasks</p>
            </div>
          ) : (
            <div>
              <ul className="task-wrap">
                {this.props.tasksCompleted.map((task, i) => {
                  return (
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
                            <Link
                              className="task-name"
                              to={`/tasks/${task._id}`}
                            >
                              {task.name}
                            </Link>
                          </div>
                        </div>
                        <br></br>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Completes;
