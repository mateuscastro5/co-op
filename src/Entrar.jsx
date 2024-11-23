import { Link } from 'react-router-dom'
import { Footer } from './Componentes/Footer'

function Entrar () {
    return (
        <>
            <header className="flex flex-col items-center bg-fundo gap-10 pt-24 pb-24 pr-24 pl-24">
                <Link to="/">
                    <h1 className="text-white text-5xl md:text-6xl font-semibold font-Sans-serif">CO-OP</h1>
                </Link>
                <p className="text-white text-[30px] font-light font-['Jost']">Que bom ver você de volta!</p>
            </header>
            <main className="bg-fundo h-auto flex flex-col items-center pb-12 pr-24 pl-24">
                <div className="w-[493px] md:w-[637px] h-[580px] flex flex-col bg-white rounded-[10px] pt-12">
                    <div className="flex items-center justify-center">
                        <p className="text-fundo text-[28px] font-normal font-Jost">Entrar</p>
                    </div>
                    <form className="flex flex-col pl-10 pr-10 pt-12 pb-12">
                        <p className="flex flex-col items-start">
                            <label className='text-fundo text-xl font-light font-Jost'>Nome de Usuário ou Email</label>
                            <input type="text" placeholder='Digite aqui...' required className='pl-4 text-[#212c42]/80 text-base font-light font-Jost w-[395.48px] md:w-[556px]  h-[55.32px] bg-[#e64eeb]/20 rounded-md border border-[#e64eeb]'/>
                        </p>
                        <div className="flex flex-col pt-10">
                            <div className="flex justify-between items-center">
                                <p className="">
                                    <label className='text-fundo text-xl font-light font-Jost'>Senha</label>
                                </p>
                                <p className="text-[#212c42] text-[16px] font-light font-Jost">Esqueceu a senha?</p>
                            </div>
                            <input type="password" id="" placeholder='Digite aqui...' required className='pl-4 text-[#212c42]/80 text-base font-light font-Jost w-[395.48px] md:w-[556px] h-[55.32px] bg-[#e64eeb]/20 rounded-md border border-[#e64eeb]'/>
                        </div>
                        <div className="flex flex-col items-center pt-20 gap-5">
                            <button type='submit' className='w-[257px] md:w-[390px] h-[41px] bg-[#e64eeb] rounded-[25px] '>
                                <input type="submit" value="Entrar" className='text-white text-xl font-light font-Jost' />
                                <Link to=""></Link>
                            </button>
                            <div className="flex justify-around items-center gap-2">
                                <p className="text-[#212c42] text-lg font-extralight font-Jost">Novo membro?</p>
                                <Link to='/cadastrar'>
                                    <p className="text-[#e64eeb] text-lg font-light font-Jost underline">Cadastre-se</p>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Entrar