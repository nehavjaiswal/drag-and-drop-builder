import React, { useState } from "react";
import Sidebar from "./components/sidebar";
import Canvas from "./components/canvas";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import "./App.css";

function App() {
  const [canvasElements, setCanvasElements] = useState([]);

  const addElementToCanvas = (item) => {
    setCanvasElements((prevCanvasElements) => [
      ...prevCanvasElements,
      { id: prevCanvasElements.length, ...item },
    ]);
  };
  // console.log(canvasElements, "canvasElements");

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <h1 className="text-2xl font-bold text-center p-4">
          Drag-and-Drop Website Builder
        </h1>
        <div className="flex flex-row justify-between h-screen p-4">
          <Sidebar />
          <Canvas elements={canvasElements} addElement={addElementToCanvas} />
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
