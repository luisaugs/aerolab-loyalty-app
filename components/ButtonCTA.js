import Image from 'next/image'
import logo from '../public/assets/icons/aeropay-1-white.svg'


export const ButtonCTA = ({ text, value }) => {
    return (
        <button className="max-w-xs select-none bg-gradient-to-r from-Brand-Default-Primary to-Brand-Default-Secondary rounded-[16px] text-white w-full lg:hover:bg-gradient-to-r lg:hover:from-Brand-Default-Primary-Hover lg:hover:to-Brand-Default-Secondary-Hover flex justify-center items-center py-3 shadow-soft mx-auto">
            <span className='pr-2 text-M-TEXT-L1-Default font-semibold'>{text}</span>
            <span className="flex flex-col justify-center items-center pr-2">
                <Image
                    src={logo}
                    width={24}
                    height={24}
                />
            </span>
            <span className='text-M-TEXT-L1-Default font-semibold'>
                {
                    !value && (
                        10000
                    )
                }
            </span>
        </button>
    )
}