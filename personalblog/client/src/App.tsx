import React from "react";
import "../src/index.css";
import Blog from "./containers/Blog";
import Mark from "./containers/Markdown";
import Home from "./containers/Home";
import AddNewBlog from "./containers/AddNewBlog";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Markdown" element={<Mark />} />
          <Route path="/AddNewBlog" element={<AddNewBlog />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
