import React from 'react'
import Ability from './Ability'
import Aboutme from './Aboutme'
import Contacto from './Contacto'
import './cuerpo.css'
import Experience from './Experience'
import Portfolio from './Portfolio'
import Study from './Study'
import Suscripcion from './Suscripcion'

const Cuerpo = () => {
  return (
    <div className='cuerpo'>
      <Suscripcion />
      <Aboutme />
      <Study />
      <Ability />
      <Experience />
      <Portfolio />
      <Contacto />
    </div>
  )
}

export default Cuerpo