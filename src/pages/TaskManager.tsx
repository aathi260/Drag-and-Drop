import { useState } from "react";
import TodoColumn from "../components/TodoColumn/TodoColumn";
import "./TaskManager.css";
import { Todo } from "../../model";

const TaskManager = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [progressTodos, setProgressTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);
  const [addTask, setAddTask] = useState<boolean>(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleTaskDrop = (todoData: Todo, targetStatus: string) => {
    setTodoList((prev) => prev.filter((task) => task.id !== todoData.id));
    setProgressTodos((prev) => prev.filter((task) => task.id !== todoData.id));
    setCompletedTodos((prev) => prev.filter((task) => task.id !== todoData.id));

    const updatedTask = {
      ...todoData,
      isDone: targetStatus === "completed",
      inProgress: targetStatus === "progress",
    };

    if (targetStatus === "todo") {
      setTodoList((prev) => [...prev, updatedTask]);
    } else if (targetStatus === "progress") {
      setProgressTodos((prev) => [...prev, updatedTask]);
    } else if (targetStatus === "completed") {
      setCompletedTodos((prev) => [...prev, updatedTask]);
    }
  };

  return (
    <>
      <div className="grid-container">
        <div className="column">
          <div>To Do</div>
          <TodoColumn
            todo={todo}
            setTodo={setTodo}
            todoList={todoList}
            setTodoList={setTodoList}
            addTask={addTask}
            setAddTask={setAddTask}
            activeCard={activeCard}
            setActiveCard={setActiveCard}
            onTaskDrop={(todoData) => handleTaskDrop(todoData, "todo")}
          />
        </div>
        <div className="column">
          <div>In Progress</div>
          <TodoColumn
            todo=""
            setTodo={() => {}}
            todoList={progressTodos}
            setTodoList={setProgressTodos}
            addTask={false}
            setAddTask={() => {}}
            activeCard={activeCard}
            setActiveCard={setActiveCard}
            onTaskDrop={(todoData) => handleTaskDrop(todoData, "progress")}
          />
        </div>
        <div className="column">
          <div>Completed</div>
          <TodoColumn
            todo=""
            setTodo={() => {}}
            todoList={completedTodos}
            setTodoList={setCompletedTodos}
            addTask={false}
            setAddTask={() => {}}
            activeCard={activeCard}
            setActiveCard={setActiveCard}
            onTaskDrop={(todoData) => handleTaskDrop(todoData, "completed")}
          />
        </div>
      </div>
    </>
  );
};

export default TaskManager;
