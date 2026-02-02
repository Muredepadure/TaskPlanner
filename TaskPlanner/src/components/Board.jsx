import Column from "./Column.jsx";
import "../css/Board.css";

function Board() {
  const tasks = [
    { id: "1", title: "Buy groceries", description: "Milk, eggs, bread", status: "todo" },
    { id: "2", title: "Build Column UI", description: "Render cards inside columns", status: "inprogress" },
    { id: "3", title: "Push to GitHub", description: "Commit and push changes", status: "done" },
  ];

  return (
    <div className="board">
      <Column
        title="To Do"
        tasks={tasks.filter((t) => t.status === "todo")}
      />
      <Column
        title="In Progress"
        tasks={tasks.filter((t) => t.status === "inprogress")}
      />
      <Column
        title="Done"
        tasks={tasks.filter((t) => t.status === "done")}
      />
    </div>
  );
}

export default Board;
