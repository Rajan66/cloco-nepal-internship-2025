import { employeeData } from "./data.js";

const employeeList = document.getElementById("employee-list");
const uniqueEmployees = new Set(employeeData.map((emp) => emp.name));

// creates a li for each unique name and adds `a` tag to the li
uniqueEmployees.forEach((name) => {
  const liEl = document.createElement("li");
  employeeList.appendChild(liEl); // append the li to the employeeList i.e 'ul' tag
  liEl.innerHTML = `<a href="#" data-name="${name}">${name}</a>`;
});

// get all the a tag from the employee list id
document.querySelectorAll("#employee-list a").forEach((link) => {
  // add onClick listener on the `a` tag
  link.addEventListener("click", (e) => {
    e.preventDefault();
    // e.target gets use the `a` tag
    // the element that triggered the function
    const name = e.target.dataset.name;
    console.log(e.target.dataset.name);
    // then dataset contains the data-name value
    showEmployeeDetails(name);
  });
});

const showEmployeeDetails = (name) => {
  const detailSection = document.getElementById("employee-detail");
  const employeeNameEl = document.getElementById("employee-name");
  const employeeDataEl = document.getElementById("employee-data");

  employeeNameEl.textContent = `${name}'s Work Details`;
  detailSection.style.display = "block";

  // get the current employee
  const currentEmployeeEntries = employeeData.filter(
    (emp) => emp.name === name
  );

  // create each table data
  employeeDataEl.innerHTML = currentEmployeeEntries
    .map((emp) => {
      return `<tr><td>${emp.date}</td><td>${emp.workedHours}</td></tr>`;
    })
    .join("");

  const totalWorkHours = currentEmployeeEntries.reduce(
    (sum, emp) => (sum += emp.workedHours),
    0
  );
  document.getElementById("total-hours").innerHTML = `Total Worked Hours: ${totalWorkHours}` ;
  document.querySelector("#employee-list").style.display = "none";
};

document.getElementById("back-button").addEventListener("click", (e) => {
  document.getElementById("employee-list").style.display = "block";
  document.getElementById("employee-detail").style.display = "none";
});
