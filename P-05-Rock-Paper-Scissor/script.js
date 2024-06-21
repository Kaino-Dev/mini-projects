let card = document.getElementsByClassName('card');
let result = document.querySelector('.result');
let player =document.querySelector('.right');
let computer = document.querySelector('.left');
let menu = document.querySelector('.menu');
let gameArea = document.querySelector('.display');
let choice = document.querySelector('.choice');

// Sound Effect
const win = new Audio("./assets/win.wav");
const lose = new Audio("./assets/lose.wav");
const click = new Audio('./assets/click.ogg')

let display = (p,c) => {
    switch(p){
        case 0:
            player.src="./assets/Rock.png";
            break
        case 1:
            player.src="./assets/Paper.png"
            break;
        case 2:
            player.src="./assets/Scissor.png"
            break;    
        default:
            console.log('error');    
    }
    switch(c){
        case 0:
            computer.src="./assets/Rock.png";
            break
        case 1:
            computer.src="./assets/Paper.png"
            break;
        case 2:
            computer.src="./assets/Scissor.png"
            break;    
        default:
            console.log('error');    
    }
};

for(let i = 0;i < card.length;i++){
    card[i].addEventListener('click',function(){
        let playerChoice = parseInt(card[i].dataset.choice);
        let computerChoice = Math.floor(Math.random() * 3)
        if((playerChoice == 0 && computerChoice == 2)||(playerChoice == 1 && computerChoice == 0)||(playerChoice == 2 && computerChoice == 1)){
            display(playerChoice,computerChoice);
            win.currentTime = 0;
            win.play()
            result.textContent = "You Win🤩🥳";
        }
        else if(playerChoice == computerChoice){
            display(playerChoice,computerChoice);
            lose.currentTime = 0;
            lose.play();
            result.textContent = "It's Draw! Try Again!";
        }
        else{
            display(playerChoice,computerChoice);
            lose.currentTime = 0;
            lose.play();
            result.textContent = "Sorry 🥺 You Lose";
        }
    })
}
let menu_disappear = () => {
    menu.classList.add('hide');
}
let game_appear = () => {
    gameArea.classList.remove('hide');
    choice.classList.remove('hide');
}

let start = () => {
    menu.classList.add('fadeout');
    setTimeout(menu_disappear,100);
    setTimeout(game_appear,100);
    gameArea.classList.add('fadein');
    choice.classList.add('fadein');
}

