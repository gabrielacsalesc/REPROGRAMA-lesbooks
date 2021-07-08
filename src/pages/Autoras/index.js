import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import './styles.css'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'

const Autoras = () => {
    const [autora, setAutora] = useState([])
    const [clique, setClique] = useState(()=>{})
    
    useEffect(()=>{
        const pegaDados = async ()=> {
            const resposta = await Axios.get('https://my-json-server.typicode.com/gabrielacsalesc/livros/db')
            const dados = await resposta.data.livros
            setAutora(dados)
        }
        pegaDados()
    },[clique])

    function ligaClique(){
        setClique(autora)
    }

    return (
        <>
            <Menu />
            <div className="main-autora">
                {autora.map(perso => {
                    return(
                        <div className="card">
                            
                            <img src={perso.capa} alt="autoras dos livros"/>
                            <p>{perso.titulo}</p>
                            <p>{perso.autora}</p>
                            <p>{perso.descricao}</p>
                        </div>
                        
                    )
                })}
                <button onClick={ligaClique}>Clique para trocar a</button>
            </div>
            <Footer />
        </>
    )
}


export default Autoras