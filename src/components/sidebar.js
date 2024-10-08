import React from "react";
import { useDrag } from "react-dnd";

const elements = [
  { type: "text", label: "Text Block" },
  { type: "button", label: "Button" },
  { type: "image", label: "Image" },
];

const SidebarItem = ({ item }) => {
  const [, drag] = useDrag(() => ({
    type: "element",
    item: { type: item.type, label: item.label },
  }));

  return (
    <div
      ref={drag}
      className="p-4 m-2 border border-gray-300 bg-white rounded-lg shadow cursor-pointer hover:bg-gray-100"
    >
      {item.label}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-1/4 bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">Elements</h2>
      {elements.map((item) => (
        <SidebarItem key={item.type} item={item} />
      ))}
    </div>
  );
};

export default Sidebar;
