import Image from "next/image";
import { useEffect, useState } from "react";
import { useGlobal } from "../../context/GlobalContext";
import cross from "../../public/assets/icons/cross-default.svg"
import { CardRedemmed } from "./CardRedemmed";
import _ from "lodash"




const bkgDis_class = "fixed top-0 w-full h-full justify-center flex flex-col items-center p-10 z-[50] bg-gray-900/50 backdrop-blur-lg animate-animaOpacity duration-300"
const bkgAct_class = "fixed top-0 w-full h-full justify-center flex flex-col items-center p-10 z-[50] bg-gradient-to-r from-Neutral900 to-Neutral600 animate-animaOpacity duration-300"

const History = ({ history }) => {

    const { handleModal, modalHistory } = useGlobal()
    const [background, setBackground] = useState(bkgAct_class)
    const [histArray, setHistArray] = useState([])


    const prueba = (arr) => {
        const occ = arr.reduce((acc, curr) => {
            return acc[curr.productId] ? ++acc[curr.productId] : acc[curr.productId] = 1, acc
        }, {});

        console.log(occ, "🛴🛴🛴🛴🛴🛴🛴🛴")
    }


    useEffect(() => {
        setHistArray(history)
    }, [history])


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


    return (
        // <div className={background}>
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
            <div className="overflow-y-auto">

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
        </div>
    )
};

export default History;