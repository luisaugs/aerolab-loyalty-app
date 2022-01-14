import Image from "next/image"
import heroDesk from "../public/assets/images/hero-desktop.png"
import arrowDown from "../public/assets/icons/arrow-down.svg"
// import { ButtonCTA } from "./ButtonCTA"




const btnLanding = {
    textPre: "VIEW ALL PRODUCTS",
    ico: "/assets/icons/arrow-down.svg",
    textEnd: "",
    width: 318,
    height: 80
}






export const Landing = () => {
    return (
        <section className="select-none max-w-[1920px] w-[100%] flex border bg-white">
            <div className="border border-emerald-500">
                <div className="">
                    <span className="border border-gray-900 uppercase text-D-TEXT-L1-All text-Neutral600">Explore the</span>
                    <h1 className="border border-gray-900">tech</h1>
                    <h1 className="border border-gray-900">zone</h1>
                    <h2 className="border border-gray-900">
                        Here you’ll be able to exchange all of your hard-earned Aeropoints and exchange them for cool tech.
                    </h2>
                </div>
                <div>

                </div>
            </div>
            <div className="border border-orange-500  relative z-10">
                <Image className="relative z-10"
                    src={heroDesk}
                    // layout="fill"
                />
                <div className="absolute w-[80%] h-[80%] bottom-0 bg-gradient-to-r from-Brand-Default-Primary to-Brand-Default-Secondary translate-x-[12.5%] z-[0] opacity-90 rounded-[12.5%]">
                </div>
            </div>
        </section>
    )
}