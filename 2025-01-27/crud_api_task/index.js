const api = "http://localhost:5000/api/application";

const getAllApplications = async () => {
  try {
    const response = await fetch(`${api}`, { method: "GET" });
    if (!response.ok) {
      const errorMsg = await response.json();
      throw new Error(`${errorMsg.message}`);
    }

    const data = await response.json();
    const applications = data.applications;

    applications.forEach((application) => {
      const tableRow = document.createElement("tr");

      tableRow.innerHTML = `
      <td>${application.name}</td>
      <td>${application.address}</td>
      <td>${application.email}</td>
      <td>${application.phone}</td>
      <td>${application.iq}</td>
      <td>${application.essay.length}</td>
      <td><button class="btn-view">View</button></td>
      <td><button class="btn-edit">Edit</button></td>
      <td><button class="btn-delete">Delete</button></td>
      `;

      const btnView = tableRow.querySelector(".btn-view");
      const btnEdit = tableRow.querySelector(".btn-edit");
      const btnDelete = tableRow.querySelector(".btn-delete");

      btnView.addEventListener("click", () => showDetails(application));
      btnEdit.addEventListener("click", () => editDetails(application));
      btnDelete.addEventListener("click", () => deleteApplication(application));
      document.querySelector(".application-table").appendChild(tableRow);
      console.log(tableRow);
    });
  } catch (err) {
    console.log(err.message);
    alert("Failed to fetch the applications: ", err.message);
  }
};

const deleteApplication = async (application) => {
  try {
    const response = await fetch(`${api}/${application.id}`, {
      method: "DELETE",
      headers: {
        "user-email": application.email,
      },
    });

    if (!response.ok) {
      const errorMsg = await response.json();
      throw new Error(`${errorMsg.message}`);
    }

    alert("Application deleted successfully");
    location.reload()
  } catch (error) {
    console.log(error.message);
    alert("Failed to delete the application: ", error.message);
  }
};

getAllApplications();
