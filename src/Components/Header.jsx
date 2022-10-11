import React from 'react'
import './header.css'
import Nav from './Nav'
import Titulo from './Titulo'

const Header = () => {
  return (
   <header className='main-header'>
    <Nav/>
    <Titulo/>
   </header>
  )
}

export default Header