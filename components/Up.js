import Image from "next/image"
import upIco from "../public/assets/propios/up.svg"






export const Up = ({scrollToTop}) => {
    return (
        <button className="p-2 rounded-xl bg-Neutral600 fixed bottom-10 right-10 opacity-60 lg:hover:opacity-100" onClick={scrollToTop}>
            <span className="flex items-center justify-self-center">
                <Image
                    src={upIco}
                    height={24}
                    width={24}
                />
            </span>
        </button>
    )
}
