import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [completedTasks, setCompletedTasks] = useState(new Set());

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);

    
    setCompletedTasks((prev) => {
      const updated = new Set(prev);
      updated.delete(index);
      return updated;
    });
  }

  function toggleTaskCompletion(index) {
    setCompletedTasks((prev) => {
      const updated = new Set(prev);
      if (updated.has(index)) {
        updated.delete(index);
      } else {
        updated.add(index);
      }
      return updated;
    });
  }

  const completedCount = completedTasks.size;
  const uncompletedCount = tasks.length - completedCount;

  return (
    <>
      <div className="items-center justify-center flex flex-col h-screen">
        <fieldset className="border-2 border-gray-300 rounded-lg p-4">
          <h1 className="text-3xl mt-1 text-center">To-Do List</h1>
          <div className="flex space-x-2 mt-7">
            <input
              type="text"
              placeholder="Add a new task"
              onChange={handleInputChange}
              value={newTask}
              className="border-2 rounded-lg px-3 py-1"
            />
            <button className="bg-blue-500 px-2 rounded-lg" onClick={addTask}>
              Add Task
            </button>
          </div>
          <p className="text-center mt-4 text-2xl">Task List</p>
          <ol className="p-0">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="flex items-center mt-4 mb-3 border-2 p-2 rounded-lg"
              >
                <input
                  type="checkbox"
                  className="mr-2 scale-130"
                  onChange={() => toggleTaskCompletion(index)}
                  checked={completedTasks.has(index)}
                />
                <span
                  className={`text-lg pl-1 mr-4 ${
                    completedTasks.has(index) ? "line-through text-gray-500" : ""
                  }`}
                >
                  {task}
                </span>
                <div className="space-x-2 text-right ml-auto">
                  <button
                    className="text-red-500"
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ol>

          <hr />

          <div className="flex justify-center mt-4">
            <p className="text-lg">
              Completed: {completedCount} / Uncompleted: {uncompletedCount}
            </p>
          </div>
        </fieldset>
      </div>
    </>
  );
}

export default App;
