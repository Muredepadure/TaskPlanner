import TaskCard from "./TaskCard.jsx";
import "../css/Column.css";

function Column({ title, tasks = [], onAddTaskClick, onDeleteTaskClick, onEditTaskClick }) {

  return (
    <section className="column">
      <header className="column__header">
        <h2 className="column__title">{title}</h2>
      </header>

      <div className="column__body">
        {tasks.length === 0 ? (
          <p className="column__placeholder">No tasks yet</p>
        ) : (
          tasks.map((task) => <TaskCard key={task.id} task={task} onDelete={onDeleteTaskClick} onEdit={onEditTaskClick}/>)
        )}
      </div>
      <button
        className="top-bar__add-button"
        onClick={() => {
          console.log("Add task clicked in column:", title);
          onAddTaskClick?.();
        }}
      >
        + Add Task
      </button>

    </section>

  );
}

export default Column;
