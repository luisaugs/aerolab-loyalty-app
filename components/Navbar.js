import Image from 'next/image'
import { AeroPay } from './AeroPay'
import logoFull from '../public/assets/icons/aerolab-logo-1.svg'




export const Navbar = () => {
    return (
        <nav className='bg-white w-4/5 border border-[#DAE4F2] flex items-center justify-between max-w-[970px] fixed top-4 left-1/2 translate-x-[-50%]'>
            <div className='py-10 flex items-center justify-center'>
                <Image 
                    src={logoFull}
                    width={126}
                    height={48}
                />
            </div>
            <div className='flex items-center justify-center py-10'>
                <button>Lang</button>
                <button>Dark</button>
                <span>
                    <AeroPay />
                </span>
            </div>
        </nav>
    )
}