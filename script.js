let computerGuss;
let userguss = [];

let gamePlayArea = document.querySelector(".gamePlayArea");
let welcomeScree = document.querySelector(".welcomeScree");
let newGame = document.querySelector(".newGame");
let eastMode = document.querySelector(".eastMode");
let hardMode = document.querySelector(".hardMode");
let userNumber = document.querySelector("#userNumber");
let input = document.querySelector("input");
let previoueinput = document.querySelector("#previoueinput");
let attampt = document.querySelector("#attampt");
let numberMessage = document.querySelector(".numberMessage");

let click = new Audio("/SOUND/click.wav");
let loss = new Audio("/SOUND/loss.wav");
let win = new Audio("/SOUND/win.wav");

// click.play();
// loss.play();
// win.play();



const init = () => {
    computerGuss = Math.floor(Math.random() * 100);
    console.log(computerGuss);
    gamePlayArea.style.display = "none";
    newGame.style.display = "none";
    click.play();
}

const startGame = () => {
    gamePlayArea.style.display = "block";
    welcomeScree.style.display = "none";
    win.play();

}

const compareguss = () => {
    userInput = input.value;
    userguss = [...userguss, userInput]
    previoueinput.textContent = userguss;
    attampt.textContent = userguss.length;


    if (userguss.length < maxNum) {
        if (computerGuss < userInput) {
            numberMessage.textContent = "Your Number is Bigger 😀 ";
        } else if (computerGuss > userInput) {
            numberMessage.textContent = "Your Number is Smaller 😒 ";
        } else {
            numberMessage.textContent = "You Win The Game 🤩 ";
            input.disabled = true;
            newGame.style.display = "block";
            win.play();
        }
    } else {
        if (computerGuss < userInput) {
            numberMessage.textContent = `You loss 🤐 The Game And Number is :${computerGuss}`;
            newGame.style.display = "block";
            input.disabled = true;
            loss.play();
        } else if (computerGuss > userInput) {
            numberMessage.textContent = `You loss 🤐 The Game And Number is :${computerGuss}`;
            newGame.style.display = "block";
            input.disabled = true;
            loss.play();
        } else {
            numberMessage.textContent = "You Win The Game 🤩 ";
            input.disabled = true;
            newGame.style.display = "block";
            win.play();
        }
    }

    input.value = "";
}


newGame.addEventListener("click", () => {
    window.location.reload();
    win.play();
})


eastMode.addEventListener("click", () => {
    maxNum = 5;
    startGame();
    click.play();

})

hardMode.addEventListener("click", () => {
    maxNum = 10;
    startGame();
    click.play();

})

























