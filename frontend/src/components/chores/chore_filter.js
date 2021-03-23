import React from 'react';
import { connect } from "react-redux";
import { fetchFilteredChores } from "../../actions/chore_actions"


class ChoreFilter extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
        e.preventDefault();
        this.props.fetchFilteredChores(e.target.value)
  }

  render() {
    return (
      <form onChange={this.handleInput}>
            <label for="priority">Filter by priority: </label>
              <select name="priority" id="priority-filter">
                <option value='All'>All</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
        </form>
    )
  };
}

  const mapStateToProps = state => {
    return {
          chores: Object.values(state.chores.all)
    }
  };

  const mapDispatchToProps = dispatch => ({
    fetchFilteredChores: (priority) => dispatch(fetchFilteredChores(priority))
  })


export default connect(mapStateToProps, mapDispatchToProps)(ChoreFilter);
