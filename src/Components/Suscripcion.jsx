import React from 'react'
import './suscripcion.css'

const Suscripcion = () => {
    return (
        <article className='suscripcion'>
            <p className='suscripcion__p'>
                ¿Te gustaria colaborar juntos para crear productos increibles?</p>
            <div className='suscripcion__div'>
                <font>
                <input  className='fonts-input' type="text" placeholder='Deje tu coreo aqui...' />
                </font>
                <button className='bt-comfirt'>!Listo¡</button>
            </div>
        </article>
    )
}

export default Suscripcion