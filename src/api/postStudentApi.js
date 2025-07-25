export async function addStudent(student) {
  try {
    const res = await fetch("http://localhost:3000/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    });
    if (!res.ok) throw new Error("Не вдалося додати студента");
    return await res.json();
  } catch (err) {
    console.error("Помилка при додаванні студента:", err);
  }
}
