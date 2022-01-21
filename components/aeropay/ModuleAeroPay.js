import Image from "next/image"
import cross from "../../public/assets/icons/cross-active.svg"
import { AeroCard } from './AeroCard'
import { ButtonCTA } from "../ButtonCTA"
import { NumberSelector } from '../NumberSelector'
import { ButtonNav } from "../ButtonNav"
import { useEffect, useState } from "react"
import { addPoints } from "../../logic/api"





const ico = "/assets/icons/aeropay-3.svg"



//Borrar
const btnMode = {
    src: "/assets/propios/dark-mode.svg",
    w: 24,
    h: 24
}
const btnLang = {
    src: "/assets/propios/spain.svg",
    w: 24,
    h: 24
}
const btnList = {
    src: "/assets/propios/list.svg",
    w: 24,
    h: 24
}


export const ModuleAeroPay = ({showMenu, user}) => {

    const [pointsToAdd, setPointsToAdd] = useState(1000)
    const [activeBtn1, setActiveBtn1] = useState(true)
    const [activeBtn2, setActiveBtn2] = useState(false)
    const [activeBtn3, setActiveBtn3] = useState(false)

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

        let amountPoints

        if (activeBtn1) {
            amountPoints = 1000
        }   else if (activeBtn2){
            amountPoints = 5000
        }   else if ( activeBtn3) {
            amountPoints = 7500
        } else {
            amountPoints = null;
        }

        const dataPoints = await addPoints(amountPoints)
        console.log(dataPoints, "🎉🎉🎉🎉🎉🎉🎉🎉")
        setPointsToAdd(dataPoints['New Points'])

    }




    useEffect(()=>{




    }, )


    return (
        <div className="w-[312px] bg-white border border-[#DAE4F2] rounded-2xl drop-shadow-soft">
            <div className="px-6 py-4 flex justify-between items-center">
                <span className="text-Neutral900">
                    Add Balance
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
                    <AeroCard user={user}/>
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
                                textEnd={"Add Points"}
                                handleClick={handleBtn}
                            />
                        </span>
                    </div>
                </div>
                <div>
                <div className="flex justify-between pt-6">
                        <span>
                            <ButtonNav
                                src={btnMode.src}
                                w={btnMode.w}
                                h={btnMode.h}
                            />
                        </span>
                        <span>
                            <ButtonNav
                                src={btnLang.src}
                                w={btnLang.w}
                                h={btnLang.h}
                            />
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
