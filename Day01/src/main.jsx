
import {createRoot} from "react-dom/client"
import "./index.css"
import reactLogo from "./assets/ReactLogo.png"

const root = createRoot(document.getElementById("root"))

root.render(
  <div className="container">
      <h1 className="title">Mini Project 1</h1>
      <div className="card">
        <div className="header">
          <img src= {reactLogo} alt="React Logo" className="logo"/>
          <h2 className="subtitle">Rules of JSX</h2>
        </div>
        <ul className="rules">
          <li>Must have enclosed JSX in a root element</li>
          <li>Close the tags properly</li>
          <li>Use <code>ClassName</code> for css class, as <code>class</code> is reserved in JSX</li>
          <li>Use camelCase for the attributes</li>
          <li>Use flower braces for JavaScript</li>
        </ul>
      </div>
  </div>
);