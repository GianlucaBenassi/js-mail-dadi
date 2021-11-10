// login email
const mailList = ["gianluca@gmail.com", "boolean@gmail.com", "email@gmail.com", "test@gmail.com"];

const btnLogin = document.getElementById("login");

btnLogin.addEventListener("click", function() {
    const userEmail = document.getElementById("email");
    let emailCheck = false;
    
    if (userEmail.value == "") {
        alert("Inserire una email!");
    } else {

        for (let i = 0; i < mailList.length; i++) {
            if (userEmail.value == mailList[i]) {
                emailCheck = true;
            }
        }

        if (emailCheck) {
            alert("Accesso eseguito!");

            userEmail.disabled = true;
            btnLogin.disabled = true;

        } else {
            alert("Email non valida!");
        }

    }
});


// dice

const btnDice = document.getElementById("roll-dice");

btnDice.addEventListener("click", function(){

    const spanGameResult = document.getElementById("game-result");
    const iconNumber = ["one", "two", "three", "four", "five", "six"]

    const userNumber = Math.floor(Math.random() * 6) + 1;
    const computerNumber = Math.floor(Math.random() * 6) + 1;

    const userDice = document.getElementById("user-dice");
    const computerDice = document.getElementById("computer-dice");

    userDice.innerHTML = `<i class="fas fa-dice-${iconNumber[userNumber - 1]}"></i>`
    computerDice.innerHTML = `<i class="fas fa-dice-${iconNumber[computerNumber - 1]}"></i>`

    if (userNumber > computerNumber) {
        spanGameResult.innerHTML = "Hai vinto!";
    } else if (userNumber < computerNumber) {
        spanGameResult.innerHTML = "Hai perso!";
    } else {
        spanGameResult.innerHTML = "Pareggio!";
    }

});