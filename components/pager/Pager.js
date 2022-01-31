import { useState, useEffect } from "react"
import { useGlobal } from "../../context/GlobalContext"
import { PagerButton } from "./PagerButton"




export const Pager = ({ actualValue = 1, endValue = 5, handleClick }) => {

    const { data, totalPages, actPage, setActPage } = useGlobal()

    const addPage = () => {
        setActPage(prev => prev + 1)
        scroll()
    }

    const sustPage = () => {
        setActPage(prev => prev - 1)
        scroll()
    }

    const scroll = () => {
        window.scrollTo({ top: document.querySelector("#techProducts").offsetTop - 20, behavior: 'smooth' })
    }

    return (
        <div className="py-3 px-4 rounded-2xl border border-Neutral300 flex justify-center items-center w-fit">
            <div>
                <PagerButton
                    left={true}
                    disabled={actPage == 1}
                    handBtn={sustPage}
                />
            </div>
            <div className="px-6">
                <p className="text-D-TEXT-L1-Default text-Neutral600">{data.TechProducts.pager.page} <span className="text-transparent bg-clip-text bg-gradient-to-r from-Brand-Default-Primary to-Brand-Default-Secondary">{actualValue} {data.TechProducts.pager.of} {endValue}</span></p>
            </div>
            <div>
                <PagerButton
                    disabled={actPage == totalPages}
                    handBtn={addPage}
                />
            </div>
        </div>
    )
}