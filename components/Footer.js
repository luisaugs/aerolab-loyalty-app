import Image from "next/image"
import { useState } from "react"
import { useGlobal } from "../context/GlobalContext"


const ftr_class = "select-none flex items-center justify-center border-t border-t-Neutral500 shadow-top"
const div_class = "px-2 py-4"
const text_class = "text-D-TEXT-L1-Default text-Neutral600 hover:text-Neutral900"


export const Footer = () => {


    const { data } = useGlobal()
    const [isHover, setIsHover] = useState("/assets/icons/github-default.svg")
      
    return (
        <footer className={ftr_class}>
            <div className={div_class}>
                <Image
                    src={isHover}
                    width={32}
                    height={32}
                    onMouseEnter={() => setIsHover("/assets/icons/github-active.svg")}
                    onMouseLeave={() => setIsHover("/assets/icons/github-default.svg")}
                />
            </div>
            <div className={div_class}>
                <a href="https://github.com/luisaugs/aerolab-loyalty-app" target="_blank" className={text_class}>{data.footer}</a>
            </div>
        </footer>
    )
}

