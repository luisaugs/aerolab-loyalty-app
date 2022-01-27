import Image from "next/image"
import chevronActive from "../../public/assets/icons/chevron-active.svg"
import chevronDisabled from "../../public/assets/icons/chevron-default.svg"




export const PagerButton = ({ disabled, handBtn, left }) => {


    return (
        <button className={`p-2 rounded-lg ${disabled ? "bg-Neutral200" : "bg-Brand-Light lg:hover:bg-Brand-Light-2"}`} disabled={disabled} onClick={handBtn} >
            <span className={`flex items-center justify-center ${left ? "rotate-180" : ""}`}>
                <Image
                    src={(disabled ? chevronDisabled : chevronActive)}
                    height={24}
                    width={24}
                />
            </span>
        </button>
    )
}