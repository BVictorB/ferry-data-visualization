import { useState } from 'react'
import Ferry from './components/Ferry'
import Sidebar from './components/Sidebar'
import Overlay from './components/Overlay'
import Platform from './components/Platform'
import Waves from './components/Waves'
import Footer from './components/Footer'
import DisableMobile from './components/DisableMobile'
import Displayoverlay from './components/Displayoverlay'

const App = () => {
  const [selectedFerry, setSelectedFerry] = useState(null)
  const [showOverlay, setShowOverlay] = useState(true)

  return (
    <>
      <Overlay showOverlay={showOverlay} setShowOverlay={setShowOverlay}/>
      <Displayoverlay showOverlay={showOverlay} setShowOverlay={setShowOverlay}/>
      <Waves />
      <Platform/>
      <Ferry selectedFerry={selectedFerry} />
      <Sidebar selectedFerry={selectedFerry} setSelectedFerry={setSelectedFerry}/>
      <Footer />
      <DisableMobile />
    </>
  )
}

export default App