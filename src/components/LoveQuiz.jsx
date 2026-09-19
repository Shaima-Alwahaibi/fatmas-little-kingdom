import { useState } from 'react'
import { quiz } from '../data/content'
import './LoveQuiz.css'

function LoveQuiz() {
  const [choice, setChoice] = useState(null)
  const selected = quiz.options.find((option) => option.id === choice)

  return (
    <section className="section quiz" id="quiz" aria-labelledby="quiz-title">
      <p className="eyebrow">Choose carefully</p>
      <h2 id="quiz-title">{quiz.heading}</h2>
      <p className="quiz__question">{quiz.question}</p>

      <div className="quiz__options" role="group" aria-label="Quiz answers">
        {quiz.options.map((option) => (
          <button
            key={option.id}
            type="button"
            className={`quiz__option${choice === option.id ? ' is-selected' : ''}`}
            onClick={() => setChoice(option.id)}
            aria-pressed={choice === option.id}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="quiz__result" aria-live="polite">
        {selected ? <p>{selected.response}</p> : <p>Pick one. Shaima is watching.</p>}
      </div>

      <button
        type="button"
        className="ghost-btn"
        onClick={() => setChoice(null)}
        disabled={!choice}
      >
        {quiz.resetLabel}
      </button>
    </section>
  )
}

export default LoveQuiz
