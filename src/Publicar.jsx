import { Cabecalho_2 } from "./Componentes/Cabecalho_2"
import { Footer } from "./Componentes/Footer"
import { Navegacao } from "./Componentes/Navegacao"

function Publicar () {
    return (
        <>
            <Cabecalho_2 />
            <div className="bg-fundo md:grid md:grid-rows-layout md:grid-cols-layout h-auto">
                <aside className=" md:items-start md:justify-start md:flex md:flex-col gap-12 pt-6 pb-6 md:pt-8 md:pb-0 md:pl-0 bg-fundo ">
                    <Navegacao />
                </aside>
                <main className="flex flex-col items-center gap-8 pt-8 pb-8 md:pt-16 md:pb-16 md:gap-20 ">
                    <h2 className="text-white text-2xl md:text-3xl font-semibold font-Jost underline underline-offset-8">Página Publicar</h2>
                    <img src="./foto_2.jpg" alt="imagem" className="w-[305px] h-auto rounded-2xl md:w-[600px] " />
                    <form className="flex flex-col items-center gap-12">
                        <p className="flex flex-col items-start gap-2">
                            <label className='text-white text-xl font-light font-Jost'>Adicione link de uma imagem: </label>
                            <input type="text" placeholder='Digite aqui...' required className='pl-4 focus:outline-none text-white/80 text-lg font-light font-Jost w-[395.48px] md:w-[556px]  h-[55.32px] bg-[#e64eeb]/20 rounded-md border border-[#e64eeb]'/>
                        </p>
                        <p className="flex flex-col items-start gap-2">
                            <label className='text-white text-xl font-light font-Jost'>Adicione uma legenda: </label>
                            <textarea name="" id="" placeholder='Digite aqui...' required className='pl-4 focus:outline-none text-white/80 text-lg font-light font-Jost w-[395.48px] md:w-[556px]  h-auto bg-[#e64eeb]/20 rounded-md border border-[#e64eeb] p-3 '></textarea>
                        </p>
                        <button type='submit' className='w-[257px] md:w-[390px] h-[41px] bg-[#e64eeb] rounded-[25px]'>
                            <input type="submit" value="Publicar" className='text-white text-xl font-light font-Jost' />
                        </button>
                    </form>
                </main>
            </div>  
            <Footer />
        </>
    )
}

export default Publicar