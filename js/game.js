const gameControlls = document.querySelector('.game-controlls')
const playerSideChoice = document.querySelector('.player-side-choice')
const computerSideChoice = document.querySelector('.computer-side-choice') 

// any game button clicks
gameControlls.addEventListener('click', (e) => {
  // choice selection only works with click to icon's center
  if (e.target.tagName != 'DIV') {
    playerSideChoice.innerHTML = ''
    computerSideChoice.innerHTML = ''
    const playerChoice = e.target.id 
    gettingGameChoices(playerChoice)
  
  }
})


function gettingGameChoices(player) {
  const playerChoice = player
  const computerChoice = gettingComputerChoice()
  console.log(`You selected : ${playerChoice}`)
  console.log(`Computer selected : ${computerChoice}`)
  performningChoiceUI(playerChoice, computerChoice)
  checkingGame(playerChoice, computerChoice)
  
}

function checkingGame(player, computer) {
  // player game winning logics
  if (
    (player === 'rock' && computer === 'scissor') ||
    (player === 'paper' && computer === 'rock') || 
    (player === 'scissors' && computer === 'paper')
  ) {
    console.log('you win ')
  } else {
    // other ways computer going to wins!
    console.log('computer wins')
  }

}

function performningChoiceUI(playerSide, computerSide) {
  gettingPlayerUI(playerSide)
  gettingComputerUI(computerSide)

}

// showing the the choice in game board
function gettingPlayerUI(playerUI) {
  const img = document.createElement('img')
  img.style.width = '100%'
  img.style.height = '100%'
  img.src = `../icons/${playerUI}.png`
  playerSideChoice.append(img)
}

function gettingComputerUI(computerUI) {
  const img = document.createElement('img')
  img.style.width = '100%'
  img.style.height = '100%'
  img.src = `../icons/${computerUI}.png`
  computerSideChoice.append(img)
}

function gettingComputerChoice() {
  const choice = ['rock', 'paper', 'scissor']
  //random choice in everytime
  let randomChoice = Math.floor(Math.random() * choice.length) 
  return choice[randomChoice]
}