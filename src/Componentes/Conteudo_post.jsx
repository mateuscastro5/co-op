export function Conteudo_post () {
    return (
        <>
            <div className="flex flex-col items-center gap-8 pt-6 pb-10">
                <div className="flex flex-col items-center gap-3">
                    <div className="">
                        <img src="./foto_1.png" alt="conteudo" className="w-[359px] md:w-[500px] h-auto rounded-[15px]" />
                    </div>
                    <div className="flex justify-normal items-center gap-8">
                        <img src="./like_on.png" alt="gostou" className="md:w-[28px] h-auto" />
                        <img src="./dislike_on.png" alt="não gostou" className="md:w-[28px]" />
                        <img src="./comment.png" alt="comentarios" className="md:w-[28px]" />
                    </div>
                </div>
                <div className="w-[366px] md:w-[500px] h-auto">
                    <p className="text-white text-base md:text-xl font-light font-Jost">
                        <span className="text-white text-base md:text-xl font-semibold font-Jost">@Fulano TamTam - </span>
                        Hoje programei em react e java bb, to ficando bom na programação!
                    </p>
                </div>
            </div>
        </>
    )
}