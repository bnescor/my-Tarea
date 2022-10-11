import React from 'react'
import './ability.css'

const Ability = () => {
    return (
        <article className='ability'>
            <h2>Mis habilidades</h2>
            <div className='ability__container'>
                <div className='ability__web-design'>
                    <div className='title1'>
                        <h2>Web design</h2>
                        <p>80%</p>
                    </div>
                    <div className='barra__web-design'>
                        <div className='barra__web-design-div-color' ></div>
                    </div>
                </div>
                <div className='ability__interaction-design'>
                    <div className='title2'>
                        <h2>Interaction-design</h2>
                        <p>95%</p>
                    </div>
                    <div className='barra__interaction-design'>
                        <div className='barra__interaction-design-div-color' >

                        </div>
                    </div>
                </div>
                <div className='ability__ux'>
                    <div className='title3'>
                        <h2>Ux</h2>
                        <p>80%</p>
                    </div>
                    <div className='barra__ux'>
                        <div className='barra__ux-div-color' ></div>

                    </div>
                </div>
                <div className='ability__frameworks'>
                    <div className='title4'>
                        <h2>Frameworks</h2>
                        <p>75%</p>
                    </div>
                    <div className='barra__frameworks'>
                        <div className='barra__frameworks-div-color' ></div>

                    </div>
                </div>
            </div>
        </article>
    )
}

export default Ability