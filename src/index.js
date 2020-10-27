import React from 'react';
import ReactDom from 'react-dom';
import './styles.css'
import Funcao from './components/Funcao'
import Parametros from './components/Parametros'

ReactDom.render(
    <div>
    <Funcao></Funcao>
    <Parametros></Parametros>
    </div>,
    document.getElementById('root')
)