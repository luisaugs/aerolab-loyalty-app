import Image from "next/image"
import skeleton from "../../public/assets/propios/skeleton.svg"


export const Skeleton = () => {
    return (
        <div className="select-none bg-white w-fit flex flex-col h-[431px] mx-auto rounded-2xl">
            <div className="w-[320px] border-[#DAE4F2] border rounded-t-2xl flex flex-col justify-center flex-grow">
                <Image
                    src={skeleton}
                    alt={"skeleton svg"}
                    width={96}
                    height={96}
                />
            </div>
            <div className="border border-[#DAE4F2] border-t-0 rounded-b-2xl h-[89px] p-4">
                <div className="bg-Neutral300 rounded-md w-3/4 h-6 mb-2"></div>
                <div className="bg-Neutral200 rounded-md w-1/2 h-3"></div>
            </div>
        </div>
    )
}