const Explanation = ({ score, bestScore }) => {
  return (
    <div className="explanation-container">
      <div className="rule">
        Each round, you get one point by clicking the cards that have not been clicked yet, otherwise, you lose the game. To win the game, you need to click all the cards without any repetition.
      </div>
      <div className="result">
        <p>Score: {score}</p>
        <p>Best: {bestScore}</p>
      </div>
    </div>
  )
}

export default Explanation