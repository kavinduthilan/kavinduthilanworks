import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Career from "./components/Career/Career";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Profile />
      <Career />
      {/* <Routes>
        <Route path="/career" element={<Career />} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
