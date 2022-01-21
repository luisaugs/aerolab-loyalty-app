import Image from "next/image"
import { useState } from "react"

export const PrimaryCard = ({ img, name, category }) => {

   
    // Hovering effect 
    const [border, setBorder] = useState(true)

    return (

        <div className="select-none bg-white w-fit flex flex-col h-[431px] mx-auto rounded-2xl relative"
            onMouseEnter={() => setBorder(false)}
            onMouseLeave={() => setBorder(true)}
        >
            <div className="w-[335px] sm:w-[320px] pt-16 border-[#DAE4F2] border rounded-t-2xl overflow-hidden flex flex-col flex-grow bg-white z-10 ">
                <Image
                    src={img}
                    alt={name}
                    width={280}
                    height={204}
                />
            </div>
            <div className="border border-[#DAE4F2] border-t-0 rounded-b-2xl z-10 bg-white">
                <h3 className="capitalize text-Neutral900 text-D-TEXT-L1-Default w-full pt-4 px-6">{name}</h3>
                <p className="uppercase text-Neutral600 text-D-TEXT-L2-All w-full pb-6 px-6">{category}</p>
            </div>
            {/* Animate blur hovering */}
            {/* <div className={`absolute p-[2px] w-[326px] h-[436px] bg-gradient-to-r from-Brand-Default-Primary to-Brand-Default-Secondary rounded-2xl left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] animate-animaOpacity blur ${border && 'hidden'}`}></div> */}
        </div>

    )
}



// original card
