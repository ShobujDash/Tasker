import React, { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import NoTaskFound from "./NoTaskFound";

function TaskBoard() {

  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description: "i wnat to learn reacct",
    tags: ["web", "react", "js"],
    priority: "Hight",
    isFevourite: true,
  };

  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [tasktoUpdate, setTaskToUpdate] = useState(null);

  const handleAddEditTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
      setShowAddModal(false);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
      setShowAddModal(false);
    }
  };

  const handleEditTask = (task) => {
    setTaskToUpdate(task);
    setShowAddModal(true);
  };
  const handleCloseClick = () => {
    setShowAddModal(false);
    setTaskToUpdate(null);
  };

  const handleDeleteTask = (taskId) => {
    const taskAfterDelete = tasks.filter((task) => task.id !== taskId);
    setTasks(taskAfterDelete);
    
  }
  const handleDeleteAllClick = () => {
    tasks.length = 0;
    setTasks([...tasks])
  };
  const handleFavoruite = (taskId)=> {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    console.log(taskIndex)
    const newTasks = [...tasks];
    newTasks[taskIndex].isFevourite = !newTasks[taskIndex].isFevourite;

    setTasks(newTasks);
  }

  const handleSearch = (searchTerm) => {
    console.log(searchTerm)
    const filtered = tasks.filter((task) => (
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    ))

    setTasks([...filtered])
    
  }

  return (
    <section className="mb-20" id="tasks">
      {showAddModal && (
        <AddTaskModal
          onSave={handleAddEditTask}
          taskToUpdate={tasktoUpdate}
          onCloseClick={handleCloseClick}
        />
      )}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask onSearch={handleSearch} />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction
            onAddClick={() => setShowAddModal(true)}
            onDeleteAllClick={handleDeleteAllClick}
          />

          {tasks.length > 0 ? (
            <TaskList
              tasks={tasks}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
              onFav={handleFavoruite}
            />
          ) : (
            <NoTaskFound/>
          )}
        </div>
      </div>
    </section>
  );
}

export default TaskBoard;
