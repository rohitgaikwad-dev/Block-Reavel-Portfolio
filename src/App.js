import React from "react";
import {
  Stripes,
  Navbar,
  Image,
  Title,
  Subtitle,
  Button,
  Scrolldown,
  Social,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
        <Stripes />
        <Navbar />
        <Image />
        <Title />
        <Subtitle />
        <Button />
        <Scrolldown />
        <Social />
      </div>
  );
};

export default App;
