import React from "react";
import ReactDOM from "react-dom/client";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import App from "@/App";
import "@/styles/globals.css";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

const rootElement = document.getElementById("root");

if (!rootElement) {
  const errorMessage =
    "Failed to find the root element. Make sure there is an element with id 'root' in your HTML.";
  console.error(errorMessage);
  throw new Error(errorMessage);
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ConvexProvider client={convex}>
      <App />
    </ConvexProvider>
  </React.StrictMode>,
);
