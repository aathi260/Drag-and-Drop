import React, { useState } from "react";
import "./Styles.css";
import { IoAddCircleOutline } from "react-icons/io5";
import { Todo } from "../../../model";
import TodoList from "../TodoList";
import InputField from "../InputField/InputField";

const TodoColumn = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [addTask, setAddTask] = useState<boolean>(false);

  const handleAddTodo = (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault();
    if (todo) {
      setTodoList([
        ...todoList,
        { id: Date.now(), todo, isDone: false, inProgress: false },
      ]);
      setTodo("");
    }
  };

  return (
    <div className="todo_column_container">
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      {!addTask ? (
        <div className="add_task" onClick={() => setAddTask(true)}>
          <div className="add_task_icon">
            <IoAddCircleOutline />
          </div>
          <div className="add_task_text">Add Task</div>
        </div>
      ) : (
        <InputField
          todo={todo}
          setTodo={setTodo}
          handleAddTodo={handleAddTodo}
          setAddTask={setAddTask}
        />
      )}
    </div>
  );
};

export default TodoColumn;
