import { useState } from 'react';
import { Cabecalho_2 } from "./Componentes/Cabecalho_2";
import { Footer } from "./Componentes/Footer";
import { Navegacao } from "./Componentes/Navegacao";

function Publicar() {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagem, setImagem] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const novoJogo = { nome, descricao, imagem };
        await fetch('http://localhost:3001/jogos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(novoJogo),
        });
        setNome('');
        setDescricao('');
        setImagem('');
    };

    return (
        <>
            <Cabecalho_2 />
            <div className="bg-fundo md:grid md:grid-rows-layout md:grid-cols-layout h-auto">
                <aside className="md:items-start md:justify-start md:flex md:flex-col gap-12 pt-6 pb-6 md:pt-8 md:pb-0 md:pl-0 bg-fundo">
                    <Navegacao />
                </aside>
                <main className="flex flex-col items-center gap-8 pt-8 pb-8 md:pt-16 md:pb-16 md:gap-20">
                    <h2 className="text-white text-2xl md:text-3xl font-semibold font-Jost underline underline-offset-8">Adicionar Jogo</h2>
                    <form className="flex flex-col items-center gap-12" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Nome do Jogo" required className="pl-4 focus:outline-none text-white/80 text-lg font-light font-Jost w-[395.48px] md:w-[556px] h-[55.32px] bg-[#e64eeb]/20 rounded-md border border-[#e64eeb]" value={nome} onChange={(e) => setNome(e.target.value)} />
                        <textarea placeholder="Descrição do Jogo" required className="pl-4 focus:outline-none text-white/80 text-lg font-light font-Jost w-[395.48px] md:w-[556px] h-auto bg-[#e64eeb]/20 rounded-md border border-[#e64eeb] p-3" value={descricao} onChange={(e) => setDescricao(e.target.value)}></textarea>
                        <input type="url" placeholder="Link da Imagem" required className="pl-4 focus:outline-none text-white/80 text-lg font-light font-Jost w-[395.48px] md:w-[556px] h-[55.32px] bg-[#e64eeb]/20 rounded-md border border-[#e64eeb]" value={imagem} onChange={(e) => setImagem(e.target.value)} />
                        <button type="submit" className="w-[257px] md:w-[390px] h-[41px] bg-[#e64eeb] rounded-[25px]">
                            <input type="submit" value="Adicionar Jogo" className="text-white text-xl font-light font-Jost" />
                        </button>
                    </form>
                </main>
            </div>
            <Footer />
        </>
    );
}

export default Publicar;