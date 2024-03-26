import React from 'react'
import Home from './Pags/Home'
import Sobre from './Pags/Projetos'
import Projetos from './Pags/Sobre'
import Cabecalho from './Componentes/Cabecalho'
import Rodape from './Componentes/Rodape'

export default function App() {
  return (
    <>
      <Cabecalho />
      <Home />
      <Projetos />
      <Sobre />
      <Rodape />
    </>
  )
}

