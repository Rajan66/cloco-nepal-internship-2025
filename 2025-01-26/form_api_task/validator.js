let error = false;

const form = document.getElementById("survey-form");
form.addEventListener("submit", function (e) {
  // prevents the form from submitting
  e.preventDefault();

  validateName();
  validateAddress();
  validateEmail();
  validatePhone();
  validateIQ();
  validateEssay();

  if (!error) {
    // sends a response after sucessful submission
    const formData = new FormData(form);
    submitForm(formData);
    // TODO clear the form
  }
});

const submitForm = (formData) => {
  const api = "http://localhost:5000/api";
  let object = Object.fromEntries(formData);

  object.user = object.email;
  const payload = JSON.stringify(object);

  console.log(payload);

  fetch(`${api}/application`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
	"user-email": object.email
    },
    body: payload,
  })
    .then(async (response) => {
      if (!response.ok) {
        const errorMsg = await response.json();
        throw new Error(`${errorMsg.message}`);
      }
      return response.json();
    })
    .then((data) => {
      displayData(data);
      var x = document.getElementById("snackbar");

      x.className = "show";
      x.innerHTML = data.message;
      setTimeout(function () {
        x.className = x.className.replace("show","");
      }, 3000);
      form.reset();
    })
    .catch((err) => {
      console.error("Error while submitting the form:", err.message);
      alert(err.message);
    });
};

const validateName = () => {
  console.log("hello");
  const nameField = document.getElementById("name");
  const name = document.getElementById("name").value.trim();

  if (name === "" || name.length < 3 || name.length > 40) {
    document.getElementById("nameError").innerHTML =
      "**Name must be between 3 and 40 characters**";
    nameField.focus();
    error = true;
  } else {
    document.getElementById("nameError").innerHTML = "";
  }
};

const validateAddress = () => {
  const addressField = document.getElementById("address");
  const address = document.getElementById("address").value.trim();

  if (address === "" || address.length <= 2) {
    document.getElementById("addressError").innerHTML =
      "**Invalid address field**";
    addressField.focus();
    error = true;
  } else {
    document.getElementById("addressError").innerHTML = "";
  }
};

const validateEmail = () => {
  const emailField = document.getElementById("email");
  const email = emailField.value.trim();
  console.log(email);

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  if (email === "") {
    document.getElementById("addressError").innerHTML =
      "**Email field cannot be empty**";
    error = true;
    emailField.focus();
  } else if (!emailRegex.test(email)) {
    // regex.test() is a built in function to validate things with the regex
    document.getElementById("emailError").innerHTML = "**Invalid email**";
    error = false;
  } else {
    document.getElementById("emailError").innerHTML = "";
  }
};

const validatePhone = () => {
  const phoneField = document.getElementById("phone");
  const phone = phoneField.value.trim();

  console.log(phone);

  if (phone === null || phone.length > 10 || phone.length < 10) {
    document.getElementById("phoneError").innerHTML =
      "**Invalid phone number**";
    error = true;
    phoneField.focus();
    // TODO add error ring in input here
  } else {
    document.getElementById("phoneError").innerHTML = "";
  }
};

const validateIQ = () => {
  const iqField = document.getElementById("iq");
  const iq = iqField.value.trim();

  console.log(iq);

  if (iq == "" || iq < 50 || iq > 200) {
    document.getElementById("iqError").innerHTML = "**Be real xd**";
    error = true;
    iqField.focus();
  } else {
    document.getElementById("iqError").innerHTML = "";
  }
};

const validateEssay = () => {
  const essayField = document.getElementById("essay");
  const essay = essayField.value.trim();

  if (essay.length < 50) {
    document.getElementById("essayError").innerHTML =
      "**So you don't love her?**";
    error = true;
    essayField.focus();
  } else {
    document.getElementById("essayError").innerHTML = "";
    error = false;
  }
};

const displayData = (data) => {
  const container = document.getElementById("response-container");
  container.style.display = "flex";
  const application = data.application;
  document.getElementById("data-name").innerHTML = application.name;
  document.getElementById("data-address").innerHTML = application.address;
  document.getElementById("data-email").innerHTML = application.email;
  document.getElementById("data-phone").innerHTML = application.phone;
  document.getElementById("data-iq").innerHTML = application.iq;
  document.getElementById("data-essay").innerHTML = application.essay;
};
