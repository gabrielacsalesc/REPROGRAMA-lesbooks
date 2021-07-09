import React from 'react'
import './styles.css'
import img from '../../assets/imagem2.png'
import ImgGithub from '../../assets/icons8-github.svg'
import ImgLinkedin from '../../assets/icons8-linkedin.svg'
import ImgInstagram from '../../assets/icons8-instagram.svg'


const Sobremimconteudo = () => {
    return (
        <div className="sobremimConteudo">
            <img className="imagem2" src={img} alt="ilustracao com logo do react" />               
                <div className="sobremimParagrafo">
                    <p> 
                        Gabriela mora em Brasília é graduada em História, pela Universidade de Brasília, atua como professora de Inglês para crianças e adultos. É co-fundadora do Arquivo Lésbico Brasileiro, onde leciona cursos e atua como Controladora Fiscal. Começou sua trajetória na área de tecnologia através do curso online Eu ProgrAmo, em 2020, e se formou em 2021, no bootcamp da turma 10 da Reprograma e dedica seu tempo aos estudos para se tornar uma Desenvolvedora Front-End e conseguir sua primeira oportunidade.
                    </p>
                </div>           
            
            <div className="socialMedia">
                <a href="https://github.com/gabrielacsalesc" target="_blank"  rel="noreferrer">
                    <img className="github" src={ImgGithub} alt="logotipo github na cor branca" />
                </a>

                <a href="https://www.linkedin.com/in/gabriela-coutinho-sales-2ab982184/" target="_blank"  rel="noreferrer">
                    <img className="linkedin" src={ImgLinkedin} alt="logotipo linekdin na cor branca" />
                </a>

                <a href="https://www.instagram.com/arquivolesbicobrasileiro/" target="_blank"  rel="noreferrer">
                    <img className="instagram" src={ImgInstagram} alt="logotipo instagram na cor branca" />
                </a>
            </div>    
        </div>  
    )
}
export default Sobremimconteudo
