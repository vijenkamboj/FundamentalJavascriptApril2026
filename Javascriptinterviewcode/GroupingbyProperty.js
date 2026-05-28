//Group them by dept into an object.
const employees = [
  { name: "A", dept: "QA" },
  { name: "B", dept: "Dev" },
  { name: "C", dept: "QA" },
];

const grouped = {}; // empty object to collect results
for (let i = 0; i < employees.length; i++) {
  const employee = employees[i]; // get current employee
  const dept = employee.dept; // get their dept ("QA" or "Dev")
  // does this dept exist in grouped?
  if (!grouped[dept]) {
    grouped[dept] = []; // NO → create empty array
  }
  grouped[dept].push(employee); // push employee into that dept
}
console.log(grouped);

// i = 0  →  employee = {name:"A", dept:"QA"}
//            grouped["QA"] doesn't exist → create it
//            grouped = { QA: [] }
//            push A
//            grouped = { QA: [A] }

// i = 1  →  employee = {name:"B", dept:"Dev"}
//            grouped["Dev"] doesn't exist → create it
//            grouped = { QA: [A], Dev: [] }
//            push B
//            grouped = { QA: [A], Dev: [B] }

// i = 2  →  employee = {name:"C", dept:"QA"}
//            grouped["QA"] already exists → skip
//            push C directly
//            grouped = { QA: [A, C], Dev: [B] }
