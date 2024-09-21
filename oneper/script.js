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
let listx = []
let listo = []
let listxo = []

onePlayer()

menuButton.addEventListener('click', function () {
  hideResult()
  hideButtons()
  menu.style.display = 'flex'
  clearBoard()
})


restartButton.addEventListener('click', function () {
  hideResult()
  hideButtons()
  clearBoard()
})

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
    return "win";
  } else {
    draw()
  }
}

function draw() {
  listxo.sort((a, b) => a - b)
  if (allNumbers.length === listxo.length) {
    turn.textContent = `Game Draw`
    ShowResult(`XO`)
    showButtons()
    return
  }
}

function clearBoard() {
  box.forEach(input =>
    input.textContent = ''
  )
  turn.textContent = ``
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

turn.textContent = ``
function onePlayer() {
  box.forEach(input => {
    input.addEventListener('click', function () {
      const displayStyle = window.getComputedStyle(restartButton).display;
      const value = input.textContent
      if (displayStyle === "none") {

        if (value === '') {
          const user = announceWinner(input, listx, `X`)
          input.style.color = '#B88A77'
          input.textContent = 'X'
          if (user === "win") return;
          computerTurn(listo)
          const computer = checkIfWin(listo)
          if (computer === 'win') {
            ShowResult(`O`)
            turn.textContent = `Winner`
            showButtons()
          } else {
            draw()
          }
        }


      }
    })
  })
}

function computerTurn(list) {
  const res = implementO(list)
  if (res) {
    return
  }
  const response = implementO(listx, 'px')
  if (response) {
    return
  }
  const id = choseRandom()
  console.log('id: ', id)
  const oDive = document.getElementById(`${id}`)
  if (oDive.textContent !== 'O') {
    list.push(id)
    listxo.push(id)
    oDive.style.color = '#40E0D0'
    oDive.textContent = 'O'
  }
}

function implementO(list) {
  for (i = 0; i < patterns.length; i++) {
    let pattern = patterns[i]
    const numbers = []
    pattern.forEach(number => {
      if (list.includes(number)) {
        numbers.push(number)
      }
    })
    if (numbers.length === 2) {
      const id = findItem(numbers, pattern)
      if (!listx.includes(id)) {
        const oDive = document.getElementById(`${id}`)
        if (oDive.textContent !== 'O') {
          console.log(id)
          listo.push(id)
          listxo.push(id)
          oDive.style.color = '#40E0D0'
          oDive.textContent = 'O'
          return true
        }
      }
    }
  }
}

function choseRandom() {
  const temp = [...allNumbers]
  listxo.forEach(number => {
    const index = temp.indexOf(number)
    temp.splice(index, 1)
  })
  const randomIndex = Math.floor(Math.random() * temp.length);
  const randomItem = temp[randomIndex]
  return randomItem
}

function findItem(numbers, list) {
  let n = 0;
  list.forEach(item => {
    if (!numbers.includes(item)) {
      console.log('yes', item)
      n = item;
    }
  })
  return n;
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