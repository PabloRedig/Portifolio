import React from 'react'
import { Link } from 'react-router-dom'
import ImgHome from "./Imgs/ImgHome.svg"
import style from './index.module.css'

export default function Home() {
  return (
    <>
      <div className={style.container}>
        <section className={style.BlocoTexto}>
          
            <p>Olá, me chamo PABLO sou desenvolvedor web e seja bem vindo ao meu Portifólio</p>
        
          <Link to="/Sobre"><button className={style.btnSobreMin}>Sobre Mim</button></Link>
        </section>

        <section className={style.BlocoImg}>
          <img src={ImgHome} alt="ImgProjetando" />
        </section>
      </div>
    </>
  )

}
