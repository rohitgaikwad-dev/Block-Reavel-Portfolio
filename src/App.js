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
  const categories = ["man", "women", "accesories", "beauty"];

  return (
    <div className="App">
      <Stripes />
      <Navbar categories={categories} />
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
