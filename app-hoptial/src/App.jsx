import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "../src/views/Accueil";
import Footer from './components/Footer';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
};

export default App;
