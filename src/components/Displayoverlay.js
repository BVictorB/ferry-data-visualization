const Displayoverlay = ({ showOverlay, setShowOverlay }) => {
  return (
      <div className="m-displayoverlay">
        {showOverlay ? null : <button onClick={() => setShowOverlay(true)}>Show me that juicy overlay</button>}
      </div>
  )
}

export default Displayoverlay