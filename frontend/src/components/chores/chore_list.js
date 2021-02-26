import React from 'react';
import { withRouter } from 'react-router-dom';
// Components
import ChoreListItem from './chore_list_item';
import ChoreFormContainer from './chore_form_container';
import "../../styles/chore_list.css";
import "../../styles/chore_list_item.css";
// import ChoreBox from './chore_box';

class ChoreList extends React.Component {
  constructor (props) {
    super(props);

    this.state ={
      chores: []
    }
  }

  // when adding new chore, not added to all, added to new slice of state
  //immediately add new chore to all slice of state
  componentWillMount() {
    this.props.fetchAllChores();
  }

  componentWillReceiveProps(newState) {
    this.setState({ chores: newState.chores })
  }
  
  render() {
    const { chores, composeChore } = this.props;
    // debugger
    if (chores.length === 0) {
      return (
        <>
          <div className="nothing">There are no chores</div>
          <ChoreFormContainer composeChore={ composeChore }/>
        </>
      )
    } else {
      return(
        <div>
          <ChoreFormContainer composeChore={ composeChore }/>
          <h2>My Chores</h2>
          <ul className="chore-list">
            {this.props.chores.map(chore => (
              <ChoreListItem key={chore._id} body={chore.body} />
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default withRouter(ChoreList);
