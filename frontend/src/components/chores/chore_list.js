import React from "react";
import { withRouter } from "react-router-dom";
// Components
import ChoreListItem from "./chore_list_item";
import ChoreFormContainer from "./chore_form_container";
import "../../styles/chore_list.css";
import "../../styles/chore_list_item.css";

class ChoreList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chores: [],
    };
  }

  // when adding new chore, not added to all, added to new slice of state
  //immediately add new chore to all slice of state
  componentWillMount() {
    this.props.fetchAllChores();
  }

  componentWillReceiveProps(newChore) {
    this.state.chores.push(newChore)
  }

  render() {
    const { chores, composeChore } = this.props;
    if (chores.length === 0) {
      return (
        <>
          <div className="nothing">There are no chores</div>
          <ChoreFormContainer composeChore={composeChore} />
        </>
      );
    } else {
      return (
        <div>
          <ChoreFormContainer composeChore={composeChore} />
          <h2>My Chores</h2>
          <ul>
            <li>
              {this.props.chores.map((chore) => (
                <ChoreListItem key={chore._id} body={chore.body} ></ChoreListItem>
              ))}
            </li>
          </ul>
        </div>
      );
    }
  }
}

export default withRouter(ChoreList);
