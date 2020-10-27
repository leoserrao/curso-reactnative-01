import React from 'react';
import ReactDom from 'react-dom';
import './styles.css'
import Funcao from './components/Funcao'
import Parametros from './components/Parametros'
import Usuarios from './components/Usuarios'

ReactDom.render(
    <div>
    <Funcao />
    <Parametros nome="Léo Serrão" sobrenome="Barbosa"/>
    <Usuarios />
    </div>,
    document.getElementById('root')
)