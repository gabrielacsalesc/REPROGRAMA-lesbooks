import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import './styles.css'

const Autoras = () => {
    const [repos, setRepos] = useState([])
    const [busca, setBusca] = useState('')
    const [filtroRepos, setFiltroRepos] = useState([])


    useEffect(()=> {
        const pegaDados = async () =>{
            const resposta = await Axios.get('http://hp-api.herokuapp.com/api/characters')
            const dados = await resposta.data
            setRepos(dados)
        }    
        pegaDados()

    },[])

    useEffect(()=>{
        setFiltroRepos(
            repos.filter(repo => {
                return repo.name.includes(busca)
            })
        )
    },[busca,repos])

    console.log(repos)
    return(
        <>  
            <input onChange={e => {setBusca(e.target.value)}} placeholder="Digite um personagem" />
            {filtroRepos.map(repo => (
                <a key={repo.name} href={repo.imagem}>{repo.house}</a>
            ))}
        </>
    )
}

export default Autoras