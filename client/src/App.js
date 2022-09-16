import {useState} from 'react'
import List from './components/List'

function App() {

  const [userInput, setUserInput] = useState('')
  const [todos, setTodos] = useState([])

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
