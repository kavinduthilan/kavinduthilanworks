import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Career from "./components/Career/Career";
import Profile from "./components/Profile/Profile";
import Skill from "./components/Skill/Skill";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Project from "./components/Project/Project";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Profile />
      <Career />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
