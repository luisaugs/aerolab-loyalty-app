import { hasBasePath } from "next/dist/server/router"
import Image from "next/image"




export const ButtonNav = ({data}) => {

    console.log(data)

    return (
        <button className="select-none flex items-center justify-center py-2 px-4 border">
            <span className="flex items-center justify-center">
                <Image 
                    src={data.src}
                    width={data.w}
                    height={data.h}
                />
            </span>
        </button>
    )
}
