import React, { useEffect, useRef, useState } from "react";
import "./TodoCard.css";
import { Todo } from "../../../model";
import { MdEditNote } from "react-icons/md";
import { TbGitBranchDeleted } from "react-icons/tb";
type Props = {
  todo: Todo;
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoCard: React.FC<Props> = ({ todo, todoList, setTodoList }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleEdit = (e: React.FormEvent | React.MouseEvent, id: number) => {
    e.preventDefault();
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, todo: editTodo } : todo
      )
    );
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className="todo-card" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <div className="input-container">
          <input
            ref={inputRef}
            type="input"
            className="todo-card-input"
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
          />
          <div className="input-actions">
            <div className="input-cancel" onClick={() => setEdit(false)}>
              Cancel
            </div>
            <div className="input-add" onClick={(e) => handleEdit(e, todo.id)}>
              Add
            </div>
          </div>
        </div>
      ) : (
        <div className="todo-card-title">{todo.todo}</div>
      )}
      <div className="todo-card-footer">
        <div className="user_profile"></div>
        <div className="todo-card-actions">
          <div
            className="todo-card-edit"
            onClick={() => {
              if (!edit && !todo.isDone && !todo.inProgress) {
                setEdit(!edit);
              }
            }}
          >
            <MdEditNote />
          </div>
          <div
            className="todo-card-delete"
            onClick={() => handleDelete(todo.id)}
          >
            <TbGitBranchDeleted />
          </div>
        </div>
      </div>
    </form>
  );
};

export default TodoCard;
