import { useState } from "react";
import Column from "./Column.jsx";
import TaskFormModal from "./TaskFormModal.jsx";
import "../css/Board.css";

function Board() {
  const [tasks, setTasks] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeStatus, setActiveStatus] = useState("todo")
  const [editingTask, setEditingTask] = useState(null)

  function openModalFor(status) {
    console.log("openModalFor called with:", status);
    setActiveStatus(status);
    setIsModalOpen(true);
    setEditingTask(null)
  }

  console.log("Board render:", { isModalOpen, activeStatus, tasksCount: tasks.length });


  function addTask(taskData) {
    const newTask = {
      id: crypto.randomUUID(),
      ...taskData,
      status: taskData.status ?? activeStatus, // keep dropdown optional
    };
    setTasks((prev) => [newTask, ...prev]);
  }

  function deleteTask(taskId) {
    setTasks((prev) => prev.filter((t) => t.id !== taskId));
  }

  function updateTask(taskId, updates) {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, ...updates } : t))
    );
  }

  function openEditModal(task) {
    setEditingTask(task);
    setActiveStatus(task.status);
    setIsModalOpen(true);
  }

  function handleModalSubmit(taskData) {
    if (editingTask) {
      updateTask(editingTask.id, taskData);
    } else {
      addTask(taskData);
    }
    setIsModalOpen(false);
    setEditingTask(null);
  }

  return (
    <>
      <TaskFormModal
        isOpen={isModalOpen}
        onClose={() => { setEditingTask(null); setIsModalOpen(false); }}
        onSubmit={handleModalSubmit}
        defaultStatus={activeStatus}
        initialTask={editingTask}
      />

      <div className="board">
        <Column
          title="To Do"
          tasks={tasks.filter((t) => t.status === "todo")}
          onAddTaskClick={() => openModalFor("todo")}
          onDeleteTaskClick={deleteTask}
          onEditTaskClick={openEditModal}
        />
        <Column
          title="In Progress"
          tasks={tasks.filter((t) => t.status === "inprogress")}
          onAddTaskClick={() => openModalFor("inprogress")}
          onDeleteTaskClick={deleteTask}
          onEditTaskClick={openEditModal}
        />
        <Column
          title="Done"
          tasks={tasks.filter((t) => t.status === "done")}
          onAddTaskClick={() => openModalFor("done")}
          onDeleteTaskClick={deleteTask}
          onEditTaskClick={openEditModal}
        />
      </div>
    </>
  );
}

export default Board;
