import { useState, useEffect } from 'react'
import List from './components/List/List'

function App() {

  const [userInput, setUserInput] = useState('')
  const [todos, setTodos] = useState([])

  //Получить данные из localstorage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("userTodos"));
    if (todos) {
      setTodos(todos);
    }
  }, []);

  //Записать данные в localstorage
  useEffect(() => {
    if (todos.length) {
      localStorage.setItem("userTodos", JSON.stringify(todos));
    }
  }, [todos]);

  const handleInputChange = (event) => {
    setUserInput(event.target.value)
  }
  const handleClick = () => {
    if (userInput !== "") {
      setTodos([...todos, userInput])
      setUserInput("")
    }
  }

  return (
    <div className="App">
      <div className="wrapper">
        <div className="content">
          <div className="container">
          <div className="main-title">To-Do List</div>

          <div className="top-menu">
            <input
              className="main-input"
              onChange={handleInputChange}
              value={userInput} 
              placeholder="Enter your to-do"
            />
            <button className="main-btn" onClick={handleClick}>Add To-Do</button>
          </div>

          <div className="bottom-menu">
            <List list={todos}/>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
