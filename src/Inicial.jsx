import { Link } from 'react-router-dom'
import { Cabecalho_1 } from "./Componentes/Cabecalho_1.jsx"
import { Footer } from './Componentes/Footer.jsx'

function Inicial() {

  return (
    <>
      <Cabecalho_1 />
      <main className="">
        <section className="">
          <div className="">
            <h2 className="">COOPERE, CONHEÇA E COLABORE COM PESSOAS EM SEUS PROJETOS INDIE.</h2>
            <p className="">Buscamos impulsionar e criar um ecossistema  rico para desenvolvedores e idealizadores. Venha bater papo, curtir e colaborar!</p>
            <button><Link>Let's CO-OP!</Link></button>
          </div>
          <div className="">
            <img src="./image1.png" alt="" className="" />
          </div>
        </section>
        <section className="">
          <div className="">
            <img src="./image2.png" alt="" className="" />
          </div>
          <div className="">
            <h3 className="">Um pouco sobre CO-OP</h3>
            <p className="">Bem-vindo ao CO-OP, uma plataforma especializada criada para facilitar a troca de serviços, recursos e parcerias dentro da comunidade de desenvolvimento de jogos indie. Nossa missão é tornar a busca por materiais, serviços e colaboradores o mais prática, rápida e intuitiva possível, aprimorando a experiência de desenvolvimento para os criadores.</p>
            <p className="">O CO-OP oferece uma variedade de recursos adaptados às suas necessidades. Encontre espaços comunitários para se conectar com outros desenvolvedores, um mercado para compra e venda de direitos sobre imagens, gráficos e texturas, e uma área dedicada para colaboração e ofertas de serviços. Seja você um desenvolvedor em busca de assistência com design de jogos, arquitetura, testes ou correções técnicas, o CO-OP reúne todos esses recursos em uma plataforma fácil de usar.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Inicial
