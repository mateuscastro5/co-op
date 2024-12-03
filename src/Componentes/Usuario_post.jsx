export function Usuario_post({ usuario }) {
    return (
        <div className="flex items-center gap-4">
            <div className="bg-white rounded-full w-[50px] h-[50px] flex items-center justify-center">
                <img src="./user.png" alt="" className="" />
            </div>
            <p className="text-white text-xl font-light font-Jost">{usuario}</p>
        </div>
    );
}