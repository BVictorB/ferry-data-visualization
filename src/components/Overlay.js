import people from '../img/people.png'

const Overlay = ({ showOverlay, setShowOverlay }) => {
    if (showOverlay) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }

    return (
        <div className={showOverlay ? "m-overlay" : "m-overlay m-overlay--hide"}>
            <div className="m-overlay__container">
                <h1>MASK ON,<br></br> F*CK IT MASK OFF</h1>
                <h2>A <i>ferry</i> important data visualization about ferries in Amsterdam</h2>
                <img src={people} alt=""/>
                <p>(One in five people doesn't wear a face mask when leaving the ferry)</p>
                <button onClick={() => setShowOverlay(false)} className="m-overlay__button">Show me the data!</button>
            </div>
        </div>
    )
}

export default Overlay