import React, { useState } from 'react';
import "../App.css";
import ModifPatientController from '../controllers/ModifPatientController';
import RecherchePatientController from "../controllers/RecherchePatientController";

const ModifierPatient = () => {
    const [lastName, setLastName] = useState("");
    const [patients, setPatients] = useState([]);
    const [newData, setNewData] = useState({});
    const [error, setError] = useState(null);

    const handleRecherche = async (e) => {
        e.preventDefault();

        try {
            const data = await RecherchePatientController(lastName);
            setPatients(data);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleModification = async (idPatient) => {
        try {
            const data = await ModifPatientController(idPatient, newData);
            setPatients(data);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className='container-infos-patient'>
            <h2>Modifier les informations du patient :</h2>

            <form onSubmit={handleRecherche}>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <button type='btnRecherchePatient' ></button>
            </form>

            {patients.length > 0 && (
                <div>
                    {patients.map((patient) => (
                        <div key={patient.id}>
                            {/* détails patient */}
                        <button onClick={() => handleModification(patient.id)}>Modifier</button>
                        </div>
                    ))}
                </div>
            )}

            {error && <p>Erreur: {error}</p>}
        </div>
    );
};

export default ModifierPatient;