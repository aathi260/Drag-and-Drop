import React, { useRef } from "react";
import "./InputField.css"
type Props = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent) => void;
  setAddTask: React.Dispatch<React.SetStateAction<boolean>>;
};

const InputField: React.FC<Props> = ({
  todo,
  setTodo,
  handleAddTodo,
  setAddTask,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        handleAddTodo(e);
        setAddTask(false);
        inputRef.current?.blur();
      }}
      className="input-container"
    >
      <input
        ref={inputRef}
        type="input"
        value={todo}
        placeholder="Enter the Task"
        className="todo-card-input"
        onChange={(e) => setTodo(e.target.value)}
      />
      <div className="input-actions">
        <div className="input-cancel" onClick={() => setAddTask(false)}>
          Cancel
        </div>
        <div className="input-add" onClick={(e) => handleAddTodo(e)}>
          Add
        </div>
      </div>
    </form>
  );
};

export default InputField;
