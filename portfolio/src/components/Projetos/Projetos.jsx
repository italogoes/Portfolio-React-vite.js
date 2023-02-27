import React from 'react'
import '../../assets/styles/Projetos/Projetos.sass'
import pizza from '../../assets/img/pizza.png'
import stride from '../../assets/img/techstride.png'
import secreto from '../../assets/img/secreto.png'
import tare from '../../assets/img/tare.png'
import {BsLink45Deg} from 'react-icons/bs'

const Projetos = () => {
  return (
    <>
        <div className='texto-projetos'>
            <h2>Projetos</h2>
        </div>

        <div className='grid-projetos'>
            <div className='single-projeto'>
                <img src={pizza} alt="" />
                <h3>Delivery de Pizza</h3>
                <p>Nesse projeto desenvolvi um sistema que simula o pedido de uma pizza, podendo selecionar a quantidade, sabor, tamanho e preço</p>
                <p className='tech'>Tecnologias: Html, Css, Javascript</p>
                <a href="https://pizzaedelivery.netlify.app/" target="_blank"><BsLink45Deg/>Visualizar Projeto</a>
            </div>

            <div className='single-projeto'>
            <img src={stride} alt="" />
                <h3>Agência Tech Stride</h3>
                <p>Desenvolvimento do site da empresa Tech Stride para ampliar a sua presença online</p>
                <p className='tech'>Tecnologias: Html, Css, JavaScript, React, Sass</p>
                <a href="https://techstride.netlify.app/" target="_blank"><BsLink45Deg/>Visualizar Projeto</a>
            </div>

            <div className='single-projeto'>
            <img src={secreto} alt="" />
                <h3>Mundo Secreto</h3>
                <p>Este é um jogo onde o participante tem três tentativas para descobrir a palavra correta</p>
                <p className='tech'>Tecnologias: JavaScript, React, Sass</p>
                <a href="https://mundosecreto.netlify.app/" target="_blank"><BsLink45Deg/>Visualizar Projeto</a>
            </div>

            <div className='single-projeto'>
            <img src={tare} alt="" />
                <h3>Consultare</h3>
                <p>Site desenvolvido para um dos nosso principais clientes mostrar a sua marca para o mundo</p>
                <p className='tech'>Tecnologias: Html, Css, JavaScript, WordPress</p>
                <a href="https://consultare.pushecommerce.com.br/" target="_blank"><BsLink45Deg/>Visualizar Projeto</a>
            </div>
        </div>
    </>
  )
}

export default Projetos