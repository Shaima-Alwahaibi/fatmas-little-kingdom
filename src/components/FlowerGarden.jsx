import { useState } from 'react'
import { flowers } from '../data/content'
import './FlowerGarden.css'

function FlowerGarden() {
  const [openId, setOpenId] = useState(null)
  const openFlower = flowers.find((flower) => flower.id === openId)

  return (
    <section className="section garden" id="garden" aria-labelledby="garden-title">
      <p className="eyebrow">Tap a bloom</p>
      <h2 id="garden-title">Interactive flower garden</h2>
      <p className="lede">
        Five flowers, five wishes. Each one is waiting for Princess Toomi to open it.
      </p>

      <div className="garden__row">
        {flowers.map((flower) => {
          const bloomed = openId === flower.id
          return (
            <button
              key={flower.id}
              type="button"
              className={`flower flower--${flower.hue}${bloomed ? ' is-bloomed' : ''}`}
              onClick={() => setOpenId(flower.id)}
              aria-expanded={bloomed}
              aria-controls="garden-wish"
            >
              <span className="flower__visual" aria-hidden="true">
                <span className="flower__petal" />
                <span className="flower__petal" />
                <span className="flower__petal" />
                <span className="flower__petal" />
                <span className="flower__center" />
                <span className="flower__stem" />
              </span>
              <span className="flower__name">{flower.name}</span>
            </button>
          )
        })}
      </div>

      <div className="garden__wish" id="garden-wish" aria-live="polite">
        {openFlower ? (
          <p>
            <strong>{openFlower.name}: </strong>
            {openFlower.wish}
          </p>
        ) : (
          <p>Choose a flower to reveal a birthday wish.</p>
        )}
      </div>
    </section>
  )
}

export default FlowerGarden
