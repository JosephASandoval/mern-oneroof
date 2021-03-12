import React from 'react';
import ExpenseCreateContainer from './expense_create_container'
import ExpenseListItem from './expense_list_item'

class Expenses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expenses: [],
        }

    }

    componentDidMount() {
        this.props.fetchExpenses();
    }

    componentWillReceiveProps(newState) {
        this.setState({expenses: newState.expenses });
    }

    render() {
        return (
            <>
                <ExpenseCreateContainer expenses={this.props.expenses} createExpense={this.props.createExpense}/>
                <ul>
                    {
                        this.props.expenses.map(expense => {
                            if (expense) {
                                 return <ExpenseListItem expense={expense} key={expense._id} destroyExpense={this.props.destroyExpense}  />
                            }
                        })
                    }
                </ul>
            </>
        )
    }
}

export default Expenses;
