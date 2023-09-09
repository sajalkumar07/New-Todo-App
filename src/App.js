import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className='content'>
      <div id='mainSection' className="App">
        <h1 className='title'>Task Box</h1>
        <div id='secondSection' > 
          <input id='textArea'
            type="text"
            placeholder="Enter a task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button id='addBtn' onClick={addTodo}>+</button>
        </div>
     
      <ul id='taskList'>
        {todos.map((todo, index) => (
          <li id='showList' key={index}>
            {todo}
            <button id='deleteBtn' onClick={() => removeTodo(index)}>
              <i className="fa fa-trash"></i>
            </button>
          </li>
        ))}
      </ul>
      </div>
  </div>
  );
}

export default App;
