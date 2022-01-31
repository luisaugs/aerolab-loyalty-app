import Image from 'next/image'
import { AeroPay } from '../components/aeropay/AeroPay'
import logoFull from '../public/assets/icons/aerolab-logo-1.svg'


// TW classes
const navbar_class = "bg-Neutral0 w-full md:w-[95%] dsk:top-4 flex items-center justify-between max-w-[970px] fixed top-0 left-1/2 translate-x-[-50%] z-50 animate-animaOpacity"
const logo_class = "py-5 flex items-center justify-center pl-5"



export const Navbar = () => {

    return (
        <nav className={navbar_class}>
            <div className={logo_class}>
                <a href="https://aerolab.co" target="_blank">
                    <Image
                        src={logoFull}
                        width={126}
                        height={48}
                    />
                </a>
            </div>
            <div className='pr-5 bg-ne'>
                <AeroPay />
            </div>
        </nav>
    )
}