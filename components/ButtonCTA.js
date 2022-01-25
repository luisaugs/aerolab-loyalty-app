import Image from 'next/image'
import { useEffect, useState } from 'react'


// TW class
const btnActive_class = "max-w-[335px] w-full select-none bg-gradient-to-r from-Brand-Default-Primary to-Brand-Default-Secondary rounded-[16px] text-white lg:hover:bg-gradient-to-r lg:hover:from-Brand-Default-Primary-Hover lg:hover:to-Brand-Default-Secondary-Hover flex justify-center items-center shadow-soft"
const btnDisabled_class = "max-w-[335px] w-full select-none bg-gradient-to-r from-Brand-Default-Primary/50 to-Brand-Default-Secondary/50 rounded-[16px] text-white flex justify-center items-center shadow-soft"
const textPre_class = "text-M-TEXT-L1-Default px-2 py-4"
const ico_class = "flex flex-col justify-center items-center py-4"
const textEnd_class = "text-M-TEXT-L1-Default px-2 p-4"




export const ButtonCTA = ({ textPre, ico, textEnd, handleClick, disabled, textPreDisabled, textEndDisabled }) => {

    const [disableBtn, setDisableBtn] = useState(false)

    useEffect(() => {
        setDisableBtn(disabled)
    }, [disabled])


    return (
        <button className={disableBtn ? btnDisabled_class : btnActive_class} onClick={handleClick} disabled={disableBtn}>
            <span className={textPre_class}>
                {
                    disableBtn ? textPreDisabled : textPre
                }
            </span>
            <span className={ico_class}>
                {
                    ico &&
                    <Image
                        src={ico}
                        width={24}
                        height={24}
                    />
                }
            </span>
            <span className={textEnd_class}>
                {
                    disableBtn ? textEndDisabled : textEnd
                }
            </span>
        </button>
    )
}