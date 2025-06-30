let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#message");

const userScorePara = document.querySelector("#userscore");
const compScorePara = document.querySelector("#compscore");

const showDraw = () => {
    console.log("DRAW");
    msg.innerText = "D R A W";
    msg.style.backgroundColor = "black";

}

const showWinner = (userWin) => {
    if(userWin === true){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("YOU WIN");
        msg.innerText = "W I N";
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("YOU LOST");
        msg.innerText = "L O S E";
        msg.style.backgroundColor = "red";
    }
}

const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice);
    if(userChoice === compChoice){
        showDraw();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true
        } else {
            userWin = compChoice === "rock" ? false : true
        }
        showWinner(userWin);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        console.log("user choice = ",userChoice);
        playGame(userChoice);
    });
});