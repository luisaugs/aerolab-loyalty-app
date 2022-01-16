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
        <section className="relative pb-80 select-none flex flex-col dsk:flex-row max-w-[1920px] mx-auto w-[100%] dsk:pb-52 bg-white border-2 border-red-600">

            {/* TEXT */}
            <div className="w-full max-w-[289px] mx-auto dsk:max-w-[50%] pt-[168px] dsk:w-3/6 dsk:pt-56">
                <div className="dsk:pl-60">
                    <span className="block text-center dsk:inline uppercase text-M-TEXT-L1-All dsk:text-D-TEXT-L1-All text-Neutral600 pb-2">Explore the</span>
                    <div className="font-black text-center dsk:text-left text-M-TITLES-L1 dsk:text-D-TITLE-L1 uppercase">
                        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-Brand-Default-Primary to-Brand-Default-Secondary">tech</h1>
                        <h1 className="text-Neutral900">zone</h1>
                    </div>
                    <h2 className="text-M-TEXT-L1-Default text-center dsk:text-D-TEXT-L1-Default text-Neutral600 py-6 dsk:text-left">
                        Here you’ll be able to exchange all of your hard-earned Aeropoints and exchange them for cool tech.
                    </h2>
                </div>

                {/* LINK */}
                <div className="dsk:pl-60 uppercase">
                    <a href="#techProducts" className="max-w-full dsk:max-w-[275px] p-4 flex justify-around items-center bg-gradient-to-r from-Brand-Default-Primary to-Brand-Default-Secondary rounded-2xl dsk:text-D-TEXT-L1-Default text-Neutral200 relative 2xl:hover:top-[2px]">view all products
                        <span className="flex justify-center items-center animate-bounce">
                            <Image
                                src={arrowDown}
                                width={24}
                                height={24}
                            />
                        </span>
                    </a>
                </div>
            </div>


            {/* IMAGE AND BG */}
            <div className="border border-emerald-600 absolute  sm:w-[500px] sm:h-[500px] -bottom-40 z-0 md:w-[580px] md:h-[518px] left-1/2 translate-x-[-50%] dsk:left-0 dsk:translate-x-0 dsk:relative dsk:bottom-0 dsk:h-auto dsk:z-10 dsk:w-3/6 dsk:pt-11 dsk:px-32">
                <Image className="relative z-10"
                    src={heroDesk}
                    layout="fill"
                />
                <div
                    className="hidden dsk:block dsk:absolute w-[60%] h-[70%] bottom-0 bg-gradient-to-r from-Brand-Default-Primary/50 to-Brand-Default-Secondary/50 z-[0] rounded-[12.5%] left-1/2 translate-x-[-50%] pr-28 ">
                </div>
            </div>
        </section>

    )
}