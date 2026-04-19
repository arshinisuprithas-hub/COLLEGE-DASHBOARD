function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") return;

    let li = document.createElement("li");
    li.textContent = task;

    li.onclick = function() {
        li.style.textDecoration = "line-through";
    };

    document.getElementById("tasks").appendChild(li);
    input.value = "";
}

function addExam() {
    let input = document.getElementById("examInput");
    let exam = input.value;

    if (exam === "") return;

    let li = document.createElement("li");
    li.textContent = exam;

    document.getElementById("exams").appendChild(li);
    input.value = "";
}
