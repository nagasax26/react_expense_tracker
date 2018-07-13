import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SingleInput extends Component {

    render() {
        return (
            <div className="form__box">
                <label className="form__label">{this.props.title}</label>
                <input className="form__input" type={this.props.inputType}
                    placeholder={this.props.placeholder}
                    onChange={this.props.controlFunc}
                    value={this.props.content}
                    id={this.props.id} />
            </div>
            //onChange={ props.controlFunc } <== activate function (passed by props) on change event
            //value={props.content} <== get the value (passed by props) back from the state
        );
    }
}

SingleInput.protoTypes = {
    title: PropTypes.string.isRequired,
    inputType: PropTypes.oneOf(['button', 'checkbox', 'color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week']).isRequired,
    placeholder: PropTypes.string
}

export default SingleInput;