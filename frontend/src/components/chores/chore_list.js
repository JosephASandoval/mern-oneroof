import React from 'react';
// Components
import ChoreListItem from './chore_list_item';
import ChoreForm from './chore_form';

class ChoreList extends React.Component {

  render() {
    const { chores, receiveChore } = this.props;
    const choreItems = chores.map(chore => (
        <ChoreListItem
          key={`chore-list-item${chore.id}`}
          chore={chore}
          receiveChore={ receiveChore } />
      )
    );

    return(
      <div>
        <ul className="chore-list">
          { choreItems }
        </ul>
        <ChoreForm receiveChore={ receiveChore }/>
      </div>
    );
  }
}

export default ChoreList;
