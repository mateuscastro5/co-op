import './Main.css';
import ilustration from '../assets/ilustration.png';
import '../../Global.css';

export function Main() {
    return (
        <main>
            <section>
                <div className="main-container">
                    <div className="content-container">
                        <h1>COOPERE, CONHEÇA E COLABORE COM PESSOAS EM SEUS PROJETOS INDIE.</h1>
                        <p>Buscamos impulsionar e criar um ecossistema rico para desenvolvedores e idealizadores. Venha bater papo, curtir e colaborar!</p>
                        <button className='lets-coop'>lets coop</button>
                    </div>
                    <img src={ilustration} alt="Ilustração de projeto" />
                </div>
            </section>
        </main>
    );
}
