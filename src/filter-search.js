import React, { Component } from 'react';

class FilterSearch extends Component {
    render() {
        return (
            <input className="box__input mb-3" placeholder="filter by category" type="text" onChange={this.props.handleSearch} value={this.props.search} />
        );
    }
}

export default FilterSearch;