// svg animation
const liveSVG = new Vivus('profile-svg', { duration: 600 });

// Dynamically create select options for date of birth

const daySelect = document.getElementById("day");
const yearSelect = document.getElementById("year");

for (let i = 1; i <= 31; i++) {
    daySelect.options[daySelect.options.length] = new Option(i, i);
};

for (let i = new Date().getFullYear(); i >= (new Date().getFullYear() - 100); i--) {
    yearSelect.options[yearSelect.options.length] = new Option(i, i);
};

// Check that the passwords in both fields match

const password = document.querySelector("#password");
const confPassword = document.querySelector("#confirm-password");

function checkPasswordMatch() {
    if (password.value !== confPassword.value) {
        confPassword.setCustomValidity(
            "The confirmation password does not match your password"
        );
    } else {
        confPassword.setCustomValidity("");
    };
};

password.addEventListener("input", checkPasswordMatch);
confPassword.addEventListener("input", checkPasswordMatch);

// Set pattern to the password field

function checkPassword() {
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password.value)) {
        password.setCustomValidity(
            "Your password should contain at least 8 characters including one uppercase letter, one lowercase letter and one number"
        );
    } else {
        password.setCustomValidity("");
    }
};

password.addEventListener("input", checkPassword);

// Check first name, last name and e-mail input validity to change styling (if input is invalid)

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");

function checkFieldsOnInput(input) {
    if (input.checkValidity()) {
        input.classList.remove("error-text");
        input.parentElement.parentElement.classList.remove("error");
    }
};

function checkFieldsOnFocusOut(input) {
    if (!input.checkValidity()) {
        input.classList.add("error-text");
        input.parentElement.parentElement.classList.add("error");
    }
};

firstName.addEventListener("focusout", (e) => { checkFieldsOnFocusOut(e.target) });
lastName.addEventListener("focusout", (e) => { checkFieldsOnFocusOut(e.target) });
email.addEventListener("focusout", (e) => { checkFieldsOnFocusOut(e.target) });

firstName.addEventListener("input", (e) => { checkFieldsOnInput(e.target) });
lastName.addEventListener("input", (e) => { checkFieldsOnInput(e.target) });
email.addEventListener("input", (e) => { checkFieldsOnInput(e.target) });

// add submit button animation

const form = document.querySelector("form");
const button = document.getElementById("submit");

button.addEventListener("click", () => {
    if (!form.reportValidity()) {
        button.classList.add("shake");
    };
});

button.addEventListener("animationend", () => {
    button.classList.remove("shake");
});

// clear the form

function clear(e) {
    e.preventDefault();
    form.reset();
};

form.addEventListener("submit", clear);
