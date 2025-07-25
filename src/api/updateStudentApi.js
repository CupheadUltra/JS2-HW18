export async function updateStudent(id, updatedFields) {
  try {
    const res = await fetch(`http://localhost:3000/students/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedFields),
    });
    if (!res.ok) throw new Error("Не вдалося оновити студента");
    return await res.json();
  } catch (err) {
    console.error("Помилка при оновленні студента:", err);
  }
}
