
import React from 'react';
import TodoList from "./todoList";

class Chores extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            body: '',
            is_done: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({body: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.body.length ===0) {
            return;
        }
        const newItem = {
            body: this.state.body,
            id: Date.now()
        }
        this.setState(state => ({
            items: state.items.concat(newItem),
            body: ''
        }))
    }
    render() { 
        return (
            <div>
                <h3>Chores</h3>
                <TodoList body={this.state.body} />
                <form onSubmit={this.handleSubmit}>
                    <p>Chores List</p>
                    <input type="text"
                        value={this.state.body}
                        onChange={this.handleChange}
                        placeholder="Write your chore..."
                    />
                    <button>Add this chore</button>
                </form>
            </div>
          );
    }
}
 
export default Chores;

