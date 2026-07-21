// Task 9 - Remove & Sort

console.log("========== Task 9 ==========");

// Remove last patient
patients.pop();

console.log("Last patient removed.\n");

// Sort by age
patients.sort((a, b) => a.age - b.age);

console.log("Patients Sorted by Age:");

for (let patient of patients) {
    console.log(`${patient.name} - ${patient.age}`);
}

console.log();