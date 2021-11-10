// login email
const mailList = ["gianluca@gmail.com", "boolean@gmail.com", "email@gmail.com", "test@gmail.com"];

const btnLogin = document.getElementById("login");

btnLogin.addEventListener("click", function() {
    const userEmail = document.getElementById("email").value;
    const spanResult = document.getElementById("login-result");
    let emailCheck = false;
    
    if (userEmail == "") {
        spanResult.innerHTML = "Inserire una email!";
    } else {

        for (let i = 0; i < mailList.length; i++) {
            if (userEmail == mailList[i]) {
                emailCheck = true;
            }
        }

        if (emailCheck) {
            spanResult.innerHTML = "Accesso eseguito!"
        } else {
            spanResult.innerHTML = "Email non valida!"
        }

    }
});