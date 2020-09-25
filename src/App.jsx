import './App.css'
import React from 'react'

import Card from './components/layout/Card'
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParamentro'
import Fragments from './components/basics/Fragments'
import Aleatorio from './components/basics/Aleatorio'
import Familia from './components/basics/Familia'
import FamiliaMembro from './components/basics/FamiliaMembro'
import ListaAlunos from './components/basics/ListaAlunos'
import Usarioinfo from './components/repeticao/Usuarioinfo'
import ParOrImpar from './components/repeticao/ParOrImpar'
import InderataPai from './components/estado/InderataPai'



export default () => {
    return (
        <div className="App">
            <h1>Fundamentos de React</h1>
            <div className="Cards">
                <Card titulo="Estado" color="green">
                    <InderataPai />
                </Card>
                <Card titulo="Repetição" color="green">
                    <ParOrImpar numero={3}></ParOrImpar>
                    <Usarioinfo usuario={{ nome: 'Carleandro' }} />
                    <Usarioinfo usuario={{ email: 'carleandro7@gmail.com' }} />
                </Card>
                <Card titulo="Lista Alunos" color="blue">
                    <ListaAlunos></ListaAlunos>
                </Card>
                <Card titulo="Compentes com Filhos" color="blue">
                    <Familia sobrenome='Silva'>
                        <FamiliaMembro nome='Pedro' />
                        <FamiliaMembro nome='Ana' />
                        <FamiliaMembro nome='João' />
                    </Familia>

                </Card>
                <Card titulo="Primeiro Componente" color="blue">
                    <Primeiro />
                </Card>
                <Card titulo="Segundo Componente" color="green">
                    <ComParametro titulo="Teste titulo" />
                </Card>
                <Card titulo="Terceiro Componente" color="gray">
                    <Fragments />
                </Card>
                <Card titulo="Quarto Componente" >
                    <Aleatorio min={10} max={20} />
                </Card>
            </div>
        </div >
    )
}