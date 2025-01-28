import React, { useState } from "react";
import "./DropArea.css";

type Props = {
  onTaskDrop: (todoData: any) => void;
};

const DropArea: React.FC<Props> = ({ onTaskDrop }) => {
  const [showDrop, setShowDrop] = useState<boolean>(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setShowDrop(false);

    const todoData = JSON.parse(e.dataTransfer.getData("text/plain"));
    if (todoData) {
      onTaskDrop(todoData);
    }
  };

  return (
    <section
      onDragEnter={() => setShowDrop(true)}
      onDragOver={(e) => e.preventDefault()} 
      onDragLeave={() => setShowDrop(false)}
      onDrop={handleDrop}
      className={showDrop ? "drop_area" : "hide_drop_area"}
    >
      Drop Here
    </section>
  );
};

export default DropArea;
