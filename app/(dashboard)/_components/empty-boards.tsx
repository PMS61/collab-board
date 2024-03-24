import Image from "next/image";

export const Emptyboard = () => {
    return(
        <div>
            <Image
            src="/note.svg"
            height={140}
            width={140}
            alt="Empty"/>
            <h2 className="text-2xl font-semibold mt-6">No Boards</h2>
            <p className="text-muted-foreground textg-sm mt-2"> Try adding some</p>
        </div>
    )}