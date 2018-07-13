import React, { Component } from 'react';
import SingleInput from './single-input';

class ExpenseForm extends Component {
    constructor(props) {
        super(props);
        this.changeExpense = this.changeExpense.bind(this);
        this.onBtnClick = this.onBtnClick.bind(this);
        if (props.amt && props.cat && props.desc) {
            this.state = { amt: props.amt, cat: props.cat, desc: props.desc };
        } else {
            this.state = { amt: 0, cat: "", desc: "" };
        }
    }
    changeExpense(e) {
        this.setState({ [e.target.id]: e.target.value });
        //e.target.id <-- the element id (which matches our state)
        //e.target.value <-- the element value
        //[e.target.id] <-- is the way to define a dynamic var name
    }
    onBtnClick() {
        if (this.props.expense_id !== undefined) {
            this.props.cbFunction(this.state, this.props.expense_id);
            this.setState({ amt: this.state.amt, cat: this.state.cat, desc: this.state.desc }, () => {
                // console.log(this.state);
            });
        }
        else {
            this.props.cbFunction(this.state);
            this.setState({ amt: 0, cat: '', desc: '' }, () => {
                // console.log(this.state);
            });
        }

    }
    render() {
        return (
            <div className="form-warp">
                <form className="form" autoComplete="off">
                    <SingleInput content={this.state.amt} controlFunc={this.changeExpense} title="Amount" id="amt" type="number" placeholder="$" />
                    <SingleInput content={this.state.cat} controlFunc={this.changeExpense} title="Category" id="cat" type="text" placeholder="Category" />
                    <SingleInput content={this.state.desc} controlFunc={this.changeExpense} title="Description" id="desc" type="text" placeholder="Description" />
                    <button className="button button--bck-blue button--sdw-blue" type="button" onClick={this.onBtnClick}>{this.props.buttonText}</button>
                </form>
            </div>
        );
    }
}

export default ExpenseForm;