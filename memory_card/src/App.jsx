import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Board from './components/Board'
import services from './utilis/services'
import helper from './utilis/helper'
import Dialog from './components/Dialog'

function App() {
  const numCards = 16
  const [cards, setCards] = useState([])
  const [score, setScore] = useState(0)
  const [reset, setReset] = useState(false) //when toggling reset, game is reset. (the boolean value here means nothing)
  const [result, setResult] = useState(null)

  const toggleReset = () => setReset(!reset)

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
      setScore(0)
      setResult(null)
    }
    preprocessing()
  }, [reset])

  useEffect(() => {
    if (cards.length) {
      const randomArr = helper.randomPick(numCards, numCards)
      const cardsNew = []
      for (let i of randomArr) {
        cardsNew.push(cards[i])
      }
      setCards(cardsNew)
    }
  }, [score])

  const handleCardClick = (id) => {
    if (result!==null) return
    const cardsCopy = Array.from(cards)
    const targetCard = cardsCopy.find(eachCard => eachCard.id === id)
    if (targetCard.clicked) {
      console.log('you lose, score: ', score)
      setScore(0)
      setResult(false)
    } else {
      const newScore = score + 1
      if (newScore === numCards) {
        console.log('you win')
        setScore(0)
        setResult(true)
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
        <Dialog result={result} onClick={toggleReset} />
      </div>
      <Footer />
    </>
  )
}

export default App
