import './App.css';
import React, {useState} from 'react'
import Form from './components/Form';
import TodoList from './components/TodoList'


function App() {
  const[inputText, setInputText] = useState("");
  const[todos, setTodos] = useState([]);
  const[status, setStatus] = useState("all")

  return (
    <>
    <div className="App">
      <header>
        Matthew's List 
      </header>
      {/* Whats happening with lines 18 - 22 is the state being defined above and then passed down to allow the other components to use state */}
      <Form inputText={inputText}
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      setStatus={setStatus}
      />
      
      <TodoList setTodos={setTodos} todos={todos}/>
    </div>
    <p>hello!</p>
    </>
  );
}

export default App;
