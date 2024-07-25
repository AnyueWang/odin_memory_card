const randomPick = (num, total) => {
  const arrTotal = Array.from(Array(total).keys())
  const output = []
  for (let i = 0; i < num; i++) {
    const randomIndex = Math.floor(Math.random() * arrTotal.length)
    output.push(arrTotal[randomIndex])
    arrTotal.splice(randomIndex, 1)
  }
  return output
}

export default {
  randomPick
}