import React from 'react'
import PropTypes from 'prop-types'

const Cards = ({title, teacher, image, price}) => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src={image} alt={title} />
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">
        {title} 
      </h3>
      <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
          <div className="card__avatar s-mr-1">
            <div className="circle img-container">
              <img src="https://ux.ed.team/img/profesor.jpg" alt="profesor-img" />
            </div>
          </div>
          <span className="small">{teacher}</span>
        </div>
      </div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="https://ed.team">$ {price}USD</a>
      </div>
    </div>
  </article>
)

Cards.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  teacher: PropTypes.string
}

Cards.defaultProps = {
  title: "No existe titulo",
  image: "https://i.pinimg.com/originals/20/24/9f/20249f25c0a12f94fa119f5871d25f2c.jpg",
  price: "--",
  teacher: "No hay profesor"
}

export default Cards 