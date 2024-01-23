
let passField = document.querySelector("#password");
let passConfirm = document.querySelector("#pass-confirm");
let noMatchText = document.querySelector("#pass-nomatch");

function checkPass(event) {
    let passText = passField.value;
    let passConfText = passConfirm.value;
    switch(passText==passConfText) {
    case true:
        passField.classList = "";
        passConfirm.classList = "";
        noMatchText.textContent = "";
        break;
    case false:
        passField.classList = "error";
        passConfirm.classList = "error";
        noMatchText.textContent = "* Passwords do not match";
    }
}

passField.addEventListener("input", checkPass);
passConfirm.addEventListener("input", checkPass);