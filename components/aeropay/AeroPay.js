import Image from "next/image"
import logo from "../public/assets/icons/aeropay-1.svg"
import chevronDef from "../public/assets/icons/chevron-default.svg"
// import chevronAct from "../public/assets/icons/chevron-active.svg"



export const AeroPay = (value) => {
    return (

        <button className="select-none text-D-TEXT-L1-Default px-2 py-1 border border-[#DAE4F2] rounded-2xl flex flex-row justify-center items-center bg-white shadow-soft mr-1">
            <span className="flex flex-row justify-center items-center pr-4">
                <span className="px-2 flex flex-grow justify-center">
                    <Image
                        src={logo}
                        width={24}
                        height={24}
                    />
                </span>
                <span className="text-Neutral600">1000</span>
            </span>

            <span className="rotate-90 pt-3">
                <Image
                    src={chevronDef}
                    width={20}
                    height={20}
                />
            </span>
        </button>

    )
}
