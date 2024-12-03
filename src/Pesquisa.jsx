import { useState, useEffect } from 'react';
import { Cabecalho_3 } from "./Componentes/Cabecalho_3";
import { Footer } from "./Componentes/Footer";
import { Icon_buscar_2 } from "./Componentes/Icon_buscar_2";
import { Navegacao } from "./Componentes/Navegacao";
import { Post_2 } from "./Componentes/Post_2";

function Pesquisa() {
    const [jogos, setJogos] = useState([]);
    const [busca, setBusca] = useState('');
    const [resultados, setResultados] = useState([]);

    useEffect(() => {
        const fetchJogos = async () => {
            const response = await fetch('http://localhost:3001/jogos');
            const data = await response.json();
            setJogos(data);
        };
        fetchJogos();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        const resultadosBusca = jogos.filter(jogo => 
            jogo.nome.toLowerCase().includes(busca.toLowerCase())
        );
        setResultados(resultadosBusca);
    };

    return (
        <>
            <Cabecalho_3 />
            <div className="bg-fundo md:grid md:grid-rows-layout md:grid-cols-layout h-auto">
                <aside className=" md:items-start md:justify-start md:flex md:flex-col gap-12 pt-6 pb-6 md:pt-8 md:pb-0 md:pl-0 bg-fundo ">
                    <Navegacao />
                </aside>
                <main className="flex flex-col items-center gap-20 md:gap-28 pt-10 pb-8 md:pt-16 md:pb-16 ">
                    <div className="flex flex-col items-center gap-8 md:gap-12">
                        <h2 className="text-white text-2xl md:text-3xl font-semibold font-Jost underline underline-offset-8">Página Pesquisa</h2>
                        <form className="w-[580px] h-[54px] flex items-center justify-between pl-6 pr-6 md:justify-between md:w-[680px] md:h-[54px] bg-[#e64eeb] rounded-[21px]" onSubmit={handleSearch}>
                            <input type="text" required placeholder="Buscar" className="text-white placeholder-white bg-[#e64eeb] text-2xl md:text-3xl font-normal font-Jost focus:outline-none" value={busca} onChange={(e) => setBusca(e.target.value)} />
                            <button className="flex justify-around items-center">
                                <input type="submit" value="" />
                                <img src="./Lupa.png" alt="Lupa" className=""/>
                            </button>
                        </form>
                    </div>
                    <div className="md:grid md:grid-cols-2 gap-8">
                        {resultados.map((jogo) => (
                            <div key={jogo.id} className="w-[580px] h-auto md:w-[580px] md:h-auto pb-6 bg-[#3b475f] rounded-[15px] shadow-md">
                                <div className="">
                                    <Post_2 jogo={jogo} />
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>  
            <Footer />
        </>
    );
}

export default Pesquisa;