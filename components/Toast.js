import { useEffect, useState } from "react"
import Image from "next/image"
import close from '../public/assets/icons/cross-active.svg'
import icoOk from '../public/assets/icons/system-success.svg'
import icoError from '../public/assets/icons/system-error.svg'
import { useGlobal } from "../context/GlobalContext"

//TW class
const ok_class = "border-2 w-[360px] h-24 p-6 rounded-xl flex justify-between items-start mx-auto sm:w-[532px] sm:h-20 border-Green-Default bg-Neutral100 animate-bounceOp"
const error_class = "border-2 w-[360px] h-24 p-6 rounded-xl flex justify-between items-start mx-auto sm:w-[532px] sm:h-20 border-Red-Default bg-Neutral100 animate-bounceOp"
const secondDiv_class = "flex items-start sm:items-center"
const icoLeft_class = "pr-3 flex items-center justify-center"
const thirdDiv_class = "text-M-TEXT-L1-Default text-Neutral600 sm:flex sm:justify-center sm:items-center"
const prod_class = "capitalize block text-M-TEXT-L1-Default text-Neutral900 sm:pr-2"
const btnClose_class = "flex items-center justify-center"


export const Toast = ({ product = "Product", failOp, deleteNoti}) => {

    const {data} = useGlobal()

    //Colors
    const [error, setError] = useState(false)
    const [nameEdited, setNameEdited] = useState(product)


    const catchError = () => {
        failOp ? setError(true) : setError(false)
    }

    useEffect(() => {
        catchError()
    }, [failOp])


    // Size icons
    const [size, setSize] = useState(false)

    const handleSize = () => {
        (window.innerWidth > 640) ? setSize(true) : setSize(false)
    }

    useEffect(() => {
        window.addEventListener("resize", handleSize)
    }, [])


    const editLongName = (product) => {
        if (product.length > 12 ) {
            const newName = product.substring(0,15) + "..."
            setNameEdited(newName)
        } else {
            setNameEdited(product)
        }
    }

    useEffect(()=>{
        editLongName(product)
    },[product])


    return (
        <div className={`${error ? error_class : ok_class}`} >

            <div className={secondDiv_class}>
                <span className={icoLeft_class}>

                    {
                        size && error && <Image src={icoError} width={32} height={32} /> ||
                        size && !error && <Image src={icoOk} width={32} height={32} /> ||
                        !size && error && <Image src={icoError} width={24} height={24} /> ||
                        !size && !error && <Image src={icoOk} width={24} height={24} />
                    }

                </span>
                <div className={thirdDiv_class}>
                    {
                        error
                            ?
                            <>
                                {/* <span className={prod_class}>
                                    Product Name
                                </span> */}
                                {data.toast.error}
                            </>

                            :
                            <>
                            <span className={prod_class}>
                                {nameEdited}
                            </span>
                            {data.toast.ok}
                        </>

                    }

                </div>
            </div>


            <button onClick={deleteNoti}>
                <span className={btnClose_class}>

                    {
                        size
                            ?
                            <Image
                                src={close}
                                width={32}
                                height={32}
                            />
                            :
                            <Image
                                src={close}
                                width={24}
                                height={24}
                            />
                    }
                </span>
            </button>

        </div>
    )
}

