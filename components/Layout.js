import Head from "next/head"
import { useEffect, useState } from "react"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

const imgSrc = "/assets/propios/logo-app.png"


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
                <link rel="shortcut icon" href="/favicon.png"/>
                <meta property="og:title" content="Loyalty App - Aerolab"></meta>
                <meta property="og:url" content="https://aerolab-loyalty-app.vercel.app/"></meta>
                <meta property="og:image" content="https://aerolab-loyalty-app.vercel.app/assets/propios/logo-app.png"></meta>
                <meta name="description" content="Challenge Aerolab made by Luis Augsburger"></meta>
                <title>Loyalty App</title>
            </Head>
            {showNav &&
                <Navbar />
            }
            {children}
            <Footer />
        </div>
    )
}
