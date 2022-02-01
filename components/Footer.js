import Image from "next/image"
import { useEffect, useState } from "react"
import { useGlobal } from "../context/GlobalContext"


const ftr_class = "select-none flex items-center justify-center border-t border-t-Neutral500 shadow-top"
const div_class = "px-2 py-4"
const text_class = "text-D-TEXT-L1-Default text-Neutral600 hover:text-Neutral900"


export const Footer = () => {


    const { data } = useGlobal()
    const [isHover, setIsHover] = useState("/assets/icons/github-default.svg")
    const [isFF, setIsFF] = useState(false)




    const handleClick = () => {
        if (navigator.share) {
            navigator
                .share({
                    title: "Loyalty App Aerolab",
                    text: "Hello! Checkout my challenge! - Luis Augsburger",
                    url: "https://aerolab-loyalty-app-67jfmkabc-luisaugs.vercel.app/",
                })
                .then(() => {
                    console.log("Successfully shared");
                })
                .catch((error) => {
                    console.error("Something went wrong", error);
                });
        }
    }

    const detectBrowser = () => {
        const browser = window.navigator.userAgent
        // console.log(browser, typeof browser)
        if (browser.toLowerCase().includes("firefox")) {
            setIsFF(true)
        } else {
            setIsFF(false)
        }
    }

    useEffect(() => {
        detectBrowser()
    }, [])

    return (
        <footer className={ftr_class}>
            <div className={div_class}>
                <Image
                    className={isFF ? "cursor-default" : "cursor-pointer"}
                    src={isHover}
                    width={32}
                    height={32}
                    onMouseEnter={() => setIsHover("/assets/icons/github-active.svg")}
                    onMouseLeave={() => setIsHover("/assets/icons/github-default.svg")}
                    onClick={handleClick}
                />
            </div>
            <div className={div_class}>
                <a href="https://github.com/luisaugs/aerolab-loyalty-app" target="_blank" className={text_class}>{data.footer}</a>
            </div>
        </footer>
    )
}

