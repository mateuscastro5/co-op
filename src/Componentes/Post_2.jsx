import { useState } from 'react';
import { Conteudo_post } from "./Conteudo_post";
import { Usuario_post } from "./Usuario_post";

export function Post_2({ jogo }) {
    const [interacao, setInteracao] = useState('');
    const [interacoes, setInteracoes] = useState(jogo.interacoes || []);
    const [mostrarInteracoes, setMostrarInteracoes] = useState(false);
    const [emojiSelecionado, setEmojiSelecionado] = useState('');

    const handleInteracao = async (emoji) => {
        const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
        const novaInteracao = { texto: interacao, emoji, usuario: usuarioLogado.nome };
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
        setEmojiSelecionado(emoji);
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
                                    <p key={index} className="text-white"><strong>{interacao.usuario}:</strong> {interacao.texto} {interacao.emoji}</p>
                                ))}
                            </div>
                        )}
                        <div className="mt-4 flex gap-2">
                            {['😀', '❤️', '👍', '👎'].map((emoji) => (
                                <button
                                    key={emoji}
                                    onClick={() => handleInteracao(emoji)}
                                    className={`text-2xl ${emojiSelecionado === emoji ? 'text-yellow-500' : 'text-white'}`}
                                >
                                    {emoji}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}