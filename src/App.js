import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState ([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([
      ...tasks, 
     {
       text: task,
       completed: false,
     },
    ]);

     setTask("");
  };
  return (
    <div>
      <h1>Task Management App</h1>
     
     <h2>Todo List</h2>

     <input 
     type="text" 
     placeholder="Enter a task" 
     value={task}
     onChange={(e) => setTask(e.target.value)}
     />
     
     <button onClick={addTask}>Add Task</button>

     <ul>
     {tasks.map((item,index) => (
      <li key={index}>
        <span
          style={{
            textDecoration: item.completed ? "line-through" : "none",
          }}
          >
            {item.text}
            </span>

        <button
         onClick={() => {
            const updatedTasks = [...tasks];
            updatedTasks[index].completed =
               !updatedTasks[index].completed;
              setTasks(updatedTasks);
         }}
         >
           complete
           </button>

           <button onClick={() => setTasks(tasks.filter((_, i) => i !== index))}>
           Delete
          </button>
        </li>
     ))}
     </ul>
    </div>
  );
}

export default App;