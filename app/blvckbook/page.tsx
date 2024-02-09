"use client"
import React, { createContext } from "react";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Sidebar from './Sidebar';
import MainArea from './MainArea';
import './BlvckBook.css';
import Navbar from "../componenets/navigation/navbar";

export default function Page() {
  const handleDrop = (item: { type: string, content: string }) => {
    console.log('Dropped item:', item);
  };


  return (
    <>
 <Navbar />
  <DndProvider backend={HTML5Backend}>
      <div className="container">
        <Sidebar />
        <MainArea onDrop={handleDrop} />
      </div>
    </DndProvider>
    </>
  );
}
