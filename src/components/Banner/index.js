import React from 'react'
import img  from '../../assets/imagem.svg'
import './styles.css'

const Banner = () => {
    return(
         <div className="main">
            <div className="title">
                <h1>LESBOOKS</h1>
            </div>
            <img className="imagem" src={img} alt="ilustracao com logo do react" />
        </div>
    )
}
export default Banner