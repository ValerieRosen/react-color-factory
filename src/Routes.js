import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import ColorList from "./ColorList";
import NewColorForm from "./NewColorForm";
import Color from "./Color";

function Routes() {
  const firstColors = JSON.parse(localStorage.getItem("colors")) || {
    red: "#FF0000",
    green: "#00ff00",
    blue: "#0000FF",
  };

  const [colors, updateColors] = useState(firstColors);

  useEffect(
    () => localStorage.setItem("colors", JSON.stringify(colors)),
    [colors]
  );

  function handleNew(newColor) {
    updateColors((prevColors) => ({ ...prevColors, ...newColor }));
  }

  function displayCurrentColor(props) {
    const { color } = props.match.params;
    const hex = colors[color];
    return <Color {...props} hex={hex} color={color} />;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/colors">
          <ColorList colors={colors} />
        </Route>
        <Route exact path="/colors/new">
          <NewColorForm addColor={handleNew} />
        </Route>
        <Route path="/colors/:color" render={displayCurrentColor} />
        <Redirect to="/colors" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
