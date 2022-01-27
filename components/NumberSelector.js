import { useEffect, useState } from "react"


// TW calss
const text_noActived = "text-D-TEXT-L1-Default text-transparent bg-clip-text bg-gradient-to-r from-Brand-Default-Primary to-Brand-Default-Secondary"
const text_actived = "text-D-TEXT-L1-Default text-Neutral100"
const bg_actived = "select-none w-fit rounded-xl flex justify-center px-4 py-1 cursor-pointer mx-1 bg-gradient-to-r from-Brand-Default-Primary to-Brand-Default-Secondary"
const bg_noActived = "bg-[#E5F0FF] select-none w-fit rounded-xl flex justify-center px-4 py-1 cursor-pointer mx-1"


export const NumberSelector = ({ value, active, handleClick }) => {

    const [toggleBtn, setToggleBtn] = useState(false)

    useEffect(() => {
        active ? setToggleBtn(true) :setToggleBtn(false)
    }, [active])

    return (
        <button className={toggleBtn ? bg_actived : bg_noActived} onClick={handleClick}>
            <span className={toggleBtn ? text_actived : text_noActived}>
                {value ? value : 10000}
            </span>
        </button>
    )
}