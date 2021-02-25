import React from 'react';

class ChoreListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {detail: false};
    // this.toggleDetail = this.toggleDetail.bind(this);
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

     this.props.receiveChore(toggledChore);
  }

  render() {
    const { todo , updateChore } = this.props;
    const { title, done } = todo;
    let body;
    if (this.state.body) {
      detail = <TodoDetailViewContainer todo={ todo } />;
    }

    return (
      <li className="todo-list-item">
        <div className="todo-header">
          <h3><a onClick={ this.toggleDetail }>{ title }</a></h3>
          <button
            className={ done ? "done" : "undone" }
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
