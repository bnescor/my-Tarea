import React from 'react'
import './study.css'
import cards1 from './card1.png'
import cards2 from './card2.png'

const Study = () => {
  return (
    <article className='study'>
        <h2>Estudios</h2>
        <div className='study-box'>
        <div className='card1'>
            <img src={cards1} alt="#1" />
            <h2>Tec de Monterey</h2>
            <p>2014-2020</p>
            <p>Licenciatura en diseño industrial</p>
        </div>
        <div className='card2'>
            <img src={cards2} alt="#2" />
            <h2>Academlo</h2>
            <p>2020-2021</p>
            <p>Programador full stack</p>
        </div>
        </div>
    </article>
  )
}

export default Study