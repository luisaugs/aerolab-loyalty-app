import { useEffect, useState } from "react"

export const PrimaryCard = ({ img, name, category, disabled }) => {


    // Hovering effect 
    const [border, setBorder] = useState(true)
    const [actHover, setActHover] = useState(false)


    useEffect(() => {
        setActHover(!disabled)
    }, [disabled])

    return (

        <div className="select-none bg-white w-fit flex flex-col h-[431px] mx-auto rounded-2xl relative"
            onMouseEnter={() => setBorder(false)}
            onMouseLeave={() => setBorder(true)}
        >
            <div className="w-[335px] lg:w-[320px] px-[34px] pt-16 border-[#DAE4F2] border rounded-t-2xl overflow-hidden flex flex-col flex-grow bg-white z-10 ">
                <img className="object-cover w-full mix-blend-multiply" src={img} alt={name}/>
            </div>
            <div className="border border-[#DAE4F2] border-t-0 rounded-b-2xl z-10 bg-white">
                <h3 className="capitalize text-Neutral900 text-D-TEXT-L1-Default w-full pt-4 px-6">{name}</h3>
                <p className="uppercase text-Neutral600 text-D-TEXT-L2-All w-full pb-6 px-6">{category}</p>
            </div>


            {/* Animate blur hovering */}
            {
                actHover &&
                <div className={`xl:absolute xl:p-[2px] xl:w-[326px] xl:h-[436px] xl:bg-gradient-to-r xl:from-Brand-Default-Primary xl:to-Brand-Default-Secondary xl:rounded-2xl xl:left-1/2 xl:translate-x-[-50%] xl:top-1/2 xl:translate-y-[-50%] xl:animate-animaOpacity xl:blur ${border && 'xl:hidden'}`}></div>

            }


        </div>

    )
}
