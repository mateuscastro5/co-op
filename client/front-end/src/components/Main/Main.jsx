import './Main.css'
import ilustration from '../assets/ilustration.png'
import '../../Global.css'
export function Main() {
    return (
        <main>
            <section>
                    <div className="main-container">
                        <div className="content-container">
                            <h1>COOPERE, CONHEÇA E COLABORE COM PESSOAS EM SEUS PROJETOS INDIE.</h1>
                            <p>Buscamos impulsionar e criar um ecossistema  rico para desenvolvedores e idealizadores. Venha bater papo, curtir e colaborar!</p>
                            <button>let's coop!</button>
                        </div>
                        <img src={ilustration} alt="" />
                    </div>
            </section>
        </main>

    )
}