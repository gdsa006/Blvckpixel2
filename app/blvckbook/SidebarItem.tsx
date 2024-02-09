import React from 'react';
import { useDrag } from 'react-dnd';

interface SidebarItemProps {
  type: string;
  content: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ type, content }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type,
    item: { type, content },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} className="sidebar-item">
      {content}
    </div>
  );
};

export default SidebarItem;
