export function addStudent(student) {
  return fetch("http://localhost:3000/students", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  }).then((res) => res.json());
}
