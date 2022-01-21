import { ButtonCTA } from "../ButtonCTA"
import { PrimaryCard } from "./PrimaryCard"


const btn1 = {
    textPre: "hola",
    ico: "/assets/icons/aeropay-1-white.svg",
    textEnd: "100",
    width: 150,
    height: 100
}


// TW class
const mainDiv_class = "my-4 h-[506px] mx-auto flex flex-col"
const btnCTA_class = "w-full pt-4"

export const ProductCard = (data) => {
    
    // console.log(data)

    return (
        <div className={mainDiv_class}>
            <PrimaryCard
                img={data.img}
                name={data.name}
                category={data.category}
            />
            <div className={btnCTA_class}>
                <ButtonCTA
                    textPre={btn1.textPre}
                    ico={btn1.ico}
                    textEnd={btn1.textEnd}
                />
            </div>
        </div>
    )
}