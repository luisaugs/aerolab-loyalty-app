import { useState, useEffect } from "react"
import { useGlobal } from "../../context/GlobalContext"
import { PagerButton } from "./PagerButton"




export const Pager = ({ actualValue = 1, endValue = 5, handleClick }) => {

    const { data, totalPages, actPage, setActPage } = useGlobal()
    const [disableLeft, setDisableLeft] = useState(true)
    const [disableRight, setDisableRight] = useState(false)

    const addPage = () => {
        if (actPage == totalPages) {
            setDisableRight(true)
        } else {
            setDisableRight(false)
            setActPage(prev => prev + 1)
        }
    }

    const sustPage = () => {
        if (actPage == 1) {
            setDisableLeft(true)
        } else {
            setDisableLeft(false)
            setActPage(prev => prev - 1)

        }
    }

    const statusButtons = () => {
        if (actPage == totalPages) {
            setDisableRight(true)
        } else {
            setDisableRight(false)
        }

        if (actPage == 1) {
            setDisableLeft(true)
        } else {
            setDisableLeft(false)
        }
    }

    useEffect(() => {
        // handleClick()
        statusButtons()
    }, [actPage])

    return (
        <div className="py-3 px-4 rounded-2xl border border-Neutral300 flex justify-center items-center w-fit">
            <div onClick={handleClick}>
                <PagerButton
                    left={true}
                    disabled={disableLeft}
                    handBtn={sustPage}
                />
            </div>
            <div className="px-6">
                <p className="text-D-TEXT-L1-Default text-Neutral600">{data.TechProducts.pager.page} <span className="text-transparent bg-clip-text bg-gradient-to-r from-Brand-Default-Primary to-Brand-Default-Secondary">{actualValue} {data.TechProducts.pager.of} {endValue}</span></p>
            </div>
            <div onClick={handleClick}>
                <PagerButton
                    disabled={disableRight}
                    handBtn={addPage}
                />
            </div>
        </div>
    )
}