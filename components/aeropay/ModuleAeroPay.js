import Image from "next/image"
import cross from "../public/assets/icons/cross-active.svg"
import { AeroCard } from './AeroCard'
import { ButtonCTA } from "../ButtonCTA"
import { NumberSelector } from '../NumberSelector'




export const ModuleAeroPay = () => {
    return (
        <div className="w-[312px] bg-white border border-[#DAE4F2] rounded-2xl drop-shadow-soft">
            <div className="px-6 py-4 flex justify-between items-center">
                <span className="text-Neutral900">
                    Add Balance
                </span>
                <button>
                    <span className="flex flex-col justify-center">
                        <Image
                            src={cross}
                            height={24}
                            width={24}
                        />
                    </span>
                </button>
            </div>
            <div className="p-6 border-t border-t-[#DAE4F2]">
                <div className="pb-10">
                    <AeroCard />
                </div>
                <div className="">
                    <div className="flex justify-between pb-6">
                        <span>
                            <NumberSelector />
                        </span>
                        <span>
                            <NumberSelector />
                        </span>
                        <span>
                            <NumberSelector />
                        </span>
                    </div>
                    <div>
                        <span className="">
                            <ButtonCTA />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
