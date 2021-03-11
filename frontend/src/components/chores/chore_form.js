import React from 'react';
import "../../styles/chore_form.css";

class ChoreForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      is_done: false,
      newChore: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({ newChore: nextProps.newChore.body })
  // }

  update(property) {
    return e => this.setState({[property]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const chore = Object.assign({}, this.state, { id: new Date().getTime()});  //not sure
    this.props.composeChore(chore);
    this.setState({
      body: "",
      newChore: ""
    }); // reset form  
  }

  render() {
    return (
      <div className='create-container'>
        <form onSubmit={this.handleSubmit}>
          <div className='entry-form'>
            <p>World of Chores </p>
              <input className='form-input'
                value={this.state.body}
                placeholder="name your chore"
                onChange={this.update('body')}
                required/>
            <button className='submit-button'>Create Chore!</button>
          </div>
        </form>
        <br />
      </div>
    );
  }
};

export default ChoreForm;
