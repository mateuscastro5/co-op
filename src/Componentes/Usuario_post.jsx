export function Usuario_post () {
    return (
        <>
            <div className="flex justify-between items-center p-6 md:p-8">
                <div className="flex justify-normal items-center gap-4">
                    <div className="bg-white rounded-full w-[50px] h-[50px] md:w-[70px] md:h-[70px] flex items-center justify-center">
                        <img src="./user.png" alt="" className="w-[22px] h-[22px] md:w-[30px] md:h-[30px]" />
                    </div>
                    <div className="">
                        <p className="text-white text-[20px] md:text-[22px] font-normal font-Jost underline underline-offset-8">Fulano TamTam</p>
                        <p className="text-white text-base md:text-lg font-extralight font-Jost pt-1">Desenvolvedor</p>
                    </div>
                </div>
                <div className="w-[122px] h-6 md:w-[165px] md:h-[33px] bg-[#e64eeb] rounded-[25px] flex justify-center items-center gap-4">
                    <p className="text-white text-base md:text-lg font-normal font-Jost">Seguindo</p>
                    <img src="./confirma.png" alt="" className="" />
                </div>
            </div>
        </>
    )
}