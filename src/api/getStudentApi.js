export function getStudents() {
  return fetch("http://localhost:3000/students")
    .then((res) => res.json())
    .catch((err) => {
      console.error("Помилка при отриманні студентів:", err);
      return [];
    });
}
