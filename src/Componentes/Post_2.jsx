import { useState } from 'react';
import { Conteudo_post } from "./Conteudo_post";
import { Usuario_post } from "./Usuario_post";

export function Post_2({ jogo }) {
    const [comentario, setComentario] = useState('');
    const [comentarios, setComentarios] = useState(jogo.comentarios || []);
    const [mostrarComentarios, setMostrarComentarios] = useState(false);
    const [reacoes, setReacoes] = useState(jogo.reacoes || { '😀': 0, '❤️': 0, '👍': 0, '👎': 0 });

    const handleComentario = async (e) => {
        e.preventDefault();
        const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
        const novoComentario = { texto: comentario, usuario: usuarioLogado.nome };
        const response = await fetch(`http://localhost:3001/jogos/${jogo.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ comentarios: [...comentarios, novoComentario] }),
        });
        const data = await response.json();
        setComentarios(data.comentarios);
        setComentario('');
    };

    const handleReacao = async (emoji) => {
        const novaReacao = { ...reacoes, [emoji]: reacoes[emoji] + 1 };
        const response = await fetch(`http://localhost:3001/jogos/${jogo.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ reacoes: novaReacao }),
        });
        const data = await response.json();
        setReacoes(data.reacoes);
    };

    return (
        <>
            <div className="w-[580px] h-auto md:w-[580px] md:h-auto pb-6 bg-[#3b475f] rounded-[15px] shadow-md">
                <div className="">
                    <Usuario_post usuario={jogo.usuario} />
                </div>
                <div className="md:flex md:justify-center md:items-start md:p-8">
                    <div className="">
                        <img src={jogo.imagem} alt={jogo.nome} className="w-[359px] md:w-[500px] h-auto rounded-[15px]" />
                        <h3 className="text-white text-2xl font-medium font-Jost">{jogo.nome}</h3>
                        <p className="text-white text-base md:text-xl font-light font-Jost">{jogo.descricao}</p>
                        <button onClick={() => setMostrarComentarios(!mostrarComentarios)} className="text-white mt-4">Ver Comentários</button>
                        {mostrarComentarios && (
                            <div className="mt-4">
                                {comentarios.map((comentario, index) => (
                                    <p key={index} className="text-white"><strong>{comentario.usuario}:</strong> {comentario.texto}</p>
                                ))}
                            </div>
                        )}
                        <form onSubmit={handleComentario} className="mt-4">
                            <input
                                type="text"
                                placeholder="Adicionar comentário"
                                value={comentario}
                                onChange={(e) => setComentario(e.target.value)}
                                className="pl-4 focus:outline-none text-white/80 text-lg font-light font-Jost w-[395.48px] md:w-[556px] h-[55.32px] bg-[#e64eeb]/20 rounded-md border border-[#e64eeb]"
                            />
                            <button type="submit" className="w-[257px] md:w-[390px] h-[41px] bg-[#e64eeb] rounded-[25px] mt-2">
                                <span className="text-white text-xl font-light font-Jost">Adicionar</span>
                            </button>
                        </form>
                        <div className="mt-4 flex gap-2">
                            {['😀', '❤️', '👍', '👎'].map((emoji) => (
                                <button
                                    key={emoji}
                                    onClick={() => handleReacao(emoji)}
                                    className="text-2xl text-white flex items-center gap-1"
                                >
                                    {emoji} <span className="text-lg">{reacoes[emoji]}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}