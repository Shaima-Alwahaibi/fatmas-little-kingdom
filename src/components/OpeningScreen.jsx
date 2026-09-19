import { kingdom } from '../data/content'
import './OpeningScreen.css'

const motes = [
  { id: 1, kind: 'flower', left: '8%', delay: '0s', duration: '9s' },
  { id: 2, kind: 'star', left: '18%', delay: '1.2s', duration: '7s' },
  { id: 3, kind: 'heart', left: '28%', delay: '0.4s', duration: '8.5s' },
  { id: 4, kind: 'flower', left: '40%', delay: '1.8s', duration: '10s' },
  { id: 5, kind: 'star', left: '52%', delay: '0.7s', duration: '6.8s' },
  { id: 6, kind: 'heart', left: '64%', delay: '1.4s', duration: '9.2s' },
  { id: 7, kind: 'flower', left: '74%', delay: '0.2s', duration: '8s' },
  { id: 8, kind: 'star', left: '86%', delay: '1.1s', duration: '7.4s' },
  { id: 9, kind: 'heart', left: '12%', delay: '2s', duration: '11s' },
  { id: 10, kind: 'star', left: '93%', delay: '0.9s', duration: '9.6s' },
]

function OpeningScreen({ onEnter }) {
  return (
    <section className="opening" aria-labelledby="welcome-title">
      <div className="opening__sky" aria-hidden="true">
        {motes.map((mote) => (
          <span
            key={mote.id}
            className={`mote mote--${mote.kind}`}
            style={{
              left: mote.left,
              animationDelay: mote.delay,
              animationDuration: mote.duration,
            }}
          />
        ))}
      </div>

      <div className="opening__card">
        <p className="eyebrow">A tiny palace on the internet</p>
        <h1 id="welcome-title">{kingdom.welcome}</h1>
        <p className="opening__warning" role="note">
          {kingdom.warning}
        </p>
        <button type="button" className="enter-btn" onClick={onEnter}>
          {kingdom.enterLabel}
        </button>
      </div>
    </section>
  )
}

export default OpeningScreen
