import React, { useState } from 'react'
import style from '../../assets/styles/Header/Header.sass'
import { BsSun } from "react-icons/bs";
import { BsMoonStarsFill } from "react-icons/bs";
import Intro from "../Intro/Intro"

const Header = () => {
    const [darkMode, setDarkMode] = useState(false)

    const handleToggleDarkMode = () => {
        setDarkMode(!darkMode)
    }
    return (
        <div>
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
                </div>
            </div>
        </div>
    )
}

export default Header