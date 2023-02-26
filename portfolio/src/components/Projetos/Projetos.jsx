import React from 'react'
import '../../assets/styles/Projetos/Projetos.sass'
import pizza from '../../assets/img/pizza.png'
import stride from '../../assets/img/techstride.png'
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
                <a href=""><BsLink45Deg/>Visualizar Projeto</a>
            </div>

            <div className='single-projeto'>
            <img src="" alt="" />
                <h3>Delivery de Pizza</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolorem magnam odio expedita, quam eligendi blanditiis quas ut iure! Eos, mollitia. Aliquid, dicta quis eveniet recusandae voluptatum corrupti nulla atque.</p>
                <p className='tech'>Tecnologias: Html, Css</p>
                <a href=""><BsLink45Deg/>Visualizar Projeto</a>
            </div>

            <div className='single-projeto'>
            <img src="" alt="" />
                <h3>Delivery de Pizza</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolorem magnam odio expedita, quam eligendi blanditiis quas ut iure! Eos, mollitia. Aliquid, dicta quis eveniet recusandae voluptatum corrupti nulla atque.</p>
                <p className='tech'>Tecnologias: Html, Css</p>
                <a href=""><BsLink45Deg/>Visualizar Projeto</a>
            </div>
            
        </div>
    </>
  )
}

export default Projetos