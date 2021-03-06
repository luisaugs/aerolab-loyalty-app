import Image from "next/image"
import icon from '../../public/assets/icons/aeropay-1-white.svg'


// TW class
const divAeroCard_class = 'select-none rounded-lg w-[264px] h-[148px] bg-Neutral900 drop-shadow-soft text-Neutral100 text-D-TEXT-L2-All flex flex-col justify-between relative'


export const AeroCard = ({user = "Luis"}) => {

    return (
        <div className={divAeroCard_class}>
            <div className="flex justify-between px-4 pt-4">
                <span>Aerocard</span>
                <span>
                    <Image 
                        src={icon}
                    />
                </span>
            </div>
            <div className="flex justify-between px-4 pb-4">
                <span>{user}</span>
                <span>07/23</span>
            </div>
            <div className="absolute h-24 w-[264px] bg-[url('/assets/images/single-wave-pattern.svg')] bottom-0 left-0">
            </div>
        </div>
    )
}
