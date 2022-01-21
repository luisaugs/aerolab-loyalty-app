import Image from "next/image"




export const ButtonNav = (data) => {

    // console.log(data)

    return (
        <button className="select-none flex items-center justify-center py-3 px-4 border rounded-2xl lg:hover:shadow-2xl">
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
