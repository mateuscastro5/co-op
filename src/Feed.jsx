import { useEffect, useState } from 'react';
import { Cabecalho_2 } from './Componentes/Cabecalho_2';
import { Footer } from './Componentes/Footer';
import { Navegacao } from './Componentes/Navegacao';
import { Sugestao } from './Componentes/Sugestao';
import { Post_2 } from './Componentes/Post_2';

function Feed() {
    const [jogos, setJogos] = useState([]);

    useEffect(() => {
        const fetchJogos = async () => {
            const response = await fetch('http://localhost:3001/jogos');
            const data = await response.json();
            setJogos(data);
        };
        fetchJogos();
    }, []);

    return (
        <>
            <Cabecalho_2 />
            <div className="bg-fundo md:grid md:grid-rows-layout md:grid-cols-layout h-auto">
                <aside className="md:items-start md:justify-start md:flex md:flex-col gap-12 pt-6 pb-6 md:pt-8 md:pb-0 md:pl-0 bg-fundo">
                    <Navegacao />
                    <Sugestao />
                </aside>
                <main className="flex flex-col items-center gap-8 pt-8 pb-8 md:pt-16 md:pb-16 md:gap-12">
                    <h2 className="text-white text-2xl md:text-3xl font-semibold font-Jost underline underline-offset-8">Página Inicial</h2>
                    {jogos.map((jogo) => (
                        <Post_2 key={jogo.id} jogo={jogo} />
                    ))}
                </main>
            </div>
            <Footer />
        </>
    );
}

export default Feed;