import React from 'react'
import Menu from '../../components/Menu'
import Projetoconteudo from '../../components/Projetoconteudo'
import Footer from '../../components/Footer'


const Projeto =()=>{
    return (
        <>
            <div className="projeto">
                <Menu />
                <Projetoconteudo /> 
                <Footer />
            </div>        
        </>
        
    )
}

export default Projeto