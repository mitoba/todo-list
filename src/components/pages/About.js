import React from "react";

export default function About() {
  return (
    <React.Fragment>
      <h3 style={{ padding: "5px" }}>About Todo list Application</h3>

      <div className='container'>
        <ul style={{ padding: "5px" }}>
          <li>This to-do list was created using the npx create-react-app.</li>
          <li>To install all the dependencies, use: npm install.</li>
          <li>To run the project: npm start</li>
        </ul>

        <h4 style={{ padding: "5px" }}>The structure of the project: </h4>
        <p style={{ wordWrap: "break-word" }}>
          This is a single page application; the main functionality and state is
          in App.js. The components are in folder called components. App.js
          imports Todos.js and Header.js and AddTodo.js. The App.js and
          AddTodo.js have event handlers to manage the changes in the state.
        </p>

        <h4 style={{ padding: "5px" }}>The user interface: </h4>
        <p style={{ wordWrap: "break-word" }}>
          {" "}
          In the homepage of the application you will see a Todolist
          application, you can add a todo clicking the button “Add Todo” and
          delete a to-do clicking the delete button that is in red color and
          with an X in the middle. The todos have a javascript timestamp then
          you can order them by clicking the button “Sort by time”; the todos
          can also be sorted alphabetically by clicking the button “Sort
          Alphabetically”. If you check the checkbox in the bottom you can
          change the sort from ascending order to descending order.
        </p>
      </div>
    </React.Fragment>
  );
}

//word-wrap: break-word;
