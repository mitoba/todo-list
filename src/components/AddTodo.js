import React, { Component } from "react";
import PropTypes  from "prop-types";

export class AddTodo extends Component {
  state = {
    title: "",
  };

  //Captures the value of the input field when changes
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  //Submits the value of the input field, the value is in the state and this value can be used in other components
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
          <input
            type='text'
            name='title'
            placeholder='Add Todo'
            style={{ flex: "10", padding: "5px" }}
            value={this.state.title}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Add Todo'
            className='btn'
            style={{ flex: "1" }}
          />
        </form>
      </div>
    );
  }
}

//PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};


export default AddTodo;
