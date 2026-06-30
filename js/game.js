const gameControlls = document.querySelector('.game-controlls')

// any game button clicks
gameControlls.addEventListener('click', (e) => {
  // choice selection only works with click to icon's center
  if (e.target.tagName != 'DIV') {
    const playerChoice = e.target.id 
    gettingGameChoices(playerChoice)
  }
})


function gettingGameChoices(player) {
  const playerChoice = player
  const computerChoice = gettingComputerChoice()
  console.log(`You selected : ${playerChoice}`)
  console.log(`Computer selected : ${computerChoice}`)
}


function gettingComputerChoice() {
  const choice = ['rock', 'paper', 'scissor']
  //random choice in everytime
  let randomChoice = Math.floor(Math.random() * choice.length) 
  return choice[randomChoice]
}