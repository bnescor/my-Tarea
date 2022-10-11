import React from 'react'
import './experience.css'
import icono1 from './Icono1.png'
import icono2 from './Icono2.png'

const Experience = () => {
    return (
        <article className='experience'>
            <h2>Experience</h2>
            <div className='experience-container'>
                <div className='container-button'>
                    <button className='container-button-bx'>
                    <i className='bx bx-chevron-left'></i>
                        </button></div>
                <div className='experience-cards'>
                    <div className='experience-cards1' >
                        <img src={icono1} alt="#4" />
                        <p>Interactive deseign</p>
                        <p><b>1 año</b> </p>
                    </div>
                    <div className='experience-cards2'>
                        <img src={icono2} alt="#5" />
                        <p>Interactive deseign</p>
                        <p><b>1 año</b> </p>
                    </div>
                </div>
                <div className='container-button'>
                    <button className='container-button-bx'>
                    <i className='bx bx-chevron-right'></i></button></div>

            </div>
        </article>
    )
}

export default Experience