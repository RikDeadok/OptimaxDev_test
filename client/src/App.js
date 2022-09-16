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
      <div className="main-title">To-Do List</div>

      <div>
        <input
          onChange={handleInputChange}
          value={userInput} 
          placeholder="Enter your to-do"
        />
        <button onClick={handleClick}>Add To-Do</button>
      </div>

      <div className="">
        <List list={todos}/>
      </div>
    </div>
  );
}

export default App;
