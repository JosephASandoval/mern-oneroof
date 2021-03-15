import React from 'react'
import "../../styles/expense_create.css";


class ExpenseCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.expense;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value})
        }
    }

    handleSubmit() {
        this.props.createExpense(this.state);
        // debugger
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>{this.props.formType}</h1>

                <label>Expense:
                    <input 
                    type="text"
                    value={this.state.body}
                    onChange={this.update('body')}
                    />
                </label>

                <label>Amount:
                    <input 
                    type="text"
                    value={this.state.amount}
                    onChange={this.update('amount')}
                    />
                </label>

                <button class="create" value="submit">{this.props.formType}</button>

            </form>
        )
    }
}

export default ExpenseCreate;