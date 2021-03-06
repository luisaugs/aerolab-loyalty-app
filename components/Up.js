import Image from "next/image"
import upIco from "../public/assets/propios/up.svg"


// TW class
const btn_class = "p-2 rounded-xl bg-Neutral600 fixed bottom-10 right-10 opacity-60 lg:hover:opacity-100 z-30"
const spn_class = "flex items-center justify-self-center"


export const Up = ({scrollToTop}) => {
    return (
        <button className={btn_class} onClick={scrollToTop}>
            <span className={spn_class}>
                <Image
                    src={upIco}
                    height={24}
                    width={24}
                />
            </span>
        </button>
    )
}