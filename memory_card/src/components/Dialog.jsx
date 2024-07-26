const Dialog = ({result, onClick}) => {
  return (
    <dialog className='result-dialog' open={result !== null}>
      <div>
        {result ? 'Congratulations, you win!' : 'Sorry, you lose!'}
        <br />
        Press &quot;OK&quot; to reset the game.
      </div>
      <button className='btn-dialog-ok' onClick={onClick}>OK</button>
    </dialog>
  )
}

export default Dialog