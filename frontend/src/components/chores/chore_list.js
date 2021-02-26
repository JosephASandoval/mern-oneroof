import React from 'react';
// Components
import ChoreListItem from './chore_list_item';
import ChoreFormContainer from './chore_form_container';

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
        <ChoreFormContainer receiveChore={ receiveChore }/>
      </div>
    );
  }
}

export default ChoreList;
