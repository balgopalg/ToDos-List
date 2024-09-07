import './App.css';
import Header from './MyComponents/Header';
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import React, { useState, useEffect } from 'react';
import { AddTodo } from './MyComponents/AddTodo';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { About } from './MyComponents/About';

function App() {
  // Initialize todos either from localStorage or as an empty array
  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }

  const [todos, setTodos] = useState(initTodo);

  // Sync todos with localStorage whenever todos state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Delete todo function
  const onDelete = (todo) => {
    console.log("I am on delete of todo", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  };

  // Add todo function
  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    };

    setTodos([...todos, myTodo]);
  };

  return (
    <>
      <Router>
        <Header title="ToDos-List" searchBar={true} />
        <Routes>
          <Route exact path="/" element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          } />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;


