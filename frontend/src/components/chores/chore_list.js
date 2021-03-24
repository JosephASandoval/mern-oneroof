import React from "react";
import { withRouter } from "react-router-dom";
// Components
import ChoreFormContainer from "./chore_form_container";
import ChoreListItem from "./chore_list_item";
import ChoreFilter from "./chore_filter";
import "../../styles/chore_list.css";
import "../../styles/chore_list_item.css";

class ChoreList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chores: [],
    };
  }

  componentWillMount() {
    this.props.fetchAllChores();
  }

  componentWillReceiveProps(newChore) {
    this.state.chores.push(newChore)
  }

  render() {
    const { chores, composeChore, deleteChore } = this.props;
    if (chores.length === 0) {
      return (
        <>
          <ChoreFilter />
          <div className="nothing">There are no chores</div>
          <ChoreFormContainer composeChore={composeChore} />
        </>
      );
    } else {
      return (
        <div>
          <ChoreFilter />
          <ChoreFormContainer composeChore={composeChore} />
          <h2>My Chores</h2>
          <ul>
            {chores.map((chore) => (
              <ChoreListItem
                deleteChore={deleteChore}
                key={chore._id}
                chore={chore}
              />
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default withRouter(ChoreList);
