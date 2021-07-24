$('.match').hide();
$('.start-btn').click(function() {
    $(this).hide();
    $('.match').show(200);
});
let playerScore = 0;
let computerScore = 0;
const computerOptions = ['Rock', 'Paper', 'Scissors'];
const playerOptions = document.querySelectorAll('.options button');
const playerImg = document.querySelector('.player-hand');
const computerImg = document.querySelector('.computer-hand');
playerOptions.forEach(option => {
    option.addEventListener('click', function() {
        const playerSelected = this.textContent;
        const randomNum = Math.floor(Math.random() * 3);
        const computerSelected = computerOptions[randomNum];
        playerImg.src = "images/" + playerSelected + ".png";
        computerImg.src = "images/" + computerSelected + ".png";
        compare(playerSelected, computerSelected);


    });
});

function compare(playerSelected, computerSelected) {
    const pScore = document.querySelector('.player-score p');
    const cScore = document.querySelector('.computer-score p');
    const heading = document.querySelector(".match h3");
    if (playerSelected === computerSelected) {
        heading.textContent = "It's a tie!";
        return;
    }
    if (playerSelected === 'Rock') {
        if (computerSelected == 'Scissors') {
            heading.textContent = "Player Wins!";
            playerScore++;
            pScore.textContent = playerScore;
            return;
        } else {
            heading.textContent = "Computer Wins!";
            computerScore++;
            cScore.textContent = computerScore;
            return;
        }
    }
    if (playerSelected === 'Scissors') {
        if (computerSelected == 'Paper') {
            heading.textContent = "Player Wins!";
            playerScore++;
            pScore.textContent = playerScore;
            return;
        } else {
            heading.textContent = "Computer Wins!";
            computerScore++;
            cScore.textContent = computerScore;
            return;
        }
    }
    if (playerSelected === 'Paper') {
        if (computerSelected == 'Rock') {
            heading.textContent = "Player Wins!";
            playerScore++;
            pScore.textContent = playerScore;
            return;
        } else {
            heading.textContent = "Computer Wins!";
            computerScore++;
            cScore.textContent = computerScore;
            return;
        }
    }
}