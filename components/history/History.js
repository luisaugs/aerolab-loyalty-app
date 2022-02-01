import Image from "next/image";
import { useEffect, useState } from "react";
import { useGlobal } from "../../context/GlobalContext";
import cross from "../../public/assets/propios/cross-default.svg"
import arrow from "../../public/assets/propios/arrow-d.svg"
import { CardRedemmed } from "./CardRedemmed";
import { getUserHistory } from "../../logic/api"





const bkgDis_class = "fixed top-0 w-full h-full justify-center flex flex-col items-center p-10 z-[50] bg-gray-900/50 backdrop-blur-lg animate-animaOpacity duration-300"
const bkgAct_class = "fixed top-0 w-full h-full justify-center flex flex-col items-center p-10 z-[50] bg-gradient-to-r from-Neutral900 to-Neutral600 animate-animaOpacity duration-300"

const History = () => {

    const { data, handleModal, modalHistory } = useGlobal()
    const [background, setBackground] = useState(bkgAct_class)
    const [histArray, setHistArray] = useState([])
    const [showArrow, setShowArrow] = useState(true)


    const gettingHistory = async() => {
        try {
            const array = await getUserHistory()
            setHistArray(array)

        } catch (error) {
            console.log("Error getting history", error)
        }
    }

    useEffect(() => {
        gettingHistory()
    }, [])


    //esc to exit
    const handleEsc = (e) => {
        if (e.keyCode === 27) {
            handleModal(false);
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleEsc)

        return () => {
            window.removeEventListener('keydown', handleEsc)
        }
    })


    const detectBrowser = () => {
        const browser = window.navigator.userAgent
        // console.log(browser, typeof browser)
        if (browser.toLowerCase().includes("firefox")) {
            setBackground(bkgAct_class)
        } else {
            setBackground(bkgDis_class)
        }
    }    //block scroll on body on modal active


    useEffect(() => {
        detectBrowser()
        modalHistory && (document.body.style.overflow = 'hidden');
    }, []);




    //arrow bottom
    const handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        bottom ? setShowArrow(false) : setShowArrow(true)
    }


    return (
        <div className={background}>
            <button className="absolute top-4 right-4" onClick={handleModal}>
                <span className="flex items-center justify-center">
                    <Image
                        src={cross}
                        height={32}
                        width={32}
                    />
                </span>
            </button>
            <h2
                className="text-M-TEXT-L1-Default text-Neutral100 uppercase">
                {data.history.header}
            </h2>
            <div className="overflow-y-auto" onScroll={handleScroll}>
                {
                    histArray &&
                    histArray.slice(-15).reverse().map(e => (
                        <CardRedemmed
                            key={Math.random().toString(36).slice(2)}
                            name={e.name}
                            category={e.category}
                            src={e.img.url}
                            cost={e.cost}
                            date={e.createDate}
                        />
                    ))
                }
            </div>

            {

                showArrow
                    ?
                    <div className="absolute bottom-2 animate-bounce opacity-25">
                        <Image
                            src={arrow}
                            width={32}
                            height={32}
                        />
                    </div>
                    :
                    <div className="absolute bottom-2 rotate-180 animate-animaOpacity">
                        <Image
                            src={arrow}
                            width={32}
                            height={32}
                        />
                    </div>

            }
        </div>
    )
};

export default History;