import Image from "next/image";

export const Emptyfav = () => {
    return(
        <div>
            <Image
            src="/empty-favorites.svg"
            height={140}
            width={140}
            alt="Empty"/>
            <h2 className="text-2xl font-semibold mt-6">No favorites</h2>
            <p className="text-muted-foreground textg-sm mt-2"> Try adding some</p>
        </div>
    )}