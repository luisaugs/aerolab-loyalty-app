import Image from "next/image"
import arrowDown from "../public/assets/icons/arrow-down.svg"
import { useGlobal } from "../context/GlobalContext"


export const Landing = () => {

    const { data } = useGlobal()

    const scroll = () => {
        window.scrollTo({ top: document.querySelector("#techProducts").offsetTop - 20, behavior: 'smooth' })
    }

    return (
        <section className="relative pb-80 select-none flex flex-col dsk:flex-row max-w-[1920px] mx-auto w-[100%] dsk:pb-52 bg-white">
            <img className="absolute top-[138px] w-[1920px] z-0" src="/assets/propios/waves.svg" alt="waves"/>
            {/* TEXT */}
            <div className="w-full max-w-[289px] mx-auto dsk:max-w-[50%] pt-[168px] dsk:w-3/6 dsk:pt-56 dsk:ml-5 relative z-10">
                <div className="dsk:pl-60">
                    <span className="block text-center dsk:inline uppercase text-M-TEXT-L1-All dsk:text-D-TEXT-L1-All text-Neutral600 pb-2">{data.Landing.span}</span>
                    <div className="font-black text-center dsk:text-left text-M-TITLES-L1 dsk:text-D-TITLE-L1 uppercase">
                        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-Brand-Default-Primary to-Brand-Default-Secondary" translate="no">tech</h1>
                        <h1 className="text-Neutral900" translate="no">zone</h1>
                    </div>
                    <h2 className="text-M-TEXT-L1-Default text-center dsk:text-D-TEXT-L1-Default text-Neutral600 py-6 dsk:text-left">
                        {data.Landing.def_text}
                    </h2>
                </div>

                {/* LINK */}
                <div className="dsk:pl-60 uppercase">
                    <a onClick={scroll} className="max-w-full dsk:max-w-[275px] p-4 flex justify-around items-center bg-gradient-to-r from-Brand-Default-Primary to-Brand-Default-Secondary rounded-2xl dsk:text-D-TEXT-L1-Default text-Neutral200 relative 2xl:hover:top-[2px] z-10 cursor-pointer ">{data.Landing.btn}
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
            <div className="absolute -bottom-[150px] sm:-bottom-40 dsk:-bottom-0 z-0 h-[518px] w-[580px] left-1/2 translate-x-[-50%] dsk:left-0 dsk:translate-x-0 dsk:relative dsk:h-auto dsk:z-10 dsk:w-3/6 dsk:pt-11 dsk:px-32 dsk:mr-16">

                <img className="relative z-10" src="/assets/images/hero-desktop.png" />
                <div
                    className="hidden dsk:block dsk:absolute w-[60%] h-[70%] bottom-0 bg-gradient-to-r from-Brand-Default-Primary/50 to-Brand-Default-Secondary/50 z-[0] rounded-[12.5%] left-1/2 translate-x-[-50%] pr-28 dsk:mb-[20px]">
                </div>
            </div>
        </section>

    )
}