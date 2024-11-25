import { Cabecalho_3 } from "./Componentes/Cabecalho_3";
import { Footer } from "./Componentes/Footer";
import { Icon_buscar_2 } from "./Componentes/Icon_buscar_2";
import { Navegacao } from "./Componentes/Navegacao";
import { Post_2 } from "./Componentes/Post_2";

function Pesquisa () {
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
                        <Icon_buscar_2 />
                    </div>
                    <div className="md:grid md:grid-cols-2 gap-8">
                        <Post_2 />
                        <Post_2 />
                        <Post_2 />
                        <Post_2 />
                        <Post_2 />
                    </div>
                </main>
            </div>  
            <Footer />
        </>
    )
}

export default Pesquisa