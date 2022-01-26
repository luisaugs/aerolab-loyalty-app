import { useEffect, useState } from "react"
import { useGlobal } from "../../context/GlobalContext"
import { ButtonCTA } from "../ButtonCTA"
import { PrimaryCard } from "./PrimaryCard"


const ico = "/assets/icons/aeropay-3.svg"

// TW class
const mainDiv_class = "my-4 h-[506px] mx-auto flex flex-col"
const btnCTA_class = "w-full pt-4"

export const ProductCard = ({ idProduct, img, name, category, cost }) => {

    const { data, points, redeemPoints } = useGlobal()
    const [price, setPrice] = useState(null)
    const [inProcess, setInProcess] = useState(false)
    const [disabled, setDisabled] = useState(false)


    const handleClick = async () => {
        try {
            setInProcess(true)
            const data = await redeemPoints(idProduct, cost)
            if (data.includes("successfully")) {
                setInProcess(false)
                //Poner toast success
                //Poner toast success
                //Poner toast success
                //Poner toast success
                //Poner toast success
                //Poner toast success
            }
            if (data === "User don't have enogh points") {
                setInProcess(false)
                //Poner toast error
                //Poner toast error
                //Poner toast error
                //Poner toast error
                //Poner toast error
                //Poner toast error
            }
        } catch (error) {
            console.log(error, "Error during redeem")
        }

    }


    const updatePrice = () => {
        if(Number.isNaN(points)) return
        if (points >= cost) {
            setPrice(cost)
            setDisabled(false)
        } else {
            setPrice(cost - points)
            setDisabled(true)
        }
    }


    useEffect(()=>{
        updatePrice()
    },[inProcess, points])



    return (
        <div className={mainDiv_class}>
            <PrimaryCard
                img={img}
                name={name}
                category={category}
            />
            <div className={btnCTA_class}>
                {inProcess
                    ? <ButtonCTA
                        textPre={""}
                        textEnd={""}
                        textPreDisabled={data.TechProducts.buttonProcessing.textPreDisabled}
                        textEndDisabled={""}
                        ico={ico}
                        disabled={inProcess}
                    />
                    : <ButtonCTA
                        textPre={data.TechProducts.button.textPre}
                        textEnd={price}
                        textPreDisabled={data.TechProducts.button.textPreDisabled}
                        textEndDisabled={price}
                        ico={ico}
                        disabled={disabled}
                        handleClick={handleClick}
                    />
                }
            </div>
        </div>
    )
}