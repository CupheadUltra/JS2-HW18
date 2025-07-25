export async function deleteStudent(id) {
  try {
    const res = await fetch(`http://localhost:3000/students/${id}`, {
      method: "DELETE",
    });
    return res.ok;
  } catch (err) {
    console.error("Помилка при видаленні студента:", err);
    return false;
  }
}
