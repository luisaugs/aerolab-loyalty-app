import Image from "next/image"

export const PrimaryCard = ({ data }) => {

    const { img, name, category } = data

    return (
        <div className="select-none bg-white w-fit flex flex-col h-[431px] mx-auto">
            <div className="w-[320px] pt-16 border-[#DAE4F2] border rounded-t-2xl overflow-hidden flex flex-col flex-grow">
                <Image
                    src={img.url}
                    alt={name}
                    width={280}
                    height={204}
                />
            </div>
            <div className="border border-[#DAE4F2] border-t-0 rounded-b-2xl">
                <h3 className="capitalize text-Neutral900 text-D-TEXT-L1-Default w-full pt-4 px-6">{name}</h3>
                <p className="uppercase text-Neutral600 text-D-TEXT-L2-All w-full pb-6 px-6">{category}</p>
            </div>
        </div>
    )
}