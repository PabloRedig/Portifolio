import React from 'react'
import style from "./index.module.css";

export default function Projetos() {
  return (
    <>
      <div className={style.container}>
        <div><h1>PAGINA PROJETO</h1></div>
        <div>
              <img src="" alt="preview Projeto" />
          <div>
              <label> Nome do Projeto: {'Projeto'} </label>
              <label> SKills usadas: {'REACT'} {'HTML'} {'CSS'} </label>
          </div>
          <div>
            <button>Github</button>
            <button>Visitar</button>
          </div>
        </div>
      </div>
    </>
  )
}
