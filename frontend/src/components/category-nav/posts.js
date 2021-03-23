import React from "react";
import { Link } from "react-router-dom";

class Posts extends React.Component {
  componentDidMount() {
    this.props.getTaskUsingCategory("Posts");
  }

  render() {
    if (!this.props.categoryTasks) {
      return null;
    }
    return (
      <div className="category-task">
        {Object.values(this.props.categoryTasks).map((categoryTask) => (
          <li key={categoryTask._id}>
            <Link to={`/tasks/${categoryTask._id}`}>
              <ul className="category-task-list">
                <li className="category-task-photo-container">
                  <img
                    className="category-task-photo"
                    src={categoryTask.photoUrl}
                  ></img>
                </li>
                <li className="category-task-name">{categoryTask.name}</li>
              </ul>
            </Link>
          </li>
        ))}
      </div>
    );
  }
}

export default Posts;
