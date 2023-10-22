// Handle form submission to add a patient
document.getElementById('patient-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Get user input
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const condition = document.getElementById('condition').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    // Create a new patient object
    const newPatient = {
        name,
        age,
        condition,
        phone,
        email
    };

    // Display patient details in the "Patient Details" section
    displayPatientDetails(newPatient);
});

// Function to display patient details
function displayPatientDetails(patient) {
    const patientDetails = document.getElementById('patient-details');
    
    // Create a new div to display patient information
    const patientInfo = document.createElement('div');
    patientInfo.classList.add('patient-info');
    
    // Add patient details to the div
    patientInfo.innerHTML = `
        <h3>${patient.name}</h3>
        <p>Age: ${patient.age}</p>
        <p>Heart Condition: ${patient.condition}</p>
        <p>Phone: ${patient.phone}</p>
        <p>Email: ${patient.email}</p>
    `;
    
    // Append the patient info to the "Patient Details" section
    patientDetails.innerHTML = ''; // Clear previous details
    patientDetails.appendChild(patientInfo);
}
