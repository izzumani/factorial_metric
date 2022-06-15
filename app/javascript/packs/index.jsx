import React from "react";
// import { render } from "react-dom";
import ReactDOM from "react-dom/client";
import CssBaseline from "@material-ui/core/CssBaseline";
import App from "./components/viewmetric";

document.addEventListener("DOMContentLoaded", () => {
    const container =  document.body.appendChild(document.createElement("div"))
    // Create a root.
    const root = ReactDOM.createRoot(container);

    // Initial render
    root.render(
            // 
        <React.StrictMode>
            <CssBaseline />
            <App/>
            
        </React.StrictMode>
        
      
    

    );

});
