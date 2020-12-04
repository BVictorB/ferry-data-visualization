import victor from '../img/victor.png'
import sam from '../img/sam.png'
import gosro from '../img/gosro.png'
import globe from '../img/globe.png'
import linkedin from '../img/linkedin.png'
import github from '../img/github.png'

const Footer = () => {
    return (
        <div className="m-footer">
          <h2>Created in a hurry with love by:</h2>
          <div className="m-footer__container">
            <div>
              <img className="m-footer__image" src={sam} alt=""/>
              <h3>Sam Lansdaal</h3>
              <h4>Visual & animation artist</h4>
              <a rel="noreferrer" target="_blank" href="https://samlansdaal.myportfolio.com/"><img className="m-footer__icon" src={globe} alt=""/></a>
            </div>
            <div>
              <img className="m-footer__image" src={victor} alt=""/>
              <h3>Victor Boucher</h3>
              <h4>Frontend developer & project management</h4>
              <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/victor-boucher-18267813b/"><img className="m-footer__icon" src={linkedin} alt=""/></a>
              <a rel="noreferrer" target="_blank" href="https://github.com/BVictorB"><img className="m-footer__icon" src={github} alt=""/></a>
            </div>
            <div>
              <img className="m-footer__image" src={gosro} alt=""/>
              <h3>Gosro Poorheydar</h3>
              <h4>Visual artist & storyteller</h4>
              <a rel="noreferrer" target="_blank" href="https://gosro-poorheydar.webnode.nl/"><img className="m-footer__icon" src={globe} alt=""/></a>
            </div>
          </div>
        </div>
    )
}

export default Footer