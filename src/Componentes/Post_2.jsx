import { useState } from 'react';
import { Conteudo_post } from "./Conteudo_post";
import { Usuario_post } from "./Usuario_post";

export function Post_2({ jogo }) {
    const [interacao, setInteracao] = useState('');
    const [interacoes, setInteracoes] = useState(jogo.interacoes || []);
    const [mostrarInteracoes, setMostrarInteracoes] = useState(false);

    const handleInteracao = async (e) => {
        e.preventDefault();
        const novaInteracao = { texto: interacao };
        const response = await fetch(`http://localhost:3001/jogos/${jogo.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ interacoes: [...interacoes, novaInteracao] }),
        });
        const data = await response.json();
        setInteracoes(data.interacoes);
        setInteracao('');
    };

    return (
        <>
            <div className="w-[580px] h-auto md:w-[580px] md:h-auto pb-6 bg-[#3b475f] rounded-[15px] shadow-md">
                <div className="">
                    <Usuario_post />
                </div>
                <div className="md:flex md:justify-center md:items-start md:p-8">
                    <div className="">
                        <img src={jogo.imagem} alt={jogo.nome} className="w-[359px] md:w-[500px] h-auto rounded-[15px]" />
                        <h3 className="text-white text-2xl font-medium font-Jost">{jogo.nome}</h3>
                        <p className="text-white text-base md:text-xl font-light font-Jost">{jogo.descricao}</p>
                        <button onClick={() => setMostrarInteracoes(!mostrarInteracoes)} className="text-white mt-4">Ver Interações</button>
                        {mostrarInteracoes && (
                            <div className="mt-4">
                                {interacoes.map((interacao, index) => (
                                    <p key={index} className="text-white">{interacao.texto}</p>
                                ))}
                            </div>
                        )}
                        <form onSubmit={handleInteracao} className="mt-4">
                            <input
                                type="text"
                                placeholder="Adicionar interação"
                                value={interacao}
                                onChange={(e) => setInteracao(e.target.value)}
                                className="pl-4 focus:outline-none text-white/80 text-lg font-light font-Jost w-[395.48px] md:w-[556px] h-[55.32px] bg-[#e64eeb]/20 rounded-md border border-[#e64eeb]"
                            />
                            <button type="submit" className="w-[257px] md:w-[390px] h-[41px] bg-[#e64eeb] rounded-[25px] mt-2">
                                <span className="text-white text-xl font-light font-Jost">Adicionar</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}