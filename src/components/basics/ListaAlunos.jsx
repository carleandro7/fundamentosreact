import React from 'react'
import alunos from '../../data/alunos'

export default props => {
    //const li1 = <li>{alunos[0].id}-{alunos[0].nome}->{alunos[0].nota}</li>
    const lisAlunos = alunos.map((aluno) => {
        return (
            <li key={aluno.id}>{
                aluno.id}-{aluno.nome} - {aluno.nota}
            </li>
        )
    })
    return (
        <div>
            <ul style={{ listStyle: 'none' }}>
                {lisAlunos}
            </ul>
        </div >
    )
}