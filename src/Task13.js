// Task 13 - Template Literals

console.log("========== Task 13 ==========");

let patient = {
    name: "Anjali",
    age: 40,
    disease: "Diabetes",
    doctor: "Dr. Sharma"
};

console.log(`
Patient Summary
---------------
Name     : ${patient.name}
Age      : ${patient.age}
Disease  : ${patient.disease}
Doctor   : ${patient.doctor}
`);