import React from "react";
import "./Styles.css";
import { IoAddCircleOutline } from "react-icons/io5";
import { Todo } from "../../../model";
import TodoList from "../TodoList";
import InputField from "../InputField/InputField";

type Props = {
  todo: string;
  todoList: Todo[];
  addTask: boolean;
  activeCard: number | null;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
  setAddTask: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveCard: React.Dispatch<React.SetStateAction<number | null>>;
  onTaskDrop: (todoData: any) => void;
};

const TodoColumn: React.FC<Props> = ({
  todo,
  setTodo,
  todoList,
  setTodoList,
  addTask,
  setAddTask,
  activeCard,
  setActiveCard,
  onTaskDrop, // Accepting the prop
}) => {
  const handleAddTodo = (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault();
    if (todo) {
      setTodoList([
        ...todoList,
        { id: Date.now(), todo, isDone: false, inProgress: false },
      ]);
      setTodo("");
      setAddTask(false);
    }
  };

  return (
    <div className="todo_column_container">
      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        activeCard={activeCard}
        setActiveCard={setActiveCard}
        onTaskDrop={onTaskDrop} // Passing the function to TodoList
      />
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
