import "../css/TaskCard.css";
import trashIcon from "../assets/trash.svg";

function TaskCard({ task, onDelete }) {
  return (
    <div className="task-card">
      <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>
      <button className="delete-btn" onClick={() => onDelete(task.id)}>
        <img src={trashIcon} alt="Delete task" />
      </button>
    </div>
  );
}

export default TaskCard;
