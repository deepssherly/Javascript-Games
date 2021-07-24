var randomNumber1 = Math.floor(Math.random() * 6) + 1;
const img1 = document.querySelector('.img1');
const heading = document.querySelector('.heading');
if (randomNumber1 == 6) {
    img1.setAttribute("src", "images/dice-" + randomNumber1 + ".jpg");
} else {
    img1.setAttribute("src", "images/dice-" + randomNumber1 + ".png");
}
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
const img2 = document.querySelector('.img2');
if (randomNumber2 == 6) {
    img2.setAttribute("src", "images/dice-" + randomNumber2 + ".jpg");
} else {
    img2.setAttribute("src", "images/dice-" + randomNumber2 + ".png");
}
if (randomNumber1 === randomNumber2) {
    heading.textContent = "Draw";
} else if (randomNumber1 > randomNumber2) {
    heading.textContent = "Player1 Wins!";
} else {
    heading.textContent = "Player2 Wins!";
}