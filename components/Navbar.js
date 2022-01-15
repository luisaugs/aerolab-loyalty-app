import Image from 'next/image'
import { AeroPay } from '../components/aeropay/AeroPay'
import logoFull from '../public/assets/icons/aerolab-logo-1.svg'
import { ButtonNav } from './ButtonNav'

const btnLang =
{
    src: "/assets/propios/spain.svg",
    w: 24,
    h: 24
}
const btnMode =
{
    src: "/assets/propios/dark-mode.svg",
    w: 24,
    h: 24
}

export const Navbar = () => {
    return (
        <nav className='bg-white md:w-[95%] xl:w-4/5 border border-[#DAE4F2] flex items-center justify-between max-w-[970px] fixed md:top-0 lg:top-4 left-1/2 translate-x-[-50%] z-50 animate-animaOpacity'>
            <div className='py-5 flex items-center justify-center'>
                <Image
                    src={logoFull}
                    width={126}
                    height={48}
                />
            </div>
            <div className='flex items-center justify-center py-5 '>
                {/* <span className='pr-2'>
                    <ButtonNav
                        data={btnLang}
                    />
                </span>
                <span className='pr-2'>
                    <ButtonNav
                        data={btnMode}
                    />
                </span> */}
                <span className=''>
                    <AeroPay />
                </span>
            </div>
        </nav>
    )
}