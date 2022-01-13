import Image from "next/image"
import close from '../public/assets/icons/cross-active.svg'
import icoOk from '../public/assets/icons/system-success.svg'
import icoError from '../public/assets/icons/system-error.svg'

//Ver variable para error para cambiar icono y elcolor del borde


export const Toast = ({ product, }) => {
    return (
        <div className="bg-white flex justify-between items-center min-w-[490px] max-w-[532px] rounded-xl border-2 border-Green-Default select-none" >

            <div className="py-6 pl-6 flex justify-center items-center">
                <span className="flex justify-center items-center">
                    <Image
                        src={icoOk}
                        width={26}
                        height={26}
                    />
                </span>
                <div className="text-D-TEXT-L1-Default text-Neutral600 pl-3">
                    <span className="text-Neutral900">
                        {!product && "Product name "}
                    </span>
                    redeemed successfully
                </div>
            </div>

            <div className="flex justify-center items-center pr-6">
                <button>
                    <span className="flex justify-center items-center">
                        <Image
                            src={close}
                            width={26}
                            height={26}
                        />
                    </span>
                </button>
            </div>
        </div>
    )
}