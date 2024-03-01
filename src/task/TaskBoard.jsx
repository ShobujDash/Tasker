import React, { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";

function TaskBoard() {
  const defaultTask = {
    "id": crypto.randomUUID(),
    'title': "Learn React",
    "description": "i wnat to learn reacct",
    'tags': ["web", "react", "js"],
    "priority": "Hight",
    "isFevourite":false,

  }
  
  const [tasks, setTasks] = useState([defaultTask]); 
  const [showAddModal, setShowAddModal] = useState(false); 
  const [tasktoUpdate,setTaskToUpdate] = useState(null)

  const handleAddTask = (NewTask) => {
    console.log("Adding a taks", NewTask);
    setTasks([...tasks, NewTask]);
    setShowAddModal(false);
  };

  const handleEditTask = (task) => {
    setTaskToUpdate(task);
    setShowAddModal(true);
  }


  return (
    <section className="mb-20" id="tasks">
      {showAddModal && <AddTaskModal onSave={handleAddTask} taskToUpdate={ tasktoUpdate} />}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction onAddClick={() => setShowAddModal(true)} />

          <TaskList tasks={tasks} onEdit={ handleEditTask} />
        </div>
      </div>
    </section>
  );
}

export default TaskBoard;
