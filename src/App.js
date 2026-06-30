import { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Contact from "./Contact";
import "./App.css";


function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState ([]);
  const [filter, setFilter] = useState("all");

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

     const filteredTasks = tasks.filter((item) => {
      if (filter === "completed") {
         return item.completed;
      }

       if (filter === "incomplete") {
         return !item.completed;
       }
         
         return true;

     });
  return (
    <div>
      <nav>
        <h2>Task Management App</h2>
        <Link to="/todos">Todos</Link> | <Link to="/contact">Contact</Link>
      </nav>

        <Routes>
           <Route path="/" element={<Navigate to="/todos" replace />} />
           <Route
             path="/todos"
             element={
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
        <div>
          <button onClick={() => setFilter("all")}>All</button>

          <button onClick={() => setFilter("completed")}>
            Completed
          </button>

          <button onClick={() => setFilter("incomplete")}>
            Incomplete
          </button>
        </div>

     {filteredTasks.length === 0 && <p>No tasks available.</p>}
     <ul>
     {filteredTasks.map((item,index) => (
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
  }
  />
   <Route path="/contact" element={<Contact />} />
   </Routes>
   </div>
  );
}

export default App;