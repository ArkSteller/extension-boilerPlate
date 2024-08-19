import React, { useEffect, useState } from "react";
import PopUp from "./popup";
import { createRoot } from "react-dom/client";

const App = () => {
  
  return (
    <>
      <PopUp />
    </>
  );
};

// Setting up the app's root
const rootElement = document.createElement("div");
rootElement.setAttribute("id", "root");
document.body.appendChild(rootElement);
const root = createRoot(rootElement);

root.render(<App />);
