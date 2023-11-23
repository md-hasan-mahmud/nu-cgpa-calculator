let selects = document.querySelectorAll("tbody select");
let showGrades = document.querySelectorAll(".show-grade");
const Name = document.getElementById("name");
const cgpa = document.getElementById("cgpa");
const submit = document.getElementById("Submit");
let options = document.querySelectorAll("select option");
const AddSubject = document.getElementById("add");
const tbody = document.querySelector("tbody");
let tr = document.querySelectorAll(" tbody tr");
let input = document.querySelectorAll(".sub-name");
const hightLightResult = document.getElementById("high-light");
let Delete = document.querySelectorAll(".delete");
showGrade();
// // Set Grade Value in Display
function showGrade() {
  for (let i = 0; i < selects.length; i++) {
    selects[i].addEventListener("change", function () {
      if (selects[i].value === "A+") {
        showGrades[i].innerHTML = "4.00";
      } else if (selects[i].value === "A") {
        showGrades[i].innerHTML = "3.75";
      } else if (selects[i].value === "A-") {
        showGrades[i].innerHTML = "3.50";
      } else if (selects[i].value === "B+") {
        showGrades[i].innerHTML = "3.25";
      } else if (selects[i].value === "B") {
        showGrades[i].innerHTML = "3.00";
      } else if (selects[i].value === "B-") {
        showGrades[i].innerHTML = "2.75";
      } else if (selects[i].value === "C+") {
        showGrades[i].innerHTML = "2.50";
      } else if (selects[i].value === "C") {
        showGrades[i].innerHTML = "2.25";
      } else if (selects[i].value === "D") {
        showGrades[i].innerHTML = "2.00";
      } else if (selects[i].value === "F") {
        showGrades[i].innerHTML = "0.00";
      } else if (selects[i].value === "Select") {
        showGrades[i].innerHTML = "";
      }
    });
  }
}

// // Calculation

submit.addEventListener("click", calculate);
function calculate() {
  let p = 0;
  for (let i = 0; i < selects.length; i++) {
    if (selects[i].value === "A+") {
      p += 4;
    } else if (selects[i].value === "A") {
      p += 3.75;
    } else if (selects[i].value === "A-") {
      p += 3.5;
    } else if (selects[i].value === "B+") {
      p += 3.25;
    } else if (selects[i].value === "B") {
      p += 3.0;
    } else if (selects[i].value === "B-") {
      p += 2.75;
    } else if (selects[i].value === "C+") {
      p += 2.5;
    } else if (selects[i].value === "C") {
      p += 2.25;
    } else if (selects[i].value === "D") {
      p += 2.0;
    } else if (selects[i].value === "F") {
      p += 0;
    }
  }
  const result = p / tr.length;
  if (result < 2) {
    hightLightResult.style.color = "red";
  } else if (result < 3) {
    hightLightResult.style.color = "blue";
  } else if (result >= 3) {
    hightLightResult.style.color = "green";
  }
  hightLightResult.innerHTML = result.toFixed(2);
  selects = document.querySelectorAll("tbody select");
  selects.forEach((sl) => {
    if (sl.value === "") {
      p = 0;
      sl.focus();
      alert("Please Select Option");
      hightLightResult.innerHTML = "--";
      hightLightResult.style.color = "#303030";
      return false;
    }
    return true;
  });
}

// // Window Refresh to set Default value
window.addEventListener("load", function () {
  for (var i = 0; i < options.length; i++) {
    options[i].selected = options[i].defaultSelected;
  }
});

// // Button Click To Add New Select Option in Html
AddSubject.addEventListener("click", function () {
  addSubject();
  selects = document.querySelectorAll("tbody select");
  showGrades = document.querySelectorAll(".show-grade");
  tr = document.querySelectorAll("tbody tr");
  input = document.querySelectorAll(".sub-name");
  options = document.querySelectorAll("select option");
  Delete = document.querySelectorAll(".delete");
  showGrade();
});

// // Delete Select Option

tbody.addEventListener("mouseover", function () {
  [...this.children].forEach((row) => {
    const del = row.querySelectorAll(".delete");
    del.forEach((dl) => {
      dl.addEventListener("click", function () {
        row.remove();
        tr = document.querySelectorAll("tbody tr");
        options = document.querySelectorAll("select option");
        for (var i = 0; i < options.length; i++) {
          options[i].selected = options[i].defaultSelected;
        }
        showGrades.forEach((grade) => {
          grade.innerHTML = "";
        });
        hightLightResult.innerHTML = "--";
        hightLightResult.style.color = "#303030";
      });
    });
  });
});

// // Create New Select Option
function addSubject() {
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "sub-name");
  input.setAttribute("class", "sub-name");
  input.setAttribute("placeholder", "subject name or code BN/EN");
  const trow = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  const td4 = document.createElement("td");
  const pa = document.createElement("p");
  pa.className = "show-grade";
  const button = document.createElement("button");
  button.innerHTML = "Delete";
  button.className = "delete";
  const sl = document.createElement("select");
  sl.className = "select";
  const op1 = document.createElement("option");
  op1.innerHTML = "Select";
  op1.setAttribute("selected", "");
  op1.setAttribute("disabled", "");
  op1.setAttribute("value", "");
  const op2 = document.createElement("option");
  op2.innerHTML = "A+";
  op2.setAttribute("value", "A+");
  const op3 = document.createElement("option");
  op3.innerHTML = "A";
  op3.setAttribute("value", "A");
  const op4 = document.createElement("option");
  op4.innerHTML = "A-";
  op4.setAttribute("value", "A-");

  const op5 = document.createElement("option");
  op5.innerHTML = "B+";
  op5.setAttribute("value", "B+");

  const op6 = document.createElement("option");
  op6.innerHTML = "B";
  op6.setAttribute("value", "B");

  const op7 = document.createElement("option");
  op7.innerHTML = "B-";
  op7.setAttribute("value", "B-");

  const op8 = document.createElement("option");
  op8.innerHTML = "C+";
  op8.setAttribute("value", "C+");

  const op9 = document.createElement("option");
  op9.innerHTML = "C";
  op9.setAttribute("value", "C");

  const op10 = document.createElement("option");
  op10.innerHTML = "D";
  op10.setAttribute("value", "D");

  const op11 = document.createElement("option");
  op11.innerHTML = "F";
  op11.setAttribute("value", "F");

  sl.appendChild(op1);
  sl.appendChild(op2);
  sl.appendChild(op3);
  sl.appendChild(op4);
  sl.appendChild(op5);
  sl.appendChild(op6);
  sl.appendChild(op7);
  sl.appendChild(op8);
  sl.appendChild(op9);
  sl.appendChild(op10);
  sl.appendChild(op11);
  td2.appendChild(sl);
  td3.appendChild(pa);
  td1.appendChild(input);
  td4.appendChild(button);
  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  tbody.appendChild(trow);
}

// const optionsArray = [
//   option("Select"),
//   option("A+"),
//   option("A"),
//   option("A-"),
//   option("B+"),
//   option("B"),
//   option("B-"),
//   option("C+"),
//   option("C"),
//   option("D"),
//   option("F"),
// ];

// function option(text) {
//   const op = document.createElement("option");
//   op.innerHTML = text;
//   return op;
// }

// function apendChild(parent, children) {
//   children.forEach((child) => {
//     parent.appendChild(child);
//   });
// }
