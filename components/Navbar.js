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

// TW classes
const navbar_class = "bg-white w-full md:w-[95%] dsk:top-4 flex items-center justify-between max-w-[970px] fixed top-0 left-1/2 translate-x-[-50%] z-50 animate-animaOpacity"
const logo_class = "py-5 flex items-center justify-center"
const btns_class = "flex items-center justify-center py-5"


export const Navbar = () => {
    return (
        <nav className={navbar_class}>
            <div className={logo_class}>
                <Image
                    src={logoFull}
                    width={126}
                    height={48}
                />
            </div>
            <div className={btns_class}>
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