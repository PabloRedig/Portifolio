import React from 'react'
import style from "./index.module.css";
import AluraSpace from "./Img/AluraSpace.png";

export default function Projetos() {
  return (
    <>
      <div className={style.BlocoPag}>
        <span className={style.TituloPag}>MEUS PROJETO</span>
      </div>

      <div className={style.BlocoGeral}>

        <div className={style.container}>
          <img className={style.imgSite} src={AluraSpace} alt="preview Projeto" />
          <div className={style.divisoria}></div>
          <div className={style.BlocoInfo}>
            <label> Nome do projeto: {'Projeto'} </label>
            <label> Tecnologias usadas: {'REACT'} {'HTML'} {'CSS'} </label>
            <label> Intuido do projeto:  </label>
            <label> Status do projeto: {'Online'}</label>
          </div>
          <div className={style.BlocoBtn}>
            <button className={style.btn}>
              <a href="https://github.com/PabloRedig/alura-space" target="_blank">GitHub</a>
            </button>
            <button className={style.btn}>
              <a href="https://alura-space-gold.vercel.app" target="_blank">Visitar</a>
            </button>
          </div>
        </div>

        <div className={style.container}>
          <img className={style.imgSite} src={AluraSpace} alt="preview Projeto" />
          <div className={style.divisoria}></div>
          <div className={style.BlocoInfo}>
            <label> Nome do projeto: {'Projeto'} </label>
            <label> Tecnologias usadas: {'REACT'} {'HTML'} {'CSS'} </label>
            <label> Intuido do projeto:  </label>
            <label> Status do projeto: {'Online'}</label>
          </div>
          <div className={style.BlocoBtn}>
            <button className={style.btn}>
              <a href="https://github.com/PabloRedig/alura-space" target="_blank">GitHub</a>
            </button>
            <button className={style.btn}>
              <a href="https://alura-space-gold.vercel.app" target="_blank">Visitar</a>
            </button>
          </div>
        </div><div className={style.container}>
          <img className={style.imgSite} src={AluraSpace} alt="preview Projeto" />
          <div className={style.divisoria}></div>
          <div className={style.BlocoInfo}>
            <label> Nome do projeto: {'Projeto'} </label>
            <label> Tecnologias usadas: {'REACT'} {'HTML'} {'CSS'} </label>
            <label> Intuido do projeto:  </label>
            <label> Status do projeto: {'Online'}</label>
          </div>
          <div className={style.BlocoBtn}>
            <button className={style.btn}>
              <a href="https://github.com/PabloRedig/alura-space" target="_blank">GitHub</a>
            </button>
            <button className={style.btn}>
              <a href="https://alura-space-gold.vercel.app" target="_blank">Visitar</a>
            </button>
          </div>
        </div><div className={style.container}>
          <img className={style.imgSite} src={AluraSpace} alt="preview Projeto" />
          <div className={style.divisoria}></div>
          <div className={style.BlocoInfo}>
            <label> Nome do projeto: {'Projeto'} </label>
            <label> Tecnologias usadas: {'REACT'} {'HTML'} {'CSS'} </label>
            <label> Intuido do projeto:  </label>
            <label> Status do projeto: {'Online'}</label>
          </div>
          <div className={style.BlocoBtn}>
            <button className={style.btn}>
              <a href="https://github.com/PabloRedig/alura-space" target="_blank">GitHub</a>
            </button>
            <button className={style.btn}>
              <a href="https://alura-space-gold.vercel.app" target="_blank">Visitar</a>
            </button>
          </div>
        </div>

      </div>
    </>
  )
}
