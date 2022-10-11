import React from 'react'
import './portfolio.css'


const Portfolio = () => {
  return (
    <article className='portafolio'>
        <h2>Mi fortafolio</h2>
        <div className='seleccion'>
            <p className='seleccion-1'>UI deseign</p>
            <p>Web development</p>
        </div>
        <div className='portafolio-foto'>
            <div className='vista1'>
            </div>
            <div className='vista2'>
                <div className='vista2-1'></div>
                <div className='vista2-2'></div>
            </div>
            <div className='vista3'></div>
        </div>
    </article>
  )
}

export default Portfolio