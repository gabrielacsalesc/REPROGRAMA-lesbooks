import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import './styles.css'

const Autoras = () => {
    const [repos, setRepos] = useState([])
    const [busca, setBusca] = useState('')
    const [filtroRepos, setFiltroRepos] = useState([])


    useEffect(()=> {
        const pegaDados = async () =>{
            const resposta = await Axios.get('https://my-json-server.typicode.com/gabrielacsalesc/livros/db')
            const dados = await resposta.data
            setRepos(dados)
        }    
        pegaDados()

    },[])

    useEffect(()=>{
        setFiltroRepos(
            repos.filter(repo => {
                return repo.titulo.includes(busca)
            })
        )
    },[busca,repos])

    console.log(repos)
    return(
        <>  
            <input onChange={e => {setBusca(e.target.value)}} placeholder="Digite um personagem" />
            {filtroRepos.map(repo => (
                <a key={repo.capa} href={repo.titulo}>{repo.autora}>{repo.descricao}</a>
            ))}
        </>
    )
}

export default Autoras