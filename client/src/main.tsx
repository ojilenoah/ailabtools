import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Custom CSS for font family
const style = document.createElement('style');
style.textContent = `
  :root {
    --font-sans: 'Inter', sans-serif;
    --font-body: 'Roboto', sans-serif;
  }
  
  body {
    font-family: var(--font-body);
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-sans);
  }

  html {
    scroll-behavior: smooth;
  }
`;
document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
