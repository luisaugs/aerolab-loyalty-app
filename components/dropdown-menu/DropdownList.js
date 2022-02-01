import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useGlobal } from "../../context/GlobalContext"
import chevron from "../../public/assets/icons/chevron-active.svg"
import { ButtonDropdown } from "./ButtonDropdown"

// TW class
const divMainDrop_class = "text-Neutral600 text-D-TEXT-L1-Default relative w-[335px] h-max lg:w-[225px] dsk:h-[59px]"
const btnOpen_class = "bg-white w-full py-2 px-4 border rounded-xl flex items-center justify-between lg:hover:bg-Neutral200 pointer-events-none dsk:h-[59px]"
const btnClose_class =  "bg-white w-full py-2 px-4 border rounded-xl flex items-center justify-between lg:hover:bg-Neutral200 dsk:h-[59px]"
const divDropOpen_class = "absolute border rounded-xl w-full top-[110%] h-auto flex flex-col overflow-hidden animate-animaOpacity lg:hover:bg-Neutral100"

export const DropdownList = ({handleSelection}) => {

    const { data, lang } = useGlobal()
    const [isOpen, setIsOpen] = useState(false)
    const [option, setOption] = useState("All products")
    const listDrop = useRef()

    const showMenu = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true)
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

    const handleEsc = (e) => {
        if (e.keyCode === 27) {
            setIsOpen(false);
        }
    }


    const getOption = (text) => {
        setOption(text)
        setIsOpen(false)
        handleSelection(text)
    }

    useEffect(() => {
        if (lang == "en")
            getOption("All Products")
        else {
            getOption("Todos")
        }
    }, [data])


    return (
        <div className={divMainDrop_class}>
            <button className={isOpen ? btnOpen_class :btnClose_class} onClick={showMenu} >
                <span className="pr-4 flex-grow">{option}</span>
                <span className={`flex items-center justify-center ${isOpen ? "rotate-[270deg]" : "rotate-90"} duration-500`}>
                    <Image
                        src={chevron}
                        width={24}
                        height={24}
                    />
                </span>
            </button>

            {
                isOpen &&
                <div className={divDropOpen_class} ref={listDrop}>

                    {
                        data.TechProducts.dropdown.map(elem => (
                            <ButtonDropdown key={Math.random().toString(36).slice(2)} text={elem} showMenu={showMenu} getOption={getOption} />
                        ))
                    }
                </div>
            }
        </div>
    )
}