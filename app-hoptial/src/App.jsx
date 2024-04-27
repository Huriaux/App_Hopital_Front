import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "../src/views/Accueil";
import AjoutPatient from "./views/AjoutPatient";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/ajout-patient" element={<AjoutPatient />} />
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;
