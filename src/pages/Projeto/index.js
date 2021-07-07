import React from 'react'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import Projetoconteudo from '../../components/Projetoconteudo'

const Projeto =()=>{
    return (
        <>
            <div className="projeto">
                <Menu /> 
                <Footer />
                <Projetoconteudo />           
            </div>        
        </>
        
    )
}

export default Projeto