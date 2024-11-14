import './Main.css';
import ilustration from '../assets/ilustration.png';
import '../../Global.css';
import '../Header/Button'
export function Main() {
    return (
        <main>
            <section>
                <div className="main-container">
                    <div className="content-container">
                        <h1>COOPERE, CONHEÇA E COLABORE COM PESSOAS EM SEUS PROJETOS INDIE.</h1>
                        <p>Buscamos impulsionar e criar um ecossistema rico para desenvolvedores e idealizadores. Venha bater papo, curtir e colaborar!</p>
                        <button className='lets-coop' name='teste'>lets coop</button>
                    </div>
                    <img src={ilustration} alt="Ilustração de projeto" />
                </div>
            </section>
            <section>
                <div className="second-section">
                    <div className="second-content-container">
                        <button className='info'>lets coop</button>
                        <p className='text-content'>Bem-vindo ao CO-OP, uma plataforma especializada criada para facilitar a troca de serviços, recursos e parcerias dentro da comunidade de desenvolvimento de jogos indie. Nossa missão é tornar a busca por materiais, serviços e colaboradores o mais prática, rápida e intuitiva possível, aprimorando a experiência de desenvolvimento para os criadores.
                        </p>
                        <p className='text-content'>O CO-OP oferece uma variedade de recursos adaptados às suas necessidades. Encontre espaços comunitários para se conectar com outros desenvolvedores, um mercado para compra e venda de direitos sobre imagens, gráficos e texturas, e uma área dedicada para colaboração e ofertas de serviços. Seja você um desenvolvedor em busca de assistência com design de jogos, arquitetura, testes ou correções técnicas, o CO-OP reúne todos esses recursos em uma plataforma fácil de usar.</p>
                    </div>
                    <img src="/section-image.png" alt=""/>
                </div>
            </section>
        </main>
    );
}
