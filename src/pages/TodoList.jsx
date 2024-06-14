import React, { useState } from "react";

// To many forms to create a component

// export function TodoList() {
//   return <div>TodoList</div>;
// }

// export const TodoList = function () {
//   return <div>TodoList</div>;
// }

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const handleClickButtonAddTask = () => {
    setTasks([...tasks, task])
    setTask('')
  }

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <input
        value={task}
        type="text" placeholder="Nueva Tarea"
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={handleClickButtonAddTask}
      >
        Añadir Tarea
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;