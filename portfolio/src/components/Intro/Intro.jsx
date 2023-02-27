import React, { useState } from 'react'
import '../../assets/styles/Intro/Intro.sass'
import '../../assets/styles/Intro/digitando.css'
import imagem from '../../assets/img/programming.png'
import 'animate.css';

const Intro = (props) => {
  return (
    <>
        <div className='apresentacao-e-img animate__animated animate__fadeInLeft'>
            <div className='apresentacao'>
                <h1 className='message'>Olá, eu sou o</h1>
                <h1 className='message-animate'>Ítalo Góes</h1>
                <p className='oq-sou'>Desenvolvedor Full Stack</p>
                <div className='btns-curriculo-contato'>
                    <a className='btn-curriculo' href="">Download CVvvvvvvv</a>
                    <a className='btn-contato' href="">Entrar em contato</a>
                </div>
            </div>

            <div className='apresentacao-img headline'>
                <img src={imagem} alt="eu" />
            </div>
        </div>
    </>
  )
}

export default Intro