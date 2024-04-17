import React from 'react'
import ImgPerfil from './Img/FotoPerfil.svg'
import style from './index.module.css'

export default function Sobre() {
  return (
    <>
      <div className={style.BlocoPag}>
        <span className={style.TituloPag}>SOBRE</span>
      </div>
      <div className={style.container}>
        <section className={style.BlocoFoto}>
          <img src={ImgPerfil} alt="Foto Perfil" />
        </section>
        <section className={style.BlocoTexto}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            tenetur minima culpa consequatur incidunt distinctio natus nobis
            omnis tempora mollitia cum sunt quaerat nulla asperiores inventore
            magnam eos fugiat repudiandae.</p>
        </section>
      </div>
    </>
  )
}
