import { Link } from 'react-router-dom'
import { Icon_buscar_1 } from "./Icon_buscar_1";

export function Cabecalho_1() {
    return(
        <>
            <header className="bg-[#212b41] flex justify-between items-center pr-14 pl-14 pt-7 pb-7 md:pr-24 md:pl-28 md:pt-10 md:pb-10">
                <h1 className="text-white text-5xl md:text-7xl font-normal font-Jersey20">CO-OP</h1>
                <div className="flex justify-around items-center gap-10">
                    {/* <Link to="" className=""> */}
                        <Icon_buscar_1 />
                    {/* </Link> */}
                    <div className="flex justify-around items-center gap-4">
                        {/* <Link to="" className=""> */}
                            <p className="text-white text-2xl font-normal font-Jost flex justify-center items-center">Entrar</p>
                        {/* </Link> */}
                        {/* <Link to="" className=""> */}
                            <p className="w-[155px] h-9 bg-[#e64eeb] rounded-[21px] text-white text-2xl font-normal font-Jost flex justify-center items-center">Cadastrar</p>
                        {/* </Link> */}
                    </div>
                </div>
            </header>
        </>
    )
}