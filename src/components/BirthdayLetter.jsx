import { useEffect, useMemo, useState } from 'react'
import { letter } from '../data/content'
import './BirthdayLetter.css'

function BirthdayLetter() {
  const prefersReducedMotion = useMemo(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    [],
  )
  const [shown, setShown] = useState(prefersReducedMotion ? letter.body : '')

  useEffect(() => {
    if (prefersReducedMotion) {
      setShown(letter.body)
      return undefined
    }

    let index = 0
    const timer = window.setInterval(() => {
      index += 1
      setShown(letter.body.slice(0, index))
      if (index >= letter.body.length) {
        window.clearInterval(timer)
      }
    }, 18)

    return () => window.clearInterval(timer)
  }, [prefersReducedMotion])

  const done = shown.length === letter.body.length

  return (
    <section className="section letter" id="letter" aria-labelledby="letter-title">
      <p className="eyebrow">From Shaima, with extra love</p>
      <h2 id="letter-title">{letter.heading}</h2>
      <p className="letter__paper" aria-live="polite">
        {shown}
        {!done && <span className="caret" aria-hidden="true" />}
      </p>
      <p className="letter__sign">{letter.from}</p>
    </section>
  )
}

export default BirthdayLetter
