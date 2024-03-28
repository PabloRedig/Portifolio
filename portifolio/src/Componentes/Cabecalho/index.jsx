import { Link } from 'react-router-dom'
import React from 'react'
import style from './index.module.css'
import logo from './Img/Logo.png'

export default function Cabecalho() {
    return (
        <>
            <div className={style.container}>
                <div className={style.NavMenu}>
                    <Link to="/"><img src={logo} alt="Logo..." className={style.logo} /></Link>

                    <ul className={style.nav}>
                        <li className={style.item}>
                            <Link to="/Sobre"><p>Sobre</p></Link>
                        </li>
                        <li className={style.item}>
                            <Link to="/Projeto"><p>Projeto</p></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
