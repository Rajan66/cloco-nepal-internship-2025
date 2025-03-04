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
    alert("Form submitted successfully!");
    form.submit();
  }
});

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
