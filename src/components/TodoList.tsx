import React from "react";
import { Todo } from "../../model";
import TodoCard from "./TodoCard/TodoCard";
import DropArea from "./DropArea/DropArea";

type Props = {
  todoList: Todo[];
  activeCard: number | null;
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
  setActiveCard: React.Dispatch<React.SetStateAction<number | null>>;
  onTaskDrop: (todoData: any) => void;
};

const TodoList: React.FC<Props> = ({
  todoList,
  setTodoList,
  setActiveCard,
  onTaskDrop,
}) => {
  return (
    <div>
      <DropArea onTaskDrop={onTaskDrop} />
      {todoList?.map((todo, index) => (
        <React.Fragment key={index}>
          <TodoCard
            todo={todo}
            index={index}
            key={todo.id}
            todoList={todoList}
            setTodoList={setTodoList}
            setActiveCard={setActiveCard}
          />
          <DropArea onTaskDrop={onTaskDrop} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default TodoList;
