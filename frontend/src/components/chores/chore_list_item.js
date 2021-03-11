import React from "react";
import "../../styles/chore_list_item.css";

class ChoreListItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    this.props.deleteChore(id);
    this.forceUpdate();
  }

  render() {
    const chore = this.props.chore;

    return (
      <li className="todo-list-item">
        <div className="todo-header">
          {/* <h3><a href onClick={ this.toggleBody }>{ body }</a></h3> */}
          <h3>{chore.body}</h3>
          {/* <button
            className={props.is_done ? "done" : "undone"}
            // onClick={ this.toggleChore }>
          >
            {props.is_done ? "Undo" : "Done"}
          </button> */}
          <button
            onClick={() => this.props.deleteChore(chore._id)}
            className="delete"
          >Delete this chore
          </button>
        </div>
      </li>
    );
  }
}

export default ChoreListItem;
