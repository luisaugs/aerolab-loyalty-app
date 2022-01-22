import Image from "next/image"
import cross from "../../public/assets/icons/cross-active.svg"
import { AeroCard } from './AeroCard'
import { ButtonCTA } from "../ButtonCTA"
import { NumberSelector } from '../NumberSelector'
import { ButtonNav } from "../ButtonNav"
import { useState } from "react"
import { addPoints } from "../../logic/api"
import { useGlobal } from "../../context/GlobalContext"





const ico = "/assets/icons/aeropay-3.svg"



//Buttons data
const btnDark = {
    src: "/assets/propios/dark-mode.svg",
    w: 24,
    h: 24
}
const btnLight = {
    src: "/assets/propios/light-mode.svg",
    w: 24,
    h: 24
}
const btnES = {
    src: "/assets/propios/spain.svg",
    w: 24,
    h: 24
}
const btnEN = {
    src: "/assets/propios/united.svg",
    w: 24,
    h: 24
}
const btnList = {
    src: "/assets/propios/list.svg",
    w: 24,
    h: 24
}


export const ModuleAeroPay = ({ showMenu }) => {

    const { user, setPoints, lang, setLang, data } = useGlobal()
    const [pointsToAdd, setPointsToAdd] = useState(1000)
    const [activeBtn1, setActiveBtn1] = useState(true)
    const [activeBtn2, setActiveBtn2] = useState(false)
    const [activeBtn3, setActiveBtn3] = useState(false)
    const [reqPoints, setReqPoints] = useState(false)


    const setSpanish = () => {
        setLang("es")
    }

    const setEnglish = () => {
        setLang("en")
    }

    const handClickBtn1 = () => {
        setActiveBtn1(true)
        setActiveBtn2(false)
        setActiveBtn3(false)
    }

    const handClickBtn2 = () => {
        setActiveBtn1(false)
        setActiveBtn2(true)
        setActiveBtn3(false)
    }

    const handClickBtn3 = () => {
        setActiveBtn1(false)
        setActiveBtn2(false)
        setActiveBtn3(true)
    }


    const handleBtn = async () => {

        try {
            setReqPoints(true)
            let amountPoints
    
            if (activeBtn1) {
                amountPoints = 1000
            } else if (activeBtn2) {
                amountPoints = 5000
            } else if (activeBtn3) {
                amountPoints = 7500
            } else {
                amountPoints = null;
            }
    
            const dataPoints = await addPoints(amountPoints)
            setPointsToAdd(dataPoints['New Points'])
            setPoints(dataPoints['New Points'])
            setTimeout(() => {
                setReqPoints(false)
            }, 1500)
        } catch (error) {
            console.log("Error adding points...", error)
        }

    }


    return (
        <div className="w-[312px] bg-white border border-[#DAE4F2] rounded-2xl drop-shadow-soft">
            <div className="px-6 py-4 flex justify-between items-center">
                <span className="text-Neutral900">
                    {
                        data.ModuleAeroPay.header
                    }
                </span>
                <button onClick={showMenu} >
                    <span className="flex flex-col justify-center">
                        <Image
                            src={cross}
                            height={24}
                            width={24}
                        />
                    </span>
                </button>
            </div>
            <div className="p-6 border-t border-t-[#DAE4F2]">
                <div className="pb-10">
                    <AeroCard user={user} />
                </div>
                <div>
                    <div className="flex justify-between pb-6">
                        <span>
                            <NumberSelector
                                value={1000}
                                active={activeBtn1}
                                handleClick={handClickBtn1}
                            />
                        </span>
                        <span>
                            <NumberSelector
                                value={5000}
                                active={activeBtn2}
                                handleClick={handClickBtn2}
                            />
                        </span>
                        <span>
                            <NumberSelector
                                value={7500}
                                active={activeBtn3}
                                handleClick={handClickBtn3}
                            />
                        </span>
                    </div>
                    <div>
                        <span className="">
                            <ButtonCTA
                                textPre={""}
                                ico={ico}
                                textEnd={data.ModuleAeroPay.btn.textEnd}
                                handleClick={handleBtn}
                                disabled={reqPoints}
                                textDisabled={data.ModuleAeroPay.btn.textDisabled}
                            />
                        </span>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between pt-6">
                        <span>
                            <ButtonNav
                                src={btnDark.src}
                                w={btnDark.w}
                                h={btnDark.h}
                            />
                        </span>
                        <span>
                            {lang == "en"
                                ? <ButtonNav
                                    src={btnES.src}
                                    w={btnES.w}
                                    h={btnES.h}
                                    handleClick={setSpanish}
                                />
                                : <ButtonNav
                                    src={btnEN.src}
                                    w={btnEN.w}
                                    h={btnEN.h}
                                    handleClick={setEnglish}
                                />

                            }
                        </span>
                        <span>
                            <ButtonNav
                                src={btnList.src}
                                w={btnList.w}
                                h={btnList.h}
                            />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
