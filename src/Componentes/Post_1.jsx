import { Comentario_post } from "./Comentario__post";
import { Conteudo_post } from "./Conteudo_post";
import { Usuario_post } from "./Usuario_post";

export function Post_1 () {
    return (
        <>
            <div className="w-[580px] h-auto md:w-[913px] md:h-auto pb-6 bg-[#3b475f] rounded-[15px] shadow-md">
                <div className="">
                    <Usuario_post />
                </div>
                <div className="md:flex md:justify-between md:items-start md:p-8">
                    <div className="">
                        <Conteudo_post />
                    </div>
                    <div className="flex flex-col items-center gap-6">
                        <p className="text-white text-2xl font-medium font-Jost underline underline-offset-8">Comentários</p>
                        <div className="grid grid-cols-2 gap-4 md:flex md:flex-col md:items-center md:gap-6">
                            <Comentario_post />
                            <Comentario_post />
                            <Comentario_post />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}