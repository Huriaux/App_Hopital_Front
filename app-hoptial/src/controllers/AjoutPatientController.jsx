const ajoutPatientController = async (patientData) => {
    try {
        const response = await fetch("https://api-ecf.sarahkatz.fr/patients", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(patientData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Échec de l'ajout du nouveau patient", error);
        throw error;
    }
};

export default ajoutPatientController;