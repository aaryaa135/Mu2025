import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Register from "./Pages/Register/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="*" element={<h1>404</h1>} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
