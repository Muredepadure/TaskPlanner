import { useEffect, useState } from "react";
import "../css/TaskFormModal.css";

function TaskFormModal({ isOpen, onClose, onSubmit, defaultStatus = "todo", initialTask = null }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(defaultStatus);

  const isEditing = Boolean(initialTask);

  // When opening, reset the form and set default status
  useEffect(() => {
    if (isOpen) {
      setTitle(initialTask?.title || "");
      setDescription(initialTask?.description || "");
      setStatus(initialTask?.status || defaultStatus);
    }
  }, [isOpen, defaultStatus]);

  if (!isOpen) return null;

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;

    onSubmit({
      title: title.trim(),
      description: description.trim(),
      status, // will be defaulted to the column that opened it
    });

    onClose();
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Add New Task</h2>

        <form onSubmit={handleSubmit}>
          <label>
            Title
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
            />
          </label>

          <label>
            Description
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
            />
          </label>

          <label>
            Status
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="todo">To Do</option>
              <option value="inprogress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </label>

          <div className="modal-actions">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" disabled={!title.trim()}>
              {isEditing ? "Save Changes" : "Add Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskFormModal;
