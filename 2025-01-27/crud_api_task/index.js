const api = "http://localhost:5000/api";
const getAllApplications = () => {
  fetch(`${api}/application`, {
    method: "GET",
  })
    .then(async (response) => {
      if (!response.ok) {
        const errorMsg = await response.json();
        throw new Error(`${errorMsg.message}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const applications = data.applications;

      const totalEssayWords = applications.reduce((totalWords, application) => {
        totalWords += application.essay.length;
        return totalWords;
      });
      console.log(totalEssayWords);

      data.applications.forEach((application) => {
        const tableName = document.createElement("td");
        const tableAddress = document.createElement("td");
        const tableEmail = document.createElement("td");
        const tablePhone = document.createElement("td");
        const tableIq = document.createElement("td");
        const btnView = document.createElement("button");
        const btnEdit = document.createElement("button");
        const btnDelete = document.createElement("button");

        tableName.textContent = application.name;
        tableAddress.textContent = application.address;
        tableEmail.textContent = application.email;
        tablePhone.textContent = application.phone;
        tableIq.textContent = application.iq;

        btnView.textContent = "View";
        btnEdit.textContent = "Edit";
        btnDelete.textContent = "Delete";

        btnView.setAttribute("id", "btnView");
        btnEdit.setAttribute("id", "btnEdit");
        btnView.setAttribute("id", "btnDelete");

        let tableRow = document.createElement("tr");
        tableRow.appendChild(tableName);
        tableRow.appendChild(tableAddress);
        tableRow.appendChild(tableEmail);
        tableRow.appendChild(tablePhone);
        tableRow.appendChild(tableIq);
        tableRow.appendChild(btnView);
        tableRow.appendChild(btnEdit);
        tableRow.appendChild(btnDelete);

        const table = document.querySelector(".application-table");
        table.appendChild(tableRow);
      });
    })
    .catch((err) => console.log(err.message));
};

const deleteApplicatoin = () => {
  fetch(`${url}/application/:id`, {
    method: "DELETE",
    body: user.email,
  }).then((response) => {
    if (!response.ok) {
      alert("asdlkasd");
    }
  });
};
getAllApplications();
