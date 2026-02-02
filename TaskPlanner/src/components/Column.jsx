import TaskCard from "./TaskCard.jsx";
import "../css/Column.css";

function Column({ title, tasks = [] }) {
  return (
    <section className="column">
      <header className="column__header">
        <h2 className="column__title">{title}</h2>
      </header>

      <div className="column__body">
        {tasks.length === 0 ? (
          <p className="column__placeholder">No tasks yet</p>
        ) : (
          tasks.map((task) => <TaskCard key={task.id} task={task} />)
        )}
      </div>
    </section>
  );
}

export default Column;
