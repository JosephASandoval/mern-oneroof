import React from "react";
import ChoreFilter from "./chore_filter";
import "../../styles/chore_form.css";

class ChoreForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      is_done: false,
      priority: "",
      newChore: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({ newChore: nextProps.newChore.body })
  // }

  update(property) {
    return (e) => this.setState({ [property]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.state.priority = document.getElementById("priority").value;
    const chore = Object.assign({}, this.state, { id: new Date().getTime() }); //not sure
    this.props.composeChore(chore);
    this.setState({
      body: "",
      newChore: "",
      priority: "",
    }); // reset form
  }

  render() {
    return (
      <div className="create-container">
        <form onSubmit={this.handleSubmit}>
          <div className="entry-form">
            <p>World of Chores </p>
            <input
              className="form-input"
              value={this.state.body}
              placeholder="name your chore"
              onChange={this.update("body")}
              required
            />
            <div className="priority-select">
              <label for="priority">Set priority:</label>
              <select name="priority" id="priority">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
              <button className="submit-button">Create Chore!</button>
            </div>
          </div>
        </form>
        <br />
      </div>
    );
  }
}

export default ChoreForm;
