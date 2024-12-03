import { Link } from 'react-router-dom'

export function Navegacao () {
    return (
        <>
            <div className="flex flex-row justify-center gap-16 md:flex md:flex-col md:items-left md:gap-12 md:pl-32 md:pt-10 md:pb-4">
                <div className="flex items-center justify-left  md:gap-6">
                    <Link to="/feed">
                        <img src="./home_selected.png" alt="pagina inicial" className="" />
                    </Link>
                    <Link to="/feed">
                        <p className="hidden md:flex text-white text-2xl font-normal font-Jost">Página inicial</p>
                    </Link>
                </div>
                <div className="flex items-center justify-left md:gap-6">
                    <Link to="">
                        <img src="./explore_selected.png" alt="explorar" className="" />
                    </Link>
                    <Link to="/pesquisa">
                        <p className="hidden md:flex text-white text-2xl font-normal font-Jost">Explorar</p>
                    </Link>
                </div>
                <div className="flex items-center justify-left md:gap-6">
                    <Link to="">
                        <img src="./message_selected.png" alt="mensagens" className="" />
                    </Link>
                    <Link to="">
                        <p className="hidden md:flex text-white text-2xl font-normal font-Jost">Mensagens</p>
                    </Link>
                </div>
                <div className="flex items-center justify-left md:gap-6">
                    <Link to="">
                        <img src="./notification_selected.png" alt="notificaçao" className="" />
                    </Link>
                    <Link to="">
                        <p className="hidden md:flex text-white text-2xl font-normal font-Jost">Notificações</p>
                    </Link>
                </div>
                <div className="flex items-center justify-left md:gap-6">
                    <Link to="/publicar">
                        <img src="./publish_selected.png" alt="publicar" className="" />
                    </Link>
                    <Link to="/publicar">
                        <p className="hidden md:flex text-white text-2xl font-normal font-Jost">Publicar</p>
                    </Link>
                </div>
            </div>
        </>
    )
}