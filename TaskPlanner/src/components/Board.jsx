import { useState } from "react";
import Column from "./Column.jsx";
import TaskFormModal from "./TaskFormModal.jsx";
import "../css/Board.css";

function Board() {
  const [tasks, setTasks] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeStatus, setActiveStatus] = useState("todo")

  function openModalFor(status) {
    console.log("openModalFor called with:", status);
    setActiveStatus(status);
    setIsModalOpen(true);
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

  return (
    <>
      <TaskFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={addTask}
        defaultStatus={activeStatus}
      />

      <div className="board">
        <Column
          title="To Do"
          tasks={tasks.filter((t) => t.status === "todo")}
          onAddTaskClick={() => openModalFor("todo")}
        />
        <Column
          title="In Progress"
          tasks={tasks.filter((t) => t.status === "inprogress")}
          onAddTaskClick={() => openModalFor("inprogress")}
        />
        <Column
          title="Done"
          tasks={tasks.filter((t) => t.status === "done")}
          onAddTaskClick={() => openModalFor("done")}
        />
      </div>
    </>
  );
}

export default Board;
