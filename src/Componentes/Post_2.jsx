import { Conteudo_post } from "./Conteudo_post";
import { Usuario_post } from "./Usuario_post";

export function Post_2 () {
    return (
        <>
            <div className="w-[580px] h-auto md:w-[580px] md:h-auto pb-6 bg-[#3b475f] rounded-[15px] shadow-md">
                <div className="">
                    <Usuario_post />
                </div>
                <div className="md:flex md:justify-center md:items-start md:p-8">
                    <div className="">
                        <Conteudo_post />
                    </div>
                </div>
            </div>
        </>
    )
}