const formEl = document.getElementById("form");
const firstNameEl = document.getElementById("first-name");
const middleNameEl = document.getElementById("middle-name");
const lastNameEl = document.getElementById("last-name");
const emailEl = document.getElementById("email");
const contactEl = document.getElementById("contact-number");
const passwordEl = document.getElementById("password");
const confirmPasswordEl = document.getElementById("confirm-password");
const streetEl = document.getElementById("street");
const barangayEl = document.getElementById("barangay");
const cityEl = document.getElementById("city");
const provinceEl = document.getElementById("province");
const zipCodeEl = document.getElementById("zipcode");
const submitBtn = document.getElementById("subtmit-btn");

formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerHTML = message;
    inputControl.classList.add("error ");
};

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerHTML = "";
    inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
    const firstNameValue = firstNameEl.value.trim();
    const lastNameValue = lastNameEl.value.trim();
    const emailValue = emailEl.value.trim();
    const contactValue = contactEl.value.trim();
    const passwordValue = passwordEl.value.trim();
    const confirmPasswordValue = confirmPasswordEl.value.trim();
    const streetValue = streetEl.value.trim();
    const barangayValue = barangayEl.value.trim();
    const cityValue = cityEl.value.trim();
    const provinceValue = provinceEl.value.trim();
    const zipCodeValue = zipCodeEl.value.trim();

    if (firstNameValue === "") {
        setError(firstNameEl, "First Name is Required");
    } else {
        setSuccess(firstNameEl);
    }

    if (lastNameValue === "") {
        setError(lastNameEl, "Last Name is Required");
    } else {
        setSuccess(lastNameEl);
    }

    if (emailValue === "") {
        setError(emailEl, "Email is Required");
    } else if (!isValidEmail(emailValue)) {
        setError(emailEl, "Please provide a valid email address");
    } else {
        setSuccess(emailEl);
    }

    if (contactValue === "") {
        setError(contactEl, "Contact Number is Required");
    } else {
        setSuccess(contactEl);
    }

    if (passwordValue === "") {
        setError(passwordEl, "Password is Required");
    } else if (passwordValue.length < 8) {
        setError(passwordEl, "Password must be at least 8 characters.");
    } else {
        setSuccess(passwordEl);
    }

    if (confirmPasswordValue !== passwordValue) {
        setError(confirmPasswordEl, "Password doesn't match");
    } else {
        setSuccess(confirmPasswordEl);
    }

    if (streetValue === "") {
        setError(streetEl, "Street/Unit is Required");
    } else {
        setSuccess(streetEl);
    }

    if (barangayValue === "") {
        setError(barangayEl, "Barangay is Required");
    } else {
        setSuccess(barangayEl);
    }

    if (cityValue === "") {
        setError(cityEl, "City is Required");
    } else {
        setSuccess(cityEl);
    }

    if (provinceValue === "") {
        setError(provinceEl, "Province is Required");
    } else {
        setSuccess(provinceEl);
    }

    if (zipCodeValue === "") {
        setError(zipCodeEl, "Zip Code is Required");
    } else {
        setSuccess(zipCodeEl);
    }
};
