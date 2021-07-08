import React from 'react'
import './styles.css'
import img from '../../assets/imagem2.png'


const Sobremimconteudo =()=>{
    return(
        <>            
            <div className="sobremimConteudo">
                    <p className="sobremimParagrafo">
                        Meu nome é Gabriela.  
                    </p>
                    <img className="imagem" src={img} alt="ilustracao com logo do react" />
            </div>            
        </>        
    )
}

export default Sobremimconteudo
