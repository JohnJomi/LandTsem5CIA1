// Task 11 - Calculate Derived Value

console.log("========== Task 11 ==========");

function checkPatientStatus(name, age) {
    if (age >= 18) {
        return `${name} is an Adult.`;
    } else {
        return `${name} is a Minor.`;
    }
}

console.log(checkPatientStatus("Rahul", 17));
console.log(checkPatientStatus("John", 25));
console.log();