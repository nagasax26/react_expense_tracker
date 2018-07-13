import React, { Component } from 'react';
import Expense from './expense';



class ExpenseDisplay extends Component {

    renderExpenses() {
        let expenses = this.props.expenses.map((expense, index) => {
            return <Expense editExpense={this.props.editExpense} removeExpense={this.props.removeExpense} expense_id={expense.expense_id} key={expense.expense_id} amt={expense.amt} cat={expense.cat} desc={expense.desc} />;
        });

        return expenses;
    }
    render() {
        return (
            <div>
                {this.renderExpenses()}
            </div>
        );
    }
}
export default ExpenseDisplay;