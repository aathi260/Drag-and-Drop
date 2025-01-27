import TodoColumn from "../components/TodoColumn/TodoColumn";
import "./TaskManager.css"

const TaskManager = () => {
  return (
    <div className="grid-container">
      <div className="column">
        <div>To Do</div>
        <TodoColumn />
      </div>
      <div className="column">
        <div>In Progress</div>
      </div>
      <div className="column">
        <div>Completed</div>
      </div>
    </div>
  );
};

export default TaskManager;
