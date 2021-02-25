import React from 'react';

class ChoreForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      is_done: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const chore = Object.assign({}, this.state, { id: new Date().getTime()});  //not sure
    this.props.composeChore(chore);
    this.setState({
      body: ""
    }); // reset form
  }

  render() {
    return (
      <form className="chore-form" onSubmit={this.handleSubmit}>
        <label>Chores:
          <input
            value={this.state.body}
            placeholder="name your chore"
            onChange={this.update('body')}
            required/>
        </label>

        <button className="create-button">Create Chore!</button>
      </form>
    );
  }
};

export default ChoreForm;
