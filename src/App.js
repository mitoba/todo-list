import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import About from "./components/pages/About";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import Todos from "./components/Todos";
import "./App.css";

class App extends Component {
  //state of the application, there is not necessary to call the constructor because we are using arrow functions for the  event handlers.
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Take out the trash",
        completed: false,
        time: new Date("April 25, 2020 03:24:00"),
      },
      {
        id: uuidv4(),
        title: "Dinner with wife",
        completed: false,
        time: new Date("April 24, 2020 05:24:00"),
      },
      {
        id: uuidv4(),
        title: "Go and buy food",
        completed: false,
        time: new Date("April 25, 2020 04:24:00"),
      },
    ],
    ascending: true,
  };

  //This event handler toggles if an activity is completed or not, if you click the check mark will change to completed and will cross the text
  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  //This event handler will delete the todo selected with the bound id
  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  //This event handle will add a todo to the todo list without mutating the state.
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
      time: new Date(Date.now()),
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  //This method sort the todos alphabetically in ascending and descending order.
  handleSort = () => {
    const sortedTodos = this.state.ascending
      ? this.state.todos.slice().sort((a, b) => a.title.localeCompare(b.title))
      : this.state.todos.slice().sort((a, b) => b.title.localeCompare(a.title));

    this.setState((prevState) => {
      return {
        todos: sortedTodos,
      };
    });
  };

  //This method sort the todos chronologically in ascending and descending order.
  handleSortTime = () => {
    const sortedTodos = this.state.ascending
      ? this.state.todos.slice().sort((a, b) => a.time - b.time)
      : this.state.todos.slice().sort((a, b) => b.time - a.time);

    this.setState((prevState) => {
      return {
        todos: sortedTodos,
      };
    });
  };

  //Toggles the ascending condition that helps in the sorting method.
  sorType = () => {
    this.setState(() => {
      return {
        ascending: !this.state.ascending,
      };
    });
  };

  render() {
    return (
      <Router>
        <div className='App'>
          <div className='container'>
            <Header />
            <Route
              exact
              path='/'
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    toggleComplete={this.toggleComplete}
                    deleteTodo={this.deleteTodo}
                  />
                  <button className='btn-sort' onClick={this.handleSort}>
                    Sort Alphabetically
                  </button>
                  <button className='btn-sort' onClick={this.handleSortTime}>
                    Sort by time
                  </button>
                  <p style={{ textAlign: "center" }}>
                    <input type='checkbox' onChange={this.sorType} />
                    Select input if you want to sort in descending order
                  </p>
                </React.Fragment>
              )}
            />
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
