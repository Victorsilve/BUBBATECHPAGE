import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const style = document.createElement("style");
style.textContent = "html, body { margin: 0; padding: 0; } body { background: #0A0E14; }";
document.head.appendChild(style);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
