import { useEffect, useState } from "react"


const text_noActived = "text-D-TEXT-L1-Default text-transparent bg-clip-text bg-gradient-to-r from-Brand-Default-Primary to-Brand-Default-Secondary"
const text_actived = "text-D-TEXT-L1-Default text-Neutral100"
const bg_actived = "select-none w-fit rounded-xl flex justify-center px-4 py-1 cursor-pointer mx-1 bg-gradient-to-r from-Brand-Default-Primary to-Brand-Default-Secondary"
const bg_noActived = "bg-[#E5F0FF] select-none w-fit rounded-xl flex justify-center px-4 py-1 cursor-pointer mx-1"


export const NumberSelector = ({ value, active }) => {

    const [toggleBtn, setToggleBtn] = useState(false)
    const [activeBtn, setActiveBtn] = useState(false)



    const toggleAct = () => {
        active ? setActiveBtn(false) : setActiveBtn(true)
    }

    useEffect(()=>{

    })

    return (
        <button className={toggleBtn ? bg_actived : bg_noActived} onClick={() => setToggleBtn(!toggleBtn)}>
            <span className={toggleBtn ? text_actived : text_noActived}>
                {!value && 1000000}
            </span>
        </button>
    )
}