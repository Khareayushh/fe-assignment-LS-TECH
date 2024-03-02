import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { atom } from "jotai";

export const login = atom(false);
export const person = atom({email: "", password: ""});

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
