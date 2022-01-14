import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import chevron from "../public/assets/icons/chevron-active.svg"


export const Dropdown = () => {

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
        // If the menu is open and the clicked target is not within the menu, then close the menu
        if (isOpen && listDrop.current && !listDrop.current.contains(e.target)) {
            setIsOpen(false)
        }
    }


    useEffect(() => {
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isOpen])



    useEffect(() => {
        window.addEventListener('keydown', handleEsc)

        return () => {
            window.removeEventListener('keydown', handleEsc)
        }
    })

    return (
        <div className="text-Neutral600 text-D-TEXT-L1-Default relative w-[200px]">
            <button className="w-full py-2 px-4 border rounded-xl flex items-center justify-between lg:hover:bg-Neutral100" onClick={() => showMenu()}>
                <span className="pr-4 flex-grow">All Products</span>
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

                <div className="absolute border rounded-xl w-full top-[110%] h-auto flex flex-col overflow-hidden" ref={listDrop}>
                    <button className="w-full py-2 lg:hover:bg-Neutral100" onClick={() => setIsOpen(false)}>Uno</button>
                    <button className="w-full py-2 lg:hover:bg-Neutral100" onClick={() => setIsOpen(false)}>Dos</button>
                    <button className="w-full py-2 lg:hover:bg-Neutral100" onClick={() => setIsOpen(false)}>Tres</button>
                </div>
            }



        </div>  
    )
}
