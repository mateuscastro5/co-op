import { Link } from 'react-router-dom'
import { Icon_buscar_1 } from "./Icon_buscar_1";

export function Cabecalho_3 () {
    return(
        <>
            <header className="bg-[#212b41] flex justify-between items-center pr-14 pl-14 pt-7 pb-7 md:pr-32 md:pl-32 md:pt-10 md:pb-14">
                <Link to="/">
                    <h1 className="text-white text-5xl md:text-7xl font-semibold font-Sans-serif">CO-OP</h1>
                </Link>
                <div className="flex justify-around items-center gap-10">
                    <div className="bg-white rounded-full w-[70px] h-[70px] flex items-center justify-center">
                        <img src="./user.png" alt="" className="" />
                    </div>
                    <div className="block md:hidden">
                        <img src="./add_selected.png" alt="mais" className="" />
                    </div>
                </div>
            </header>
            <div className="bg-white w-screen h-[2px] "></div>
        </>
    )
}