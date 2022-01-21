import Image from 'next/image'
import { getUserInfo, addPoints } from '../logic/api'
import { AeroPay } from '../components/aeropay/AeroPay'
import logoFull from '../public/assets/icons/aerolab-logo-1.svg'
import { useEffect, useState } from 'react'




// TW classes
const navbar_class = "bg-white w-full md:w-[95%] dsk:top-4 flex items-center justify-between max-w-[970px] fixed top-0 left-1/2 translate-x-[-50%] z-50 animate-animaOpacity"
const logo_class = "py-5 flex items-center justify-center"



export const Navbar = () => {

    const [user, setUser] = useState("Batman")
    const [points, setPoints] = useState("---")



    useEffect(() => {

        const dataUserInfo = async () => {
            const data = await getUserInfo()    
            setUser(data.name)
            setPoints(data.points)
        }
        dataUserInfo()

    }, [])

    return (
        <nav className={navbar_class}>
            <div className={logo_class}>
                <Image
                    src={logoFull}
                    width={126}
                    height={48}
                />
            </div>
            <div>
                <span>
                    <AeroPay user={user} points={points}/>
                </span>
            </div>
        </nav>
    )
}