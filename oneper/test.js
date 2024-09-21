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

let listo = [1, 9]
computerTurn()

function computerTurn() {
  for (i = 0; i < patterns.length; i++) {
    let pattern = patterns[i]
    const numbers = []
    pattern.forEach(number => {
      if (listo.includes(number)) {
        numbers.push(number)
      }
    })
    if (numbers.length === 2) {
      const id = findItem(numbers, pattern)
      // const oDive = document.getElementById(`${id}`)
      listo.push(id)
      console.log(id)
      // oDive.textContent = 'O'
      // return 'win'
    }
  }
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