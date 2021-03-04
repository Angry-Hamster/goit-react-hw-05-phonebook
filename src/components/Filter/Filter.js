import React, { Component } from "react";

import css from './filter.module.css'

class Filter extends Component {
  // ToDo methods
  handleChange = (e) => {
    const { value } = e.target;

    this.props.filter( value );
  };

  // ToDo DOM tree
  render() {
    return (
      <div className={css.filter}>
        <label htmlFor="filter">Find contacts by name</label>
        <input name="filter" id="filter" onChange={this.handleChange} autocomplete='off'/>
      </div>
    );
  }
}

export default Filter;
