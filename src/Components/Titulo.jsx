import React from 'react'
import './titulo.css'

const Titulo = () => {

  return (
    <div className='title'>
      <div className='Nombre'>
        <h2 className='color__h2-1'>Soy</h2>
        <h2 className='color__h2-2'>Brian Escorcia</h2>
      </div>
      <div className='Paragre'>
        <p className='Paragre__p'>Creo, diseño y desarrollo para darle el valor a tu producto.</p>
      </div>
      <div className='foto'>
      </div>
      <div className='box-icono'>
        <div className='box1'>
          <div className='box1-div'><i className='bx bxl-linkedin' ></i></div>
        </div>
        <div className='box2'>
          <div className='box2-div'><i className='bx bxl-twitter' ></i></div>
        </div>
        <div className='box3'>
          <div className='box3-div'><i className='bx bxl-instagram-alt'></i></div>
        </div>
      </div>
      <div className='box-experient1'>
        <h2 className='box-experient1-h2'>UI Deseigner</h2>
        <p className='box-experient1-p'> 4 Años</p>
      </div>
      <div className='box-experient2'>
        <h2 className='box-experient2-h2'>Frontend Dev</h2>
        <p className='box-experient2-p'> 1 Años</p>
      </div>
    </div>
  )
}

export default Titulo