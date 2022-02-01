import Head from "next/head"
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
        <div className="min-w-[375px] overflow-hidden bg-Neutral100">
            <Head>
                <link rel="shortcut icon" href="/favicon.png" />
            </Head>
            {showNav &&
                <Navbar />
            }
            {children}
            <Footer />
        </div>
    )
}

{/* <meta property="og:title" content="Luis Augsburger - Web Developer">
<meta property="og:type" content="website">
<meta property="og:url" content="https://luis-augsburger.web.app/">
<meta property="og:image" content="https://luis-augsburger.web.app/assets/photo.29230ee3.jpg">
<meta name="description" content="Luis Augsburger web page. Please come and see my skills and jobs!"> */}