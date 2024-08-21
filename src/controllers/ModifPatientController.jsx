const ModifPatientController = async (idPatient, newData) => {
    try {
        const response = await fetch('https://api-ecf.sarahkatz.fr/patients/${id}', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newData),
        });

        if (!response.ok) {
            throw new Error('Erreur lors de la modification des données du patient! Code: ${response.status}');

        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la modification des données du patient:', error);
        throw error;
    }
};

export default ModifPatientController;