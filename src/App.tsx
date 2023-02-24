import React from "react";
import "./App.css";
import { Routes, Route } from "react-router";

import { Home, About, Career, Contact } from "./pages";
import { Footer, Navigation, Preload } from "./@components";

const App: React.FC = () => {
  return (
    <div className="App flex justify-center">
      <div className="flex flex-col min-h-[100vh] justify-between w-[1920px]">
        <Navigation />
        <main className="flex flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
