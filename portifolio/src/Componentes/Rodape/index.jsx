import React from 'react'
import style from './index.module.css'
import LogoEmail from './Img/LogoEmail.png'

export default function Rodape() {
  return (
    <>
      <div className={style.container}>
        <div className={style.blocoContato}>
          <img src={LogoEmail} alt="logo-Email" />
          <label> pabloredigmrv@gmail.com</label>
        </div>

        <div className={style.Desenvolvido}>
          <label>Desenvolvido por Pablo Redig | CopyRight 2024</label>
        </div>
      </div>
    </>
  )
}
