import React from 'react';
import "../../styles/chore_list_item.css";

class ChoreListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {detail: false};
    this.toggleBody = this.toggleBody.bind(this);
    this.toggleChore = this.toggleChore.bind(this);
  }

  toggleBody(e) {
    e.preventDefault();
    this.setState({ detail: !this.state.detail });
  }

  toggleChore(e) {
    e.preventDefault();
    const toggledChore = Object.assign(
      {},
      this.props.chore,
      { is_done: !this.props.chore.done }
    );

     this.props.receiveNewChore(toggledChore);
  }

  render() {
    const { body, is_done } = this.props;
    // const { body, is_done } = chore;
    // let body;
    // if (this.state.body) {
    //   detail = <TodoDetailViewContainer todo={ todo } />;
    // }

    return (
      <li className="todo-list-item">
        <div className="todo-header">
          <h3><a href onClick={ this.toggleBody }>{ body }</a></h3>
          <button
            className={ is_done ? "done" : "undone" }
            onClick={ this.toggleChore }>
            { is_done ? "Undo" : "Done" }
          </button>
        </div>
        { body }
      </li>
    );
  }
}

export default ChoreListItem;
