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
        <div className="Postbox-Container">
          {/* <h3><a href onClick={ this.toggleBody }>{ body }</a></h3> */}
          <p>{chore.body}</p>
          {/* <button
            className={props.is_done ? "done" : "undone"}
            // onClick={ this.toggleChore }>
          >
            {props.is_done ? "Undo" : "Done"}
          </button> */}
          <button
            onClick={() => this.handleDelete(chore._id)}
            className="delete"
          >Delete
          </button>
        </div>
    );
  }
}

export default ChoreListItem;
