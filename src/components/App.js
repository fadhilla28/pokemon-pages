import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Halaman from "./Halaman";
function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/pokemon/:id" element={<Halaman />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
