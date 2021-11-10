// login email
const mailList = ["gianluca@gmail.com", "boolean@gmail.com", "email@gmail.com", "test@gmail.com"];

const btnLogin = document.getElementById("login");

btnLogin.addEventListener("click", function() {
    const userEmail = document.getElementById("email").value;
    const spanLoginResult = document.getElementById("login-result");
    let emailCheck = false;
    
    if (userEmail == "") {
        spanLoginResult.innerHTML = "Inserire una email!";
    } else {

        for (let i = 0; i < mailList.length; i++) {
            if (userEmail == mailList[i]) {
                emailCheck = true;
            }
        }

        if (emailCheck) {
            spanLoginResult.innerHTML = "Accesso eseguito!"
        } else {
            spanLoginResult.innerHTML = "Email non valida!"
        }

    }
});


// dice

const btnDice = document.getElementById("roll-dice");

btnDice.addEventListener("click", function(){
    const spanGameResult = document.getElementById("game-result");
    const userNumber = Math.floor(Math.random() * 6) + 1;
    const computerNumber = Math.floor(Math.random() * 6) + 1;

    document.getElementById("user-number").innerHTML += userNumber;
    document.getElementById("computer-number").innerHTML += computerNumber;

    if (userNumber > computerNumber) {
        spanGameResult.innerHTML = "Hai vinto!";
    } else if (userNumber < computerNumber) {
        spanGameResult.innerHTML = "Hai perso!";
    } else {
        spanGameResult.innerHTML = "Pareggio!";
    }

});