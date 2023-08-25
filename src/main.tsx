import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./global.css";
import { ThemeProvider } from "@material-tailwind/react";
// import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
    // <React.StrictMode>
    <ThemeProvider>
        <App />
    </ThemeProvider>
    // </React.StrictMode>
);
