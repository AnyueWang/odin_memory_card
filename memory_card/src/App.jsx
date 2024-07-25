import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import services from './services'

function App() {
  const numCards = 16
  const [cards, setCards] = useState([])

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

  useEffect(() => {
    const preprocessing = async () => {
      const data = await services.get()
      const randomArr = randomPick(numCards, data.length)
      const cardsArr = []
      for (let i in randomArr) {
        const elementPicked = data[i]
        const elementObject = {
          id: i,
          image_url: elementPicked.image_url
        }
        cardsArr.push(elementObject)
      }
      setCards(cardsArr)
    }
    preprocessing()
  }, [])

  console.log(cards)

  return (
    <>
      <Header />
      <div>

      </div>
      <Footer />
    </>
  )
}

export default App
