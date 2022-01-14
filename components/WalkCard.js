import Image from "next/image"

export const WalkCard = ({data}) => {

    const { srcPic, srcIco, title, body } = data

    return (
        <div className="select-none w-[532px] border border-[#DAE4F2] rounded-3xl flex flex-col p-3 mx-auto bg-white">
            <div className="border border-[#DAE4F2] border-b-0 rounded-t-xl relative w-[506px] h-[498px] bg-gradient-to-r from-Brand-Default-Primary to-Brand-Default-Secondary">
                <Image
                    src={srcPic}
                    layout="fill"
                />
            </div>
            <div className="border border-[#DAE4F2] rounded-b-xl flex flex-col bg-white">
                <h3 className="flex items-center pl-6 pt-4">
                    <span className="w-12 h-12 bg-[#E5F0FF] flex items-center justify-center rounded-lg p-1">
                        <Image
                            src={srcIco}
                            width={40}
                            height={40}
                        />
                    </span>
                    <span className="pl-4 text-D-TITLE-L3 uppercase font-black text-transparent bg-clip-text bg-gradient-to-r from-Brand-Default-Primary to-Brand-Default-Secondary">{title}</span>
                </h3>
                <p className="pl-6 pt-3 pb-6 text-D-TEXT-L1-Default text-Neutral600">{body}</p>
            </div>
        </div>
    )
}