export function Comentario_post () {
    return (
        <>
            <div className="w-[240px] h-auto flex flex-col items-start gap-4 p-4 md:w-[284px] md:h-auto bg-fundo rounded-[15px]">
                <div className="flex justify-normal items-center gap-3">
                    <div className="bg-white rounded-full w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center">
                        <img src="./user.png" alt="" className="w-[22px] h-[22px] md:w-[30px] md:h-[30px]" />
                    </div>
                    <div className="">
                        <p className="text-white text-[14px] md:text-[16px] font-medium font-Jost underline underline-offset-8">Renato Gaúchuu</p>
                        <p className="pt-1 text-white text-sm md:text-base font-light font-Jost">Usuário</p>
                    </div>
                </div>
                <div className="">
                    <p className="text-white text-[12px] md:text-[15px] font-light font-Jost">
                        <span className="text-white text-[12px] md:text-[15px] font-medium font-Jost">Comentou - </span>
                        Hoje tem gremio cambada, bora pra cima que tem gol do ribamar.
                    </p>
                </div>
            </div>
        </>
    )
}