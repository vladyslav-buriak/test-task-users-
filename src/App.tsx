import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Posts from "./pages/posts";
import Home from "./pages/home";
import Layout from "./layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />}></Route>
          <Route path="posts/:id" element={<Posts />}></Route>
        </Route>
      </Routes>
      <Routes></Routes>
    </div>
  );
}

export default App;
