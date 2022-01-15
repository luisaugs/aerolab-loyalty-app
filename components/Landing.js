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
            <div className="w-3/6 lg:pt-56">
                <div className="pl-60 ">
                    <span className="uppercase text-D-TEXT-L1-All text-Neutral600 pb-2">Explore the</span>
                    <div className="font-black text-D-TITLE-L1 uppercase">
                        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-Brand-Default-Primary to-Brand-Default-Secondary">tech</h1>
                        <h1 className="text-Neutral900">zone</h1>
                    </div>
                    <h2 className="text-D-TEXT-L1-Default text-Neutral600 py-6">
                        Here you’ll be able to exchange all of your hard-earned Aeropoints and exchange them for cool tech.
                    </h2>
                </div>
                <div className="pl-60 uppercase">
                    <a href="#techProducts" className="max-w-[275px] p-4 flex justify-center items-center bg-gradient-to-r from-Brand-Default-Primary to-Brand-Default-Secondary rounded-2xl text-D-TEXT-L1-Default text-Neutral200 relative lg:hover:top-[2px]">view all products 
                        <span className="flex justify-center items-center">
                            <Image 
                                src={arrowDown}
                                width={24}
                                height={24}
                            />
                        </span>
                    </a>
                </div>
            </div>
            <div className="relative z-10 w-3/6 pt-11 px-32 ">
                <Image className="relative z-10"
                    src={heroDesk}
                />
                <div 
                className="absolute w-[60%] h-[70%] bottom-0 bg-gradient-to-r from-Brand-Default-Primary to-Brand-Default-Secondary z-[0] opacity-50 rounded-[12.5%] left-1/2 translate-x-[-50%]">
                </div>
            </div>
        </section>
    )
}