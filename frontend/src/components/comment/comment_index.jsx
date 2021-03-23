import React from "react";
import CommentIndexItem from "./comment_index_item";
import "./comment.css";

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      authorId: "",
      taskId: this.props.task._id,
    };
    this.handleComment = this.handleComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearComments();
    this.props.getTaskComments(this.props.task._id);
    if (
      this.props.currentUser !== undefined &&
      Object.keys(this.props.currentUser).length !== 0
    ) {
      this.setState({ ["authorId"]: this.props.currentUser.user._id });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.task !== prevProps.task) {
      this.props.clearComments();
      this.props.getTaskComments(this.props.task._id);
    }
    // debugger;
    // if(this.props.comments[0].taskId !== this.props.task._id) {
    //     this.props.getTaskComments(this.props.task._id)
    // }
    // this.props.getTaskComments(this.props.task._id);
  }

  handleComment(e) {
    e.preventDefault();
    this.setState({ ["body"]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state);
    this.setState({ ["body"]: "" });
  }

  render() {
    const profilePic =
      this.props.currentUser === undefined ||
      Object.keys(this.props.currentUser).length === 0 ? null : (
        <img src={this.props.currentUser.user.photoUrl} alt="" />
      );

    const commentInput =
      this.props.currentUser === undefined ||
      Object.values(this.props.currentUser).length === 0 ? null : (
        <div className="comment-input-section">
          {profilePic}
          <form onSubmit={this.handleSubmit}>
            <input
              className="comment-input"
              type="text"
              value={this.state.body}
              placeholder="Write your comment here..."
              onChange={this.handleComment}
            />
            <button className="comment-submit">Comment</button>
          </form>
        </div>
      );

    return (
      <div className="comment-container">
        <h3>Comments:</h3>
        {commentInput}
        <ul className="comment-section">
          {this.props.comments.map((comment) => {
            return (
              <CommentIndexItem
                comment={comment}
                key={comment._id}
                authors={this.props.authors}
                currentUser={this.props.currentUser}
                deleteComment={this.props.deleteComment}
                task={this.props.task}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CommentIndex;
