import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TopNav from "./Components/TopBar/TopNav";
import HomePage from "./Components/Home/HomePage";

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
