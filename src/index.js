import { getStudents } from "./api/getStudentApi.js";
import { addStudent } from "./api/postStudentApi.js";
import { updateStudent } from "./api/updateStudentApi.js";
import { deleteStudent } from "./api/deleteStudentApi.js";


function renderStudents(students) {
  const tbody = document.querySelector("#students-table tbody");
  tbody.innerHTML = "";

  students.forEach((student) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${student.id}</td>
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.course}</td>
      <td>${student.skills.join(", ")}</td>
      <td>${student.email}</td>
      <td>${student.isEnrolled ? "Так" : "Ні"}</td>
      <td>
        <button class="update-btn" data-id="${student.id}">Оновити</button>
        <button class="delete-btn" data-id="${student.id}">Видалити</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function loadStudents() {
  getStudents().then(renderStudents);
}

function handleAddStudent(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const age = parseInt(document.getElementById("age").value);
  const course = document.getElementById("course").value;
  const skills = document.getElementById("skills").value.split(",").map(s => s.trim());
  const email = document.getElementById("email").value;
  const isEnrolled = document.getElementById("isEnrolled").checked;

  const student = { name, age, course, skills, email, isEnrolled };

  addStudent(student).then(() => {
    loadStudents();
    e.target.reset();
  });
}


document
  .getElementById("get-students-btn")
  .addEventListener("click", loadStudents);

document
  .getElementById("add-student-form")
  .addEventListener("submit", handleAddStudent);

document
  .querySelector("#students-table tbody")
  .addEventListener("click", (e) => {
    if (e.target.classList.contains("update-btn")) {
      const id = e.target.dataset.id;
      const name = prompt("Нове ім'я:");
      if (name) {
        updateStudent(id, { name }).then(() => loadStudents());
      }
    }
    if (e.target.classList.contains("delete-btn")) {
      const id = e.target.dataset.id;
      if (confirm("Видалити?")) {
        deleteStudent(id).then(() => loadStudents());
      }
    }
  });
