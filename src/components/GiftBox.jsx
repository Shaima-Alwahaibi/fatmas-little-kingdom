import { useEffect, useRef, useState } from 'react'
import { gift } from '../data/content'
import { MatchaArt } from './Art'
import './Art.css'
import './GiftBox.css'

function spawnConfetti(canvas) {
  const ctx = canvas.getContext('2d')
  if (!ctx) return () => {}

  const colors = ['#e07a9a', '#9b7ec8', '#cfe8c9', '#e8c47a', '#f7d3b8']
  const pieces = Array.from({ length: 48 }, () => ({
    x: Math.random() * canvas.width,
    y: -12 - Math.random() * 40,
    r: 3 + Math.random() * 4,
    vy: 2 + Math.random() * 2.4,
    vx: -1.2 + Math.random() * 2.4,
    color: colors[Math.floor(Math.random() * colors.length)],
  }))

  let frame = 0
  let raf = 0

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    pieces.forEach((piece) => {
      piece.x += piece.vx
      piece.y += piece.vy
      ctx.fillStyle = piece.color
      ctx.beginPath()
      ctx.arc(piece.x, piece.y, piece.r, 0, Math.PI * 2)
      ctx.fill()
    })
    frame += 1
    if (frame < 110) {
      raf = window.requestAnimationFrame(draw)
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  }

  raf = window.requestAnimationFrame(draw)
  return () => window.cancelAnimationFrame(raf)
}

function GiftBox() {
  const [open, setOpen] = useState(false)
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!open || !canvasRef.current) return undefined
    const canvas = canvasRef.current
    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    const stop = spawnConfetti(canvas)
    return stop
  }, [open])

  return (
    <section className="section gift" id="gift" aria-labelledby="gift-title">
      <p className="eyebrow">Matcha</p>
      <h2 id="gift-title">{gift.heading}</h2>
      <p className="lede">{gift.hint}</p>

      <div className="gift__stage">
        <canvas className="gift__confetti" ref={canvasRef} aria-hidden="true" />
        <button
          type="button"
          className={`gift-box${open ? ' is-open' : ''}`}
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="gift-reveal"
          aria-label={open ? gift.ariaOpen : gift.ariaClosed}
        >
          <span className="gift-box__lid" aria-hidden="true" />
          <span className="gift-box__bow" aria-hidden="true" />
          <span className="gift-box__body" aria-hidden="true">
            {open && <MatchaArt />}
          </span>
        </button>
      </div>

      <div className="gift__reveal" id="gift-reveal" aria-live="polite">
        {open ? (
          <>
            <p>{gift.unlocked}</p>
            <p className="gift__finale">{gift.finale}</p>
          </>
        ) : (
          <p>The box is sealed with sister magic. Open it when you are ready.</p>
        )}
      </div>
    </section>
  )
}

export default GiftBox
