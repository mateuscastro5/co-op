import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Footer } from './Componentes/Footer';

function Cadastrar() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const novoUsuario = { nome, email, telefone, senha };
        await fetch('http://localhost:3001/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(novoUsuario),
        });
        navigate('/entrar');
    };

    return (
        <>
            <header className="flex flex-col items-center bg-fundo gap-10 pt-24 pb-24 pr-24 pl-24">
                <Link to="/">
                    <h1 className="text-white text-5xl md:text-6xl font-semibold font-Sans-serif">CO-OP</h1>
                </Link>
                <p className="text-white text-[30px] font-light font-['Jost']">Seja bem vindo ao CO-OP</p>
            </header>
            <main className="bg-fundo h-auto flex flex-col items-center pb-12 pr-24 pl-24">
                <div className="w-[493px] md:w-[637px] h-[989px] flex flex-col bg-white rounded-[10px] pt-12">
                    <div className="flex items-center justify-center">
                        <p className="text-fundo text-[28px] font-normal font-Jost">Cadastrar</p>
                    </div>
                    <form className="flex flex-col pl-10 pr-10 pt-12 pb-12" onSubmit={handleSubmit}>
                        <p className="flex flex-col items-start">
                            <label className='text-fundo text-xl font-light font-Jost'>Nome de Usuário</label>
                            <input type="text" placeholder='Digite aqui...' required className='pl-4 text-[#212c42]/80 text-base font-light font-Jost w-[395.48px] md:w-[556px]  h-[55.32px] bg-[#e64eeb]/20 rounded-md border border-[#e64eeb]' value={nome} onChange={(e) => setNome(e.target.value)} />
                        </p>
                        <p className="flex flex-col items-start pt-10">
                            <label className='text-fundo text-xl font-light font-Jost'>Email</label>
                            <input type="email" placeholder='Digite aqui...' required className='pl-4 text-[#212c42]/80 text-base font-light font-Jost w-[395.48px] md:w-[556px]  h-[55.32px] bg-[#e64eeb]/20 rounded-md border border-[#e64eeb]' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </p>
                        <p className="flex flex-col items-start pt-10">
                            <label className='text-fundo text-xl font-light font-Jost'>Telefone</label>
                            <input type="number" placeholder='Digite aqui...' required className='pl-4 text-[#212c42]/80 text-base font-light font-Jost w-[395.48px] md:w-[556px]  h-[55.32px] bg-[#e64eeb]/20 rounded-md border border-[#e64eeb]' value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                        </p>
                        <div className="flex flex-col pt-10">
                            <div className="flex justify-between items-center">
                                <p className="">
                                    <label className='text-fundo text-xl font-light font-Jost'>Senha</label>
                                </p>
                                <p className="text-[#212c42] text-[16px] font-light font-Jost">Mínimo 8 digitos</p>
                            </div>
                            <input type="password" id="" placeholder='Digite aqui...' required className='pl-4 text-[#212c42]/80 text-base font-light font-Jost w-[395.48px] md:w-[556px] h-[55.32px] bg-[#e64eeb]/20 rounded-md border border-[#e64eeb]' value={senha} onChange={(e) => setSenha(e.target.value)} />
                        </div>
                        <div className="flex flex-col pt-10">
                            <div className="flex justify-between items-center">
                                <p className="">
                                    <label className='text-fundo text-xl font-light font-Jost'>Repetir senha</label>
                                </p>
                            </div>
                            <input type="password" id="" placeholder='Digite aqui...' required className='pl-4 text-[#212c42]/80 text-base font-light font-Jost w-[395.48px] md:w-[556px] h-[55.32px] bg-[#e64eeb]/20 rounded-md border border-[#e64eeb]' />
                        </div>
                        <div className="flex flex-col items-center pt-20 gap-5">
                            <button className='w-[257px] md:w-[390px] h-[41px] bg-[#e64eeb] rounded-[25px] '>
                                <input type="submit" value="Cadastrar" className='text-white text-xl font-light font-Jost' />
                            </button>
                            <div className="flex justify-around items-center gap-2">
                                <p className="text-[#212c42] text-lg font-extralight font-Jost">Já possui uma conta?</p>
                                <Link to='/entrar'>
                                    <p className="text-[#e64eeb] text-lg font-light font-Jost underline">Entrar</p>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Cadastrar;