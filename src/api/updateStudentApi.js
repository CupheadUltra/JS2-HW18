export function updateStudent(id, updatedFields) {
  return fetch(`http://localhost:3000/students/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedFields),
  }).then((res) => res.json());
}
