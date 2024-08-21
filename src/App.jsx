import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Accueil from "./views/Accueil";
import AjoutPatient from "./views/AjoutPatient";
import ModifierPatient from "./views/ModifierPatient";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/ajoutPatient" element={<AjoutPatient />} />
        <Route path="/modifPatient" element={<ModifierPatient />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
