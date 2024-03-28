import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react'
import Cabecalho from './Componentes/Cabecalho'
import Rodape from './Componentes/Rodape'
import Home from './Pags/Home'
import Sobre from './Pags/Sobre'
import Projeto from './Pags/Projetos'

export default function App() {
  return (

    <BrowserRouter>

      <Cabecalho />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Projeto" element={<Projeto />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  )
}

