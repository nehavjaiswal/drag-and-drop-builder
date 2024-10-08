import React from "react";
import { useDrop } from "react-dnd";
import Element from "./element";

const Canvas = ({ elements, addElement }) => {
  const [, drop] = useDrop(() => ({
    accept: "element",
    drop: (item) => addElement(item),
  }));

  return (
    <div
      ref={drop}
      className="w-3/4 h-full bg-white border-2 border-dashed border-gray-400 p-4 rounded-lg"
    >
      <h2 className="text-xl font-bold mb-4">Canvas</h2>
      {elements.map((element, index) => (
        <Element key={index} type={element.type} label={element.label} />
      ))}
    </div>
  );
};

export default Canvas;
