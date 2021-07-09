import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import useForm from '../hooks/useForm';

const Formulario = () => {
  const [{ values, loading }, handleChange, handleSubmit] = useForm();
  const [autora, setAutora] = useState([])  
  const [filtroAutora, setFiltroAutora] = useState([])
  const [busca, setBusca] = useState('')
    

  useEffect(()=>{
      const pegaDados = async ()=> {
          const resposta = await Axios.get('https://my-json-server.typicode.com/gabrielacsalesc/livros/db')
          const dados = await resposta.data.livros
          setAutora(dados)
      }
      pegaDados()
  },[])  

  const BuscaAutora = () => {
    
    setFiltroAutora(
      autora.filter(autora => {
        return autora.titulo.includes(busca)
      })
    )    
  };

  return (
    <div>
      <h1>Faça sua busca!</h1>
      <form onSubmit={handleSubmit(BuscaAutora)}>
        <input placeholder="Digite uma autora" onChange={e=>{setBusca(e.target.value)}}/>
        <button type="submit">{loading ? 'Enviando...' : 'Enviar'}</button>
      </form>
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
  );
};
export default Formulario