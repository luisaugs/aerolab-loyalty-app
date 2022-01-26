import Image from "next/image"

//TW class
const btnNav_class = "select-none flex items-center justify-center py-3 px-4 border rounded-2xl lg:hover:shadow-2xl"
const spanNav_class = "flex items-center justify-center"



export const ButtonNav = (data) => {

    return (
        <button className={btnNav_class} onClick={data.handleClick}>
            <span className={spanNav_class}>
                <Image 
                    src={data.src}
                    width={data.w}
                    height={data.h}
                />
            </span>
        </button>
    )
}