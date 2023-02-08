import React, { useState } from 'react'
import '../../assets/styles/Experiencias/Experiencias.sass'


function func1() {
    var exp1 = document.getElementById('sudoeste')
    var exp2 = document.getElementById('agente')
    var exp3 = document.getElementById('push')
    var btnExp1 = document.getElementById('btn-sudoeste')
    var btnExp2 = document.getElementById('btn-agente')
    var btnExp3 = document.getElementById('btn-push')

    if (exp1.style.display == 'none') {
        exp1.style.display = 'block'
        exp2.style.display = 'none'
        exp3.style.display = 'none'

        btnExp1.classList.add('efeito-blur')
        btnExp2.classList.remove('efeito-blur')
        btnExp3.classList.remove('efeito-blur')
    }
}

function func2() {
    var exp1 = document.getElementById('sudoeste')
    var exp2 = document.getElementById('agente')
    var exp3 = document.getElementById('push')
    var btnExp1 = document.getElementById('btn-sudoeste')
    var btnExp2 = document.getElementById('btn-agente')
    var btnExp3 = document.getElementById('btn-push')

    if (exp1.style.display == 'block' || exp1.style.display == 'none') {
        exp1.style.display = 'none'
        exp3.style.display = 'none'
        exp2.style.display = 'block'

        btnExp1.classList.remove('efeito-blur')
        btnExp3.classList.remove('efeito-blur')
        btnExp2.classList.add('efeito-blur')
    }
}

function func3(){
    var exp1 = document.getElementById('sudoeste')
    var exp2 = document.getElementById('agente')
    var exp3 = document.getElementById('push')
    var btnExp1 = document.getElementById('btn-sudoeste')
    var btnExp2 = document.getElementById('btn-agente')
    var btnExp3 = document.getElementById('btn-push')

    if (exp1.style.display == 'block' || exp1.style.display == 'none') {
        exp1.style.display = 'none'
        exp2.style.display = 'none'
        exp3.style.display = 'block'

        btnExp1.classList.remove('efeito-blur')
        btnExp2.classList.remove('efeito-blur')
        btnExp3.classList.add('efeito-blur')
    }
}

function handleClick(func1, func2, func3) {
    func1();
    func2();
    func3();
}

const Experiencias = () => {

    return (
        <>
            <div className='texto-experiencia'>
                <h2>Experiências</h2>
            </div>

            <div className='prt-experiencias'>
                <div className='btns-experiencias'>
                    <p id='btn-push' className='efeito-blur' onClick={() => handleClick(func3)}>Push E-commerce</p>
                    <p id='btn-agente' onClick={() => handleClick(func2)}>Agente Marketing Digital</p>
                    <p id='btn-sudoeste' onClick={() => handleClick(func1)}>Freire Informática</p>
                    
                </div>

                <div className='grid-experiencias'>
                    <div id='sudoeste' style={{ display: 'none' }}>
                        <h3>Analista Técnico de Suporte Júnior <span>Ago 2021 - Fev 2022</span></h3>
                        <p className='nome-empresa'>Freire Informática</p>
                        <p>Assitência técnica aos usuários, resposta aos chamados de suporte, diagnóstico de problemas documentação, queryes no banco de dados e treinamento aos usuários</p>
                    </div>
                    <div id='agente' style={{ display: 'none' }}>
                        <h3>Desenvolvedor Front-end <span>Fev 2022 - Jan 2023</span></h3>
                        <p className='nome-empresa'>Agente Marketing Digital</p>
                        <p>Desenvolvimento e implementação de novas funcionalidades em sites e e-commerces, alem de prestar suporte aos pedidos dos clientes recebidos diariamente</p>
                    </div>
                    <div id='push' style={{ display: 'block' }}>
                        <h3>Desenvolvedor Front-end <span>Nov 2022 - Atualmente</span></h3>
                        <p className='nome-empresa'>Push E-commerce</p>
                        <p>Desenvolvimento de sites, manutenção em codigo existente, desenvolvimento de e-commerces, melhorias nas páginas existentes e versionamento de codigo diário com o github</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Experiencias