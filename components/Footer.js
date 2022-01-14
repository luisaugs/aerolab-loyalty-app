import Image from "next/image"
import { useState } from "react"


export const Footer = () => {

    const [isHover, setIsHover] = useState("/assets/icons/github-default.svg")
      
    return (
        <footer className="select-none flex items-center justify-center">
            <div className="px-2 py-4">
                <Image
                    src={isHover}
                    width={32}
                    height={32}
                    onMouseEnter={() => setIsHover("/assets/icons/github-active.svg")}
                    onMouseLeave={() => setIsHover("/assets/icons/github-default.svg")}
                />
            </div>
            <div className="px-2 py-4">
                <a href="https://github.com/luisaugs/aerolab-loyalty-app" target="_blank" className="text-D-TEXT-L1-Default text-Neutral600">View this repository</a>
            </div>
        </footer>
    )
}