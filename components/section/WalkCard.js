import Image from "next/image"
import { useEffect, useState } from "react"

// TW class
const main_class = "w-[335px] h-[408px] border border-[#DAE4F2] p-3 rounded-3xl flex flex-col items-center bg-white mx-auto dsk:w-[532px] dsk:h-[676px]"
const contSup_class = "relative w-[311px] h-[244px] dsk:w-[508px] dsk:h-[498px] border-b-0 rounded-t-xl bg-gradient-to-r from-Brand-Default-Primary/50 to-Brand-Default-Secondary/50 flex items-center justify-center flex-grow"
const contInf_class = "w-[311px] h-[140px] dsk:w-[508px] dsk:h-[154px] px-6 pt-4 border border-[#DAE4F2] rounded-b-xl flex flex-col bg-white"
const header_class = "flex items-center"
const spanHeaderSup_class = "flex items-center justify-center rounded-lg p-1 bg-[#E5F0FF]"
const spanHeaderInf_class = "pl-4 text-M-TITLES-L3 uppercase font-black text-transparent bg-clip-text bg-gradient-to-r from-Brand-Default-Primary to-Brand-Default-Secondary dsk:text-D-TITLE-L3"
const par_class = "pt-3 pb-6 text-M-TEXT-L1-Default text-Neutral600 dsk:text-D-TEXT-L1-Default"




export const WalkCard = ({ data }) => {

    const { srcPic, srcIco, title, body } = data

    const [size, setSize] = useState(false)

    const handleSize = () => {
        (window.innerWidth > 1900) ? setSize(true) : setSize(false)
    }

    useEffect(() => {
        window.addEventListener("resize", handleSize)
    }, [])


    return (
        <div className={main_class}>
            <div className={contSup_class}>
                <Image
                    src={srcPic}
                    layout="fill"
                    objectFit='contain'
                />
            </div>
            <div className={contInf_class}>
                <h3 className={header_class}>
                    <span className={spanHeaderSup_class}>
                        {
                            size
                                ?
                                <Image
                                    src={srcIco}
                                    width={40}
                                    height={40}
                                />

                                :
                                <Image
                                    src={srcIco}
                                    width={26}
                                    height={26}
                                />
                        }
                    </span>
                    <span className={spanHeaderInf_class}>{title}</span>
                </h3>
                <p className={par_class}>{body}</p>
            </div>
        </div>
    )
}
