import React from 'react'
import './aboutme.css'

const Aboutme = () => {
  return (
    <article className='aboutme'>
        <h2 className='aboutme-h2'>Acerca de mi</h2>
        <div className='aboutme__div'>
        <p className='aboutme__div-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto odio maiores temporibus libero, mollitia eveniet. Ipsa deleniti doloremque cum quidem sequi quis officia! Ipsam, nemo facere officiis necessitatibus non exercitationem!</p>
        </div>
        <div className='button-div'>
        <button className='download'> <i className='bx bx-down-arrow-alt'></i>Download CV</button>

        </div>

    </article>
  )
}

export default Aboutme