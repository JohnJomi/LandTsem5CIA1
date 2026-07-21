// Task 8 - Add & Find

console.log("========== Task 8 ==========");

// Add new patient
patients.push({
    id: 105,
    name: "David",
    age: 72,
    disease: "Heart Disease"
});

console.log("New patient added successfully.\n");

// Find patient with highest age
let oldestPatient = patients[0];

for (let patient of patients) {
    if (patient.age > oldestPatient.age) {
        oldestPatient = patient;
    }
}

console.log("Oldest Patient:");
console.log(oldestPatient);
console.log();