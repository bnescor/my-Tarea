import React from 'react'
import './contacto.css'

const Contacto = () => {
  return (
    <article className='contacto'>
        <h2>Contacto</h2>
        <div className='container-contacto'>
            <div className='telefono'>
            <i className='bx bxs-phone' ></i>
            <p className='etiqueta'> <b>Numero de celular</b> </p>
            <p className='informatio'>3022856682</p>
            </div>
            <div className='email'>
            <i className='bx bxs-envelope' ></i>
            <p className='etiqueta'> <b> Email</b></p>
            <p className='informatio'>Naziegonzale@gmail.com</p>
            </div>
        </div>
    </article>
  )
}

export default Contacto