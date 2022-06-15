import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/Pages/HomePage";
import PostPage from "./Components/Pages/PostPage";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/post/:id" element={<PostPage />}></Route>
      </Routes>
    </div>
  );
}
