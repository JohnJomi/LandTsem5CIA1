
// Task 6 - Iterate Over Records

console.log("========== Task 6 ==========");

let patients = [
    {
        id: 101,
        name: "John",
        age: 25,
        disease: "Fever"
    },
    {
        id: 102,
        name: "Anjali",
        age: 40,
        disease: "Diabetes"
    },
    {
        id: 103,
        name: "Rahul",
        age: 17,
        disease: "Asthma"
    },
    {
        id: 104,
        name: "Meera",
        age: 60,
        disease: "Hypertension"
    }
];

for (let patient of patients) {
    console.log(
        `ID: ${patient.id}, Name: ${patient.name}, Age: ${patient.age}, Disease: ${patient.disease}`
    );
}

console.log();