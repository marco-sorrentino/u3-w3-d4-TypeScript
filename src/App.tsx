import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CardList from "./components/CardList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardDetail from "./components/CardDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardList />} />
          <Route path="articles/:id" element={<CardDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
