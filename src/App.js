import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookSearch from "./components/BookSearch";
import BookShelf from "./components/BookShelf";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<BookSearch />} />
        <Route path="/bookshelf" element={<BookShelf />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;