const loginForm = document.getElementById("login-form");
//const loginButton = document.getElementById("login-btn");
const loginErrorMsg = document.getElementById("login-error-msg");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (validateUsername(username) && password.length > 10 && username.length > 12) {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

function validateUsername (input) {
    return /^[0-9a-zA-Z_.-]+$/.test(input)||String(input).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}