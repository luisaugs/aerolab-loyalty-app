import { useEffect, useState } from "react"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

export const Layout = ({ children }) => {

    const [showNav, setShowNav] = useState(true)

    const toggleVisibility = () => {
        if (window.pageYOffset > 10) {
            setShowNav(false);
        } else {
            setShowNav(true);
        }  
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility)

        return () => window.removeEventListener("scroll", toggleVisibility)

    }, [showNav])
   
    
    return (
        <div>
            {showNav &&
                <Navbar />
            }
            {children}
            <Footer />
        </div>
    )
}