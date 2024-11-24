import { Link } from 'react-router-dom'
import { Cabecalho_2 } from './Componentes/Cabecalho_2'
import { Footer } from './Componentes/Footer'
import { Navegacao } from './Componentes/Navegacao'

function Feed () {
    return (
        <>
            <Cabecalho_2 />
            <div className="grid grid-rows-layout grid-cols-layout h-auto">
                <aside className="row-span-2 col-span-1 bg-gray-600 p-4">
                    <Navegacao />
                </aside>
                <main className="">

                </main>
                <Footer />
            </div>  
            
            
            {/* <div class="grid grid-rows-layout grid-cols-layout h-screen">
                <header class="row-span-1 col-span-2 bg-blue-500 text-white p-4">Cabeçalho</header>
                <aside class="row-span-2 col-span-1 bg-gray-200 p-4">Barra Lateral</aside>
                <main class="row-span-2 col-span-1 bg-gray-100 p-4">Conteúdo Principal</main>
                <footer class="row-span-1 col-span-2 bg-blue-700 text-white p-4">Rodapé</footer>
            </div> */}
        </>
    )
}

export default Feed