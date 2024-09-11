import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
            <li>
              <Link to="/blog">blog</Link>
            </li>
            <li>
              <Link to="/careers">careers</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>dddd</main>
    </React.Fragment>
  );
}

export default App;
