import React from 'react'
import ImgPerfil from './Img/FotoPerfil.svg'

export default function Sobre() {
  return (
    <>
      <div>
        <h1>PAGINA SOBRE</h1>
        <section>
          <img src={ImgPerfil} alt="Foto Perfil" />
        </section>
        <section>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, tenetur minima culpa consequatur incidunt distinctio natus nobis omnis tempora mollitia cum sunt quaerat nulla asperiores inventore magnam eos fugiat repudiandae.</p>
        </section>
      </div>
    </>
  )
}
