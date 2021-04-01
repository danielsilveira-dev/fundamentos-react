import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import ComParametro from './components/ComParametro'
import Primeiro from './components/Primeiro'

ReactDOM.render(
    <div>
        <Primeiro/>
        <ComParametro titulo="Esse é o título" subtitulo="Esse é o Subtítulo" />
        <ComParametro titulo="Opa" subtitulo="Epa" />
    </div>,
    document.getElementById('root')
)