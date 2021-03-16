import React from 'react'
import "../../styles/expense_list_item.css";


class ExpenseListItem extends React.Component {
    constructor(props) {
        super(props);
        // this.handleCheckBox = this.handleCheckBox.bind(this)
    }

    handleCheckBox() {
        this.props.expense.is_paid = !(this.props.expense.is_paid)      
    }

    render() {
        return (<li className="list-item">
            <h4>{this.props.expense.body + ' ' + '$' + this.props.expense.amount}</h4>
            <button className="delete" onClick={() => this.props.destroyExpense(this.props.expense._id)}>Delete this Expense</button>
            <label> Paid
            <input class="paid" type="checkbox" 
            ></input>
            </label>
        </li>
        )
    }
    
    


}

export default ExpenseListItem;
