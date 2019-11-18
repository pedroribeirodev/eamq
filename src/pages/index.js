import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/home.scss"
import About from "../images/about.png"
import LogoFooter from "../images/EAMQ.png"

import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <iframe width="1020" height="400" src="https://www.youtube.com/embed/aeKIMeQSzJk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h2>Sobre a gente</h2>
    <div className="container-about">
      <div className="box-left">
        <img src={About} alt="Foto sobre a gente"/>
      </div>
      <div className="box-right">
        <p>
          Nascido e criado no Morro do Papagaio, Julio Fessô tem uma história
          de superação que serve de exemplo pros dias de hoje. Ex-dependente químico,
          venceu o crack e a cocaína. Trabalha como educador social há 4 anos.
          <b>Usa da sua experiência de vida para resgatar jovens envolvidos com
            a criminalidade e também conscientizar aqueles que estão se enveredando
            ou sonhando em entrar por esse caminho.
          </b>
        </p>
        <p>
          Além disso faz palestras em escolas e em casas de recuperação e Trabalha
          no resgate de dependentes químicos. Poeta, compositor e cantor. Faz 
          apresentações musicais, e por meio de suas rimas conscientes leva alegria por onde passa.
          <b>
            Defensor nato dos direitos da comunidade é hoje um dos responsáveis pela implantaçaõ
            do FA.VELA, onde atua com liderança e está sempre a frente cobrando respostas e buscando
            soluções pros problemas da comunidade.
          </b>
          Defende também o meio ambiente e faz trabalho de conscientização do descarte adequado
          do lixo do Morro.
        </p>
      </div>
    </div>
    <section className="fale-conosco">
      <h2>Fale conosco</h2>
      <div className="container-fale">
        <div className="box-left">
          <p>juliofesso@gmail.com</p>
          <p><a href="https://api.whatsapp.com/send?phone=5531992336335&text=Ol%C3%A1%2C%20vi%20o%20site%20da%20ONG%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es">(31)99233-6335</a></p>
        </div>
        <div className="box-right">
          <p>
            Para falar com a gente e saber de todos os eventos, novidades,
            trabalhos voluntários e de como ajudar nossa ONG da melhor forma
          </p>
          <p>
            Para sugestões, conselhos ou trocar alguma ideia.
          </p>
          <p>
            Para acompanhar nossos trabalhos nas redes sociais e nos ajudar a ter
            cada vez mais orgulho da nossa quebrada.
          </p>
        </div>
      </div>
    </section>
    <footer>
      <div>
        <img src={LogoFooter} alt="Logo footer"/>
        <span>Movimento Livre | Eu Amo Minha Quebrada todos os direitos reservados</span>
      </div>
      <ul>
        <li><FaYoutube /></li>
        <li><FaFacebook /></li>
        <li><FaInstagram /></li>
      </ul>
    </footer>
  </Layout>
)

export default IndexPage
