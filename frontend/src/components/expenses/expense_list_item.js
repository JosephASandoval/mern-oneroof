import React from 'react'
import "../../styles/expense_list_item.css";


const ExpenseListItem = props => {
    return (
        <li>
            <h4>{props.expense.body + ' ' + props.expense.amount + '$'}</h4>
            <button className="delete" onClick={() => props.destroyExpense(props.expense._id)}>Delete this Expense</button>
            <label> Paid
            <input class="paid" type="checkbox"></input>
            </label>
        </li>
    )
}

export default ExpenseListItem;
