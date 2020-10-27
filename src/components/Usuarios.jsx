import React from 'react';
import usuarios from '../data/usuarios';

export default props => {
    function listarUsuarios(){
        return usuarios.map(usu =>{
            return <li>{usu.id} - {usu.nome} - {usu.sobrenome}</li>
        })
    }

    return(
        <>
            <h2>Usuários</h2>
            <ul>
                {listarUsuarios()}
            </ul>
        </>
    )
}