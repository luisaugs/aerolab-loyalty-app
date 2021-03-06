import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useGlobal } from "../../context/GlobalContext"
import logo from "../../public/assets/icons/aeropay-1.svg"
import chevronDef from "../../public/assets/icons/chevron-default.svg"
import { ModuleAeroPay } from "./ModuleAeroPay"



// TW class
const btnAero_class = "select-none text-D-TEXT-L1-Default px-2 py-2 border border-[#DAE4F2] rounded-2xl flex flex-row justify-center items-center bg-white shadow-soft mr-1 "



export const AeroPay = () => {

    const { points } = useGlobal()
    const [isOpen, setIsOpen] = useState(false)
    const listDrop = useRef()

    const showMenu = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true)
    }

    const handleEsc = (e) => {
        if (e.keyCode === 27) {
            setIsOpen(false);
        }
    }

    const checkIfClickedOutside = e => {
        if (isOpen && listDrop.current && !listDrop.current.contains(e.target)) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        window.addEventListener("mousedown", checkIfClickedOutside)
        window.addEventListener('keydown', handleEsc)
        return () => {
            window.removeEventListener("mousedown", checkIfClickedOutside)
            window.removeEventListener('keydown', handleEsc)
        }
    }, [isOpen])

    return (
        <div className="relative">
            <button
                className={`${btnAero_class} ${isOpen ? 'pointer-events-none' : ''}`}
            onClick={showMenu}
            >
            <span className="flex flex-row justify-center items-center pr-4">
                <span className="px-2 flex flex-grow justify-center">
                    <Image
                        src={logo}
                        width={24}
                        height={24}
                    />
                </span>
                <span className="text-Neutral600">{points}</span>
            </span>

            <span className={`${isOpen ? "rotate-[270deg]" : "rotate-90"} duration-500 flex justify-center items-center`}>
                <Image
                    src={chevronDef}
                    width={20}
                    height={20}
                />
            </span>
        </button>


            {
        isOpen &&

            <div className="absolute right-0 top-[105%] animate-animaOpacity z-[20]" ref={listDrop}>
                <ModuleAeroPay showMenu={showMenu} />
            </div>
    }


        </div >

    )
}
