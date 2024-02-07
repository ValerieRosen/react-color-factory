import React from "react";
import { Link } from "react-router-dom";
import "./ColorList.css";

function ColorList({ colors }) {
  const colorLinks = Object.keys(colors).map((colorName) => (
    <li key={colorName}>
      <Link to={`/colors/${colorName}`}>{colorName}</Link>
    </li>
  ));

  return (
    <div className="ColorList">
      <header className="ColorList-header">
        <h1 className="ColorList-title">The Color Factory</h1>
        <h3>
          <Link to="/colors/new">Add Color</Link>
        </h3>
      </header>
      <div className="ColorList-intro">
        <p>Select Color</p>
        <ul>{colorLinks}</ul>
      </div>
    </div>
  );
}

export default ColorList;
