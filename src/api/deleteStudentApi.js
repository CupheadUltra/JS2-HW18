export function deleteStudent(id) {
  return fetch(`http://localhost:3000/students/${id}`, {
    method: "DELETE",
  }).then((res) => res.ok);
}