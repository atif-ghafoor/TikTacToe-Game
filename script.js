// const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const patterns = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9],
//   [1, 5, 9],
//   [3, 5, 7]
// ]

// const box = document.querySelectorAll('.input')
// const restartButton = document.querySelector('#restart')
// const menuButton = document.getElementById('menu-button')
// const turn = document.getElementById('turn')
// const onePer = document.getElementById('one-person')
// const twoPer = document.getElementById('two-person')
// const menu = document.querySelector('.modal-players')
// let winnerBox = 'non'
// let player = 1
// let listx = []
// let listo = []
// let listxo = []

// menuButton.addEventListener('click', function () {
//   hideButtons()
//   menu.style.display = 'flex'
//   clearBoard()
// })

// onePer.addEventListener('click', function () {
//   onePlayer()
//   menu.style.display = 'none'
// })

// twoPer.addEventListener('click', function () {
//   twoPerson()
//   menu.style.display = 'none'
// })

// function twoPerson() {
//   box.forEach(input => {
//     input.addEventListener('click', function () {
//       const displayStyle = window.getComputedStyle(restartButton).display;
//       const value = input.textContent
//       if (displayStyle === "none") {

//         if (player === 1) {
//           if (value === '') {
//             changePlayer()
//             announceWinner(input, listx, `P1s's`)
//             input.style.color = '#B88A77'
//             input.textContent = 'X'
//           }
//         } else {
//           if (value === '') {
//             changePlayer()
//             announceWinner(input, listo, `P2s's`)
//             input.style.color = '#40E0D0'
//             input.textContent = 'o'
//           }
//         }
//       }
//     })
//   })

// }
// restartButton.addEventListener('click', function () {
//   hideButtons()
//   clearBoard()
// })


// function changePlayer() {
//   if (player === 1) {
//     turn.textContent = `P2's turn`
//     player = 2
//   } else {
//     turn.textContent = `P1's turn`
//     player = 1
//   }
// }

// function checkIfWin(list) {
//   for (i = 0; i < patterns.length; i++) {
//     let pattern = patterns[i]
//     const numbers = []
//     pattern.forEach(number => {
//       if (list.includes(number)) {
//         numbers.push(number)
//       }
//     })
//     if (numbers.length === 3) {
//       return 'win'
//     }
//   }
//   draw()
// }

// function announceWinner(input, list, player) {
//   const id = Number(input.id)
//   listxo.push(id)
//   list.push(id)
//   const winner = checkIfWin(list)
//   if (winner === 'win') {
//     turn.textContent = `${player} win`
//     showButtons()
//     winnerBox = 'win'
//     return;
//   } else {
//     draw()
//   }
// }

// function draw() {
//   listxo.sort((a, b) => a - b)
//   if (allNumbers.length === listxo.length) {
//     turn.textContent = `Game Draw`
//     showButtons()
//     winnerBox = 'draw'
//     return
//   }
// }

// function clearBoard() {
//   box.forEach(input =>
//     input.textContent = ''
//   )
//   turn.textContent = `P2's turn`
//   winnerBox = 'non'
//   listo = []
//   listx = []
//   listxo = []
//   player = 1
// }

// function hideButtons() {
//   restartButton.style.display = 'none'
//   menuButton.style.display = 'none'
// }

// function showButtons() {
//   restartButton.style.display = 'block'
//   menuButton.style.display = 'block'
// }

// turn.textContent = ``
// function onePlayer() {
//   box.forEach(input => {
//     input.addEventListener('click', function () {
//       const displayStyle = window.getComputedStyle(restartButton).display;
//       const value = input.textContent
//       if (displayStyle === "none") {

//         if (value === '') {
//           announceWinner(input, listx, `P1s's`)
//           input.style.color = '#B88A77'
//           input.textContent = 'X'
//         }
//         computerTurn(listo, `P2s's`)
//         const computer = checkIfWin(listo)
//         if (computer === 'win') {
//           turn.textContent = `Computer's Win`
//           showButtons()
//         } else {
//           draw()
//         }


//       }
//     })
//   })
// }

// function computerTurn(list, player) {
//   const res = implementO(list, player)
//   if (res) {
//     return
//   }
//   const response = implementO(listx, 'px')
//   if (response) {
//     return
//   }
//   const id = choseRandom()
//   console.log('id: ', id)
//   const oDive = document.getElementById(`${id}`)
//   if (oDive.textContent !== 'O') {
//     list.push(id)
//     listxo.push(id)
//     oDive.style.color = '#40E0D0'
//     oDive.textContent = 'O'
//   }
// }

// function implementO(list, player) {
//   for (i = 0; i < patterns.length; i++) {
//     let pattern = patterns[i]
//     const numbers = []
//     pattern.forEach(number => {
//       if (list.includes(number)) {
//         numbers.push(number)
//       }
//     })
//     if (numbers.length === 2) {
//       const id = findItem(numbers, pattern)
//       if (!listx.includes(id)) {
//         const oDive = document.getElementById(`${id}`)
//         if (oDive.textContent !== 'O') {
//           console.log(id)
//           listo.push(id)
//           listxo.push(id)
//           oDive.style.color = '#40E0D0'
//           oDive.textContent = 'O'
//           return true
//         }
//       }
//     }
//   }
// }

// function choseRandom() {
//   const temp = [...allNumbers]
//   listxo.forEach(number => {
//     const index = temp.indexOf(number)
//     temp.splice(index, 1)
//   })
//   const randomIndex = Math.floor(Math.random() * temp.length);
//   const randomItem = temp[randomIndex]
//   return randomItem
// }

// function findItem(numbers, list) {
//   let n = 0;
//   list.forEach(item => {
//     if (!numbers.includes(item)) {
//       console.log('yes', item)
//       n = item;
//     }
//   })
//   return n;
// }