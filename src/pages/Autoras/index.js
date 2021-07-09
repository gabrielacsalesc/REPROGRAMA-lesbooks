import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import './styles.css'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'

const Autoras = () => {
    const [autora, setAutora] = useState([])
    const [busca, setBusca] = useState('')
    const [filtraAutora, setFiltraAutora] = useState([])
    

    useEffect(()=>{
        const pegaDados = async ()=> {
            const resposta = await Axios.get('https://my-json-server.typicode.com/gabrielacsalesc/livros/db')
            const dados = await resposta.data.livros
            setAutora(dados)
        }
        pegaDados()
    },[])    

    useEffect(()=>{
        setFiltraAutora(
            autora.filter(perso => {
                return autora.includes(busca)
            })
        )
    },[busca,autora])



    return (
        <>
            <Menu />        
            <input className="busca" type ="text" placeholder="Encontre a autora"  onChange={e=>{setBusca(e.target.value)}}/> 
            <div className="main-autora">               
                {autora.map(perso => {
                    return(                        
                        <div className="card">
                            <img className="capa" src={perso.capa} alt="capa do livro"/>
                            <p>{perso.titulo}</p>
                            <p>{perso.autora}</p>
                            <p>{perso.descricao}</p>
                        </div>                        
                    )
                })}
                
            </div>
            <Footer />
        </>
    )
}

export default Autoras