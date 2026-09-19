import { useState } from 'react'
import OpeningScreen from './components/OpeningScreen'
import KingdomNav from './components/KingdomNav'
import BirthdayLetter from './components/BirthdayLetter'
import LoveQuiz from './components/LoveQuiz'
import FlowerGarden from './components/FlowerGarden'
import GiftBox from './components/GiftBox'
import { kingdom } from './data/content'

function App() {
  const [entered, setEntered] = useState(() => {
    if (typeof window === 'undefined') return false
    return new URLSearchParams(window.location.search).has('enter')
  })

  if (!entered) {
    return <OpeningScreen onEnter={() => setEntered(true)} />
  }

  return (
    <div className="kingdom">
      <a className="skip-link" href="#letter">
        {kingdom.skipToContent}
      </a>
      <KingdomNav />
      <main>
        <BirthdayLetter />
        <LoveQuiz />
        <FlowerGarden />
        <GiftBox />
      </main>
      <footer className="kingdom-footer">Made with love by Shaima, for Toomi. Happy birthday, princess.</footer>
    </div>
  )
}

export default App
