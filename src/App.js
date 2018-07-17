import React, { Component } from 'react';
import crypto from 'crypto';
import './App.css';
import ExpenseForm from './expense-form';
import ExpenseDisplay from './expense-display';
import FilterSearch from './filter-search';

class App extends Component {
  constructor(props) {
    super(props);
    this.addExpense = this.addExpense.bind(this);
    this.removeExpense = this.removeExpense.bind(this);
    this.editExpense = this.editExpense.bind(this);
    this.handleSortByPrice = this.handleSortByPrice.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.state = { search: "", sort: false, expenses: [] };
  }
  addExpense(expense) {
    let token = crypto.randomBytes(12).toString('hex').slice(0, 12);
    expense['expense_id'] = token;
    this.setState({ expenses: this.state.expenses.concat(expense) });
  }
  removeExpense(expense_id) {
    let expenses = this.state.expenses.concat([]);
    expenses = expenses.filter((exp) => exp.expense_id !== expense_id);
    this.setState({ expenses });
  }
  editExpense(expense, expense_id) {
    let expenses = this.state.expenses.concat([]);
    let expenseItem = expenses.find((exp) => exp.expense_id === expense_id);
    expenseItem.amt = expense.amt;
    expenseItem.cat = expense.cat;
    expenseItem.desc = expense.desc;
    console.log('item', expenseItem);
    this.setState({ expenses });
  }
  handleSortByPrice() {
    let expenses = this.state.expenses.concat([]);
    let sort = !this.state.sort;
    expenses.sort((exp1, exp2) => (exp1.amt - exp2.amt) * (sort ? 1 : -1));
    this.setState({ expenses: expenses, sort: sort });
  }
  handleSearch(e) {
    this.setState({ search: e.target.value });
  }
  render() {
    let filterExpenses = this.state.expenses.filter((expense) => {
      return expense.cat.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    });
    let sum = filterExpenses.reduce((sum, exp) => sum += Number(exp.amt), 0);
    console.log(sum);
    return (
      <div className="App">
        <ExpenseForm buttonText="Add Expense" cbFunction={this.addExpense} />
        <div className="box-warp">
          <div className="box">
            <FilterSearch search={this.state.search} handleSearch={this.handleSearch} />
            <button className="button button--bck-purple button--sdw-purple mb-5" onClick={this.handleSortByPrice}>sort by Price</button>
          </div>
          <div className="box__span">${sum}</div>
        </div>
        <ExpenseDisplay expenses={filterExpenses} editExpense={this.editExpense} removeExpense={this.removeExpense} />
      </div>
    );
  }
}

export default App;
