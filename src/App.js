import React from "react";

import {
  AboutUs,
  FindUs,
  Footer,
  Rules,
  Contact,
  Pricing,
  MainPage,
} from "./container";
import { Navbar } from "./components";
import "./App.scss";
import { HashRouter, Route, Routes } from "react-router-dom";

const App = () => (
  <HashRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/home" element={<MainPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/find" element={<FindUs />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/footer" element={<Footer />} />
    </Routes>
  </HashRouter>
);

export default App;
