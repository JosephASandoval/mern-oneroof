import React from 'react';
import "../../styles/chore_list_item.css";


const ChoreListItem = props => {
  return (
    <li className="todo-list-item">
      <div className="todo-header">
        {/* <h3><a href onClick={ this.toggleBody }>{ body }</a></h3> */}
        <h3>{ props.chore.body }</h3>
        <button
          className={ props.is_done ? "done" : "undone" }
          // onClick={ this.toggleChore }>
          >
          { props.is_done ? "Undo" : "Done" }
        </button>
        <button onClick={() => props.removeChore(props.chore)} className="delete">Delete this chore</button>
      </div>
    </li>
  )
}

export default ChoreListItem;
