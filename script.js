// CGPA
function saveCGPA() {
  let cgpa = document.getElementById("cgpaInput").value;
  localStorage.setItem("cgpa", cgpa);
  document.getElementById("cgpaDisplay").innerText = "CGPA: " + cgpa;
}

// Load CGPA
window.onload = function () {
  let cgpa = localStorage.getItem("cgpa");
  if (cgpa) {
    document.getElementById("cgpaDisplay").innerText = "CGPA: " + cgpa;
  }

  loadExams();
};

// Placement progress
let slider = document.getElementById("progress");
if (slider) {
  slider.oninput = function () {
    document.getElementById("progressValue").innerText = this.value + "%";
  };
}

// Exams
function addExam() {
  let input = document.getElementById("examInput");
  let exams = JSON.parse(localStorage.getItem("exams")) || [];
  exams.push(input.value);
  localStorage.setItem("exams", JSON.stringify(exams));
  input.value = "";
  loadExams();
}

function loadExams() {
  let list = document.getElementById("examList");
  if (!list) return;

  list.innerHTML = "";
  let exams = JSON.parse(localStorage.getItem("exams")) || [];

  exams.forEach(e => {
    let li = document.createElement("li");
    li.textContent = e;
    list.appendChild(li);
  });
}

// Navigation
function openSubject(sub) {
  localStorage.setItem("currentSubject", sub);
  window.location.href = "subject.html";
}

// Load subject modules
if (window.location.pathname.includes("subject.html")) {
  let sub = localStorage.getItem("currentSubject");
  let subject = subjects[sub];

  document.getElementById("subjectTitle").innerText = subject.name;

  let container = document.getElementById("modules");

  subject.modules.forEach((m, i) => {
    let div = document.createElement("div");
    div.className = "module";
    div.innerHTML = `
      <h3>Module ${i + 1}</h3>
      <p>${m.notes}</p>
      <a href="${m.link}" target="_blank">Reference</a>
    `;
    container.appendChild(div);
  });
}
