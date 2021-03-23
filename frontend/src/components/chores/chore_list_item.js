import React from "react";
import "../../styles/chore_list_item.css";

class ChoreListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const chore = this.props.chore;
    return (
        <div className="Postbox-Container">
          <p>{chore.body}</p>
          <p>Priority: {chore.priority}</p>
          <button
            onClick={() => this.props.deleteChore(chore._id)}
            className="delete"
          >Delete this chore
          </button>
        </div>
    );
  }
}

export default ChoreListItem;
