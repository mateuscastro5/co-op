import { Link } from 'react-router-dom'

export function Navegacao () {
    return (
        <>
            <div className="">
                <div className="flex items-center justify-left gap-6">
                    <img src="./home_selected.png" alt="home" className="" />
                    <Link to="">
                        <p className="text-white text-2xl font-normal font-Jost">Página inicial</p>
                    </Link>
                </div>
                <div className="flex items-center justify-left gap-6">
                    <img src="./explore_selected.png" alt="home" className="" />
                    <Link to="">
                        <p className="text-white text-2xl font-normal font-Jost">Explorar</p>
                    </Link>
                </div>
            </div>
        </>
    )
}