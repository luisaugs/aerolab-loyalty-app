import Image from 'next/image'
import { AeroPay } from './AeroPay'
import logoFull from '../public/assets/icons/aerolab-logo-1.svg'
import { ButtonNav } from './ButtonNav'

const btnLang =
{
    src: "/assets/propios/spain.svg",
    w: 32,
    h: 32
}
const btnMode =
{
    src: "/assets/propios/dark-mode.svg",
    w: 32,
    h: 32
}

export const Navbar = () => {
    return (
        <nav className='bg-white w-4/5 border border-[#DAE4F2] flex items-center justify-between max-w-[970px] fixed top-4 left-1/2 translate-x-[-50%] z-50'>
            <div className='py-5 flex items-center justify-center'>
                <Image
                    src={logoFull}
                    width={126}
                    height={48}
                />
            </div>
            <div className='flex items-center justify-center py-5 '>
                <span className='pr-2'>
                    <ButtonNav
                        data={btnLang}
                    />
                </span>
                <span className='pr-2'>
                    <ButtonNav
                        data={btnMode}
                    />
                </span>
                <span className=''>
                    <AeroPay />
                </span>
            </div>
        </nav>
    )
}