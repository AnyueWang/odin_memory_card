const Board = ({ cards, handleCardClick }) => {
  return (
    <div className='board'>
      {cards.map((eachCard) => (
        <div className='card-container' key={eachCard.id} onClick={() => handleCardClick(eachCard.id)}>
          <img className='card' src={eachCard.image_url} />
        </div>
      ))}
    </div>
  )
}

export default Board
