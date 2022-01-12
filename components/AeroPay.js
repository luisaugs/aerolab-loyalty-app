import Image from "next/image"
import logo from "../public/assets/icons/aeropay-1.svg"
import chevronDef from "../public/assets/icons/chevron-default.svg"
import chevronAct from "../public/assets/icons/chevron-active.svg"



export const AeroPay = (value) => {
    return (

        <button className="select-none text-D-TEXT-L1-Default min-w-[156px] min-h-[48px] border border-[#DAE4F2] rounded-2xl flex flex-row justify-center items-center bg-white shadow-soft">
            <span className="flex flex-row justify-center items-center pr-4">
                <span className="px-2 flex flex-grow justify-center">
                    <Image
                        src={logo}
                        width={32}
                        height={32}
                    />
                </span>
                <span className="">1000</span>
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
