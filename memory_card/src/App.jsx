import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Board from './components/Board'
import services from './utilis/services'
import helper from './utilis/helper'

function App() {
  const numCards = 16
  const [cards, setCards] = useState([])
  const [score, setScore] = useState(0)

  useEffect(() => {
    const preprocessing = async () => {
      const data = await services.get()
      const randomArr = helper.randomPick(numCards, data.length)
      const cardsArr = []
      for (let i of randomArr) {
        const elementPicked = data[i]
        const elementObject = {
          id: i,
          image_url: elementPicked.image_url,
          clicked: false
        }
        cardsArr.push(elementObject)
      }
      setCards(cardsArr)
    }
    preprocessing()
  }, [])

  const handleCardClick = (id) => {
    const cardsCopy = Array.from(cards)
    const targetCard = cardsCopy.find(eachCard => eachCard.id === id)
    if (targetCard.clicked) {
      console.log('you lose, score: ', score)
      setScore(0)
    } else {
      const newScore = score + 1
      if (newScore === numCards) {
        console.log('you win')
        setScore(0)
      } else {
        console.log(newScore)
        targetCard.clicked = true 
        setScore(newScore)
        setCards(cardsCopy)
      }
    }
  }

  return (
    <>
      <Header />
      <div className='content'>
        <Board cards={cards} handleCardClick={handleCardClick} />
      </div>
      <Footer />
    </>
  )
}

export default App
