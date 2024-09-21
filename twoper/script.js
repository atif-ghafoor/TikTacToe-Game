const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const patterns = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
]

const box = document.querySelectorAll('.input')
const restartButton = document.querySelector('#restart')
const menuButton = document.getElementById('menu-button')
const turn = document.getElementById('turn')
const onePer = document.getElementById('one-person')
const twoPer = document.getElementById('two-person')
const menu = document.querySelector('.modal-players')
let player = 1
let listx = []
let listo = []
let listxo = []

menuButton.addEventListener('click', function () {
  hideResult()
  hideButtons()
  menu.style.display = 'flex'
  clearBoard()
})


twoPerson()

function twoPerson() {
  box.forEach(input => {
    input.addEventListener('click', function () {
      const displayStyle = window.getComputedStyle(restartButton).display;
      const value = input.textContent
      if (displayStyle === "none") {

        if (player === 1) {
          if (value === '') {
            changePlayer()
            announceWinner(input, listx, `X`)
            input.style.color = '#B88A77'
            input.textContent = 'X'
          }
        } else {
          if (value === '') {
            changePlayer()
            announceWinner(input, listo, `O`)
            input.style.color = '#40E0D0'
            input.textContent = 'o'
          }
        }
      }
    })
  })

}
restartButton.addEventListener('click', function () {
  hideResult()
  hideButtons()
  clearBoard()
})


function changePlayer() {
  if (player === 1) {
    turn.textContent = `P2's turn`
    player = 2
  } else {
    turn.textContent = `P1's turn`
    player = 1
  }
}

function checkIfWin(list) {
  for (i = 0; i < patterns.length; i++) {
    let pattern = patterns[i]
    const numbers = []
    pattern.forEach(number => {
      if (list.includes(number)) {
        numbers.push(number)
      }
    })
    if (numbers.length === 3) {
      return 'win'
    }
  }
  draw()
}

function announceWinner(input, list, player) {
  const id = Number(input.id)
  listxo.push(id)
  list.push(id)
  const winner = checkIfWin(list)
  if (winner === 'win') {
    ShowResult(`${player}`)
    turn.textContent = `Winner`
    showButtons()
    return;
  } else {
    draw()
  }
}

function draw() {
  listxo.sort((a, b) => a - b)
  if (allNumbers.length === listxo.length) {
    turn.textContent = `Game Draw`
    ShowResult('XO')
    showButtons()
    return
  }
}

function clearBoard() {
  box.forEach(input =>
    input.textContent = ''
  )
  turn.textContent = `P1's turn`
  winnerBox = 'non'
  listo = []
  listx = []
  listxo = []
  player = 1
}

function hideButtons() {
  restartButton.style.display = 'none'
  menuButton.style.display = 'none'
}

function showButtons() {
  restartButton.style.display = 'block'
  menuButton.style.display = 'block'
}


function ShowResult(result) {
  const grid = document.querySelector('.grid')
  const textBox = document.querySelector('.text-box')
  grid.style.display = 'none'
  textBox.style.display = 'flex'
  textBox.textContent = result
}

function hideResult() {
  const grid = document.querySelector('.grid')
  const textBox = document.querySelector('.text-box')
  grid.style.display = 'grid'
  textBox.style.display = 'none'
  textBox.textContent = ''
}