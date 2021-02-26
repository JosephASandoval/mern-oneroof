import React from 'react';
// Components
import ChoreListItem from './chore_list_item';
import ChoreFormContainer from './chore_form_container';
import "../../styles/chore_list.css";

class ChoreList extends React.Component {
  render() {
    const { chores, receiveChore } = this.props;
    // const choreItems = chores.map(chore => (
    //     <ChoreListItem
    //       key={`chore-list-item${chore.id}`}
    //       chore={chore}
    //       receiveChore={ receiveChore } />
    //   )
    // );

    if (this.props.chores.length === 0) {
      return (
        <>
          <div>There are no chores</div>
          <ChoreFormContainer receiveChore={ receiveChore }/>
        </>
      )
    } else {
      return(
        <div>
          <h2>My Chores</h2>
          <ul className="chore-list">
            {/* { choreItems } */}
            {this.state.chores.map(chore => (
              <ChoreListItem key={chore._id} body={chore.body} />
            ))}
          </ul>
          <ChoreFormContainer receiveChore={ receiveChore }/>
        </div>
      );
    }
  }
}

export default ChoreList;
