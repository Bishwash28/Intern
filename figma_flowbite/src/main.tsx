import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { TotalFlow } from "./components/totalflow.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    {/* <TotalFlow /> */}
  </StrictMode>
);
