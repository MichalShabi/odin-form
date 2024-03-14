let password = document.querySelector("#password");
let confirmedPassword = document.querySelector("#confirm-password");
confirmedPassword.addEventListener("input", checkPass);

function checkPass() {
    if(password.value !== confirmedPassword.value) {
        document.querySelector("#submit-btn").disabled = true;
        document.querySelector("#error-pas").style.display = "block";
        confirmedPassword.setAttribute("class", "error");
    }
    else {
        document.querySelector("#submit-btn").disabled = false;
        document.querySelector("#error-pas").style.display = "none";
        confirmedPassword.removeAttribute("class", "error");

    }
}

