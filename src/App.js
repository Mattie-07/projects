import './App.css';
import React, {useState} from 'react'
import Form from './components/Form';
import TodoList from './components/TodoList'


function App() {
  const[inputText, setInputText] = useState("")

  return (
    <>
    <div className="App">
      <header>
        Matthew's List
      </header>
      <Form/>
      <ToDolist/>
    </div>
    <p>hello!</p>
    </>
  );
}

export default App;
