import React from "react";
import { useDrop } from 'react-dnd';

interface MainAreaProps {
  onDrop: (item: { type: string, content: string }) => void;
}

const MainArea: React.FC<MainAreaProps> = ({ onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ['text', 'image'],
    drop: (item: { type: string, content: string }) => onDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const isActive = isOver;

  return (
    <div
      ref={drop}
      className={`main-area ${isActive ? 'active' : ''}`}
    >
      {isActive ? 'Release to drop' : 'Main Area - Drop Zone'}
    </div>
  );
};

export default MainArea;
