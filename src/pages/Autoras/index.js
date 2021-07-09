import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import './styles.css'
import Menu from '../../components/Menu'
import useForm from '../../hooks/useForm'
import Footer from '../../components/Footer'

const Autoras = () => {
const [{ values, loading }, handleChange, handleSubmit] = useForm();
const [autora, setAutora] = useState([])
const [filtroAutora, setFiltroAutora] = useState([])

useEffect(() => {
    const pegaDados = async () => {
    const resposta = await Axios.get('https://my-json-server.typicode.com/gabrielacsalesc/livros/db')
    const dados = await resposta.data.livros
    setAutora(dados)
    }
    pegaDados()
}, [])
const BuscaAutora = () => {
    console.log(values)
    setFiltroAutora(values)    
    console.log(filtroAutora)  
};
return (
    <div className="main-autora">
        <Menu />
    <h1 className="title-autora">AUTORAS</h1>
    <form onSubmit={handleSubmit(BuscaAutora)}>
        <input className="search"
        onChange={handleChange}
        type="text"
        name="name"
        placeholder="encontre sua autora"
        />
        <button className="button-search" type="submit">{loading ? 'Enviando...' : 'Enviar'}</button>
        </form>
    {autora.map(perso => {
        if(filtroAutora.name == perso.autora || filtroAutora.name == undefined){
        return (
            <div className="card">
            <img className="capa" src={perso.capa} alt="capa do livro" />
            <p>{perso.titulo}</p>
            <p>{perso.autora}</p>
            <p className="card-descricao">{perso.descricao}</p>
            <button>comprar</button>
            </div>
        )
        }
    })}
    <Footer />
    </div>
);
};
export default Autoras