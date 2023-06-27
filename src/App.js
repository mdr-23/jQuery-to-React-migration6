import { useState } from 'react';
import './App.css';

function App() {

  const [inputValue, setInputValue] = useState([]);
  const [tasks, setTasks] = useState([]);

  const getInputValue = (e) => {
    let input = e.target.value;
    if(input !== ""){
      setInputValue(input)
    }
  }

  const showTasks = () => {
    if(inputValue !== ""){
      setTasks([...tasks, {text:inputValue, completed:false}])
      console.log(tasks)
      setInputValue('')
    }
  }

  const toggleTask = (index) => {
    setTasks(tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    ));
  }


  return (
    <div className="App">

      <div className="container">
        <h1>To-do App</h1>
        
        <div className="input-container">
          <input onChange={getInputValue} type="text" placeholder="Add task" />
          <button onClick={showTasks}>Add</button>
        </div>
        
        <ul id="taskList">
          {tasks.map((task,index) => 
          <li 
            key={index} onClick={ () => toggleTask(index)} 
            style={{textDecoration:task.completed ? 'line-through': "", color:task.completed ? '#888': ""}}
          >
            {task.text}
          </li>
          )}
        </ul>
    </div>

  </div>
  );
}

export default App;
