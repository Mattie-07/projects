import './App.css';
import React, {useState, useEffect} from 'react'
import Form from './components/Form';
import TodoList from './components/TodoList'
//use effect basically allows us to run a function everytime that a piece of state changes.

function App() {

  // The useEffect would run everytime the piece of state that we define on line 10 changes.

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([]);

  //use effect will run once when the app starts
  useEffect(() =>{
    getLocalTodos();
  },[])

  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch(status){
      case `completed`:
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  const saveLocalTodos = () =>{
      localStorage.setItem("todos", JSON.stringify(todos))
    };

  const getLocalTodos = () =>{
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal)
    }
  };
  
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
      
      <TodoList  filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}/>
    </div>
    <p>hello!</p>
    </>
  );
}

export default App;
