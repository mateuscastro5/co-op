export function Icon_buscar_2 () {
    return (
        <>
            <form className="w-[580px] h-[54px] flex items-center justify-between pl-6 pr-6 md:justify-between md:w-[680px] md:h-[54px] bg-[#e64eeb] rounded-[21px]">
                <input type="text" required placeholder="Buscar" className="text-white placeholder-white bg-[#e64eeb] text-2xl md:text-3xl font-normal font-Jost focus:outline-none" />
                <button className="flex justify-around items-center">
                    <input type="submit" value="" />
                    <img src="./Lupa.png" alt="Lupa" className=""/>
                </button>
            </form>
        </>
    )
}