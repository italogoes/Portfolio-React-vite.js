import React, { useState } from 'react'

//Estilos
import '../../assets/styles/Header/Header.sass'

//Icons
import { BsSun } from "react-icons/bs";
import { BsMoonStarsFill } from "react-icons/bs";

//Paginas
import Intro from "../Intro/Intro"
import Sobre from '../Sobre/Sobre';
import Experiencias from '../Experiencias/Experiencias';
import Habilidades from '../Habilidades/Habilidades';
import Projetos from '../Projetos/Projetos';
import Footer from '../Footer/Footer';

const Header = () => {
    const [darkMode, setDarkMode] = useState(false)

    const handleToggleDarkMode  = () => {
        setDarkMode(!darkMode)
        localStorage.setItem('mode',darkMode)
    }

    function pegaItem(){
        localStorage.getItem(mode)                  
    }
    
    return (
        <div onLoad={pegaItem}>
            <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
                <div className='container'>
                    <div className='topo'>
                        <div className='logo'>
                            <h1>Portfólio</h1>
                        </div>

                        <div className='menu-desktop'>
                            <ul className='menu'>
                                <li><a href="" className={`App ${darkMode ? 'dark-mode' : ''}`}>Sobre Mim</a></li>
                                <li><a href="" className={`App ${darkMode ? 'dark-mode' : ''}`}>Experiências</a></li>
                                <li><a href="" className={`App ${darkMode ? 'dark-mode' : ''}`}>Projetos</a></li>
                                <li><a href="" className={`App ${darkMode ? 'dark-mode' : ''}`}>Habilidades</a></li>
                                <button className='btn-mudacor' onClick={handleToggleDarkMode}>
                                    {darkMode ? <BsSun style={{color: '#fff', fontSize: '25px'}}/> : <BsMoonStarsFill style={{fontSize: '25px'}}/>}
                                </button>
                            </ul>
                        </div>
                    </div>

                    <Intro/>
                    <Sobre/>
                    <Experiencias/>
                    <Projetos/>
                    <Habilidades/>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Header