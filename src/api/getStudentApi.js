export async function getStudents() {
  try {
    const res = await fetch("http://localhost:3000/students");
    if (!res.ok) throw new Error("Не вдалося отримати студентів");
    return await res.json();
  } catch (err) {
    console.error("Помилка при отриманні студентів:", err);
    return [];
  }
}
