// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ThankYou from "./components/thankyoumsg/Thankyou";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/thankyou/:name" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
