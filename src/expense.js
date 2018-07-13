import React, { Component } from 'react';
import ExpenseForm from './expense-form';


class Expense extends Component {
    constructor(props) {
        super(props);
        this.handleRemoveExpense = this.handleRemoveExpense.bind(this);
        this.handleEditExpense = this.handleEditExpense.bind(this);

        this.state = { show: false };
    }
    handleRemoveExpense() {
        this.props.removeExpense(this.props.expense_id);
    }
    handleEditExpense() {
        this.setState({ show: !this.state.show });
    }
    render() {
        return (
            <div className="expense-warp">
                <div className="expense">
                    <div className="expense__price-box">
                        <span className="expense__tag expense__tag--grey">price</span>
                        <span className="expense__price">${this.props.amt}</span>
                    </div>
                    <div className="expense__category-box">
                        <span className="expense__tag expense__tag--grey">Category</span>
                        <span className="expense__category">{this.props.cat}</span>
                    </div>
                    <div className="expense__description-box">
                        <span className="expense__tag expense__tag--grey">Description</span>
                        <span className="expense__description">{this.props.desc}</span>
                    </div>
                    <button onClick={this.handleEditExpense} className="button button--bck-gren button--sdw-green">
                        edit
                    </button>
                    <button onClick={this.handleRemoveExpense} className="button button--bck-red button--sdw-red">
                        remove
                    </button>
                </div>
                {this.state.show && <ExpenseForm buttonText="save" amt={this.props.amt} cat={this.props.cat} desc={this.props.desc} expense_id={this.props.expense_id} cbFunction={this.props.editExpense} />}
            </div>


        );
    }
}

export default Expense;