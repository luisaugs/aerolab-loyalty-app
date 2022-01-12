import Image from "next/image"
import icon from '../public/assets/icons/aeropay-1-white.svg'


export const AeroCard = () => {
    return (
        <div className='select-none rounded-lg w-[264px] h-[148px] bg-Neutral900 drop-shadow-soft text-Neutral100 text-D-TEXT-L2-All flex flex-col justify-between'>
            <div className="flex justify-between px-4 pt-4">
                <span>Aerocard</span>
                <span>
                    <Image 
                        src={icon}
                    />
                </span>
            </div>
            <div className="flex justify-between px-4 pb-4">
                <span>John Kite</span>
                <span>07/23</span>
            </div>
        </div>
    )
}
