import Image from 'next/image'
// import { useEffect, useState } from 'react'


export const ButtonCTA = ({ data }) => {
    // export const ButtonCTA = ({ textPre, ico, textEnd, width, height }) => {




    return (
        <button className="max-w-[335px] w-full select-none bg-gradient-to-r from-Brand-Default-Primary to-Brand-Default-Secondary rounded-[16px] text-white lg:hover:bg-gradient-to-r lg:hover:from-Brand-Default-Primary-Hover lg:hover:to-Brand-Default-Secondary-Hover flex justify-center items-center shadow-soft">

            <span className='text-M-TEXT-L1-Default px-2 py-4'>
                {
                    data.textPre
                }
            </span>
            <span className="flex flex-col justify-center items-center py-4">
                {
                    data.ico &&
                    <Image
                        src={data.ico}
                        width={24}
                        height={24}
                    />
                }
            </span>
            <span className='text-M-TEXT-L1-Default px-2 p-4'>
                {
                    data.textEnd
                }
            </span>
        </button>
    )
}

{/* <button className={`max-w-xs  w-[${width}px] h-[${height}px] select-none bg-gradient-to-r from-Brand-Default-Primary to-Brand-Default-Secondary rounded-[16px] text-white lg:hover:bg-gradient-to-r lg:hover:from-Brand-Default-Primary-Hover lg:hover:to-Brand-Default-Secondary-Hover flex justify-center items-center shadow-soft`}>

<span className='text-M-TEXT-L1-Default'>
    {
        textPre
    }
</span>
<span className="flex flex-col justify-center items-center ">
    <Image
        src={ico}
        width={24}
        height={24}
    />
</span>
<span className='text-M-TEXT-L1-Default'>
    {
        textEnd 
    }
</span>
</button> */}