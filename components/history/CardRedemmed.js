import Image from "next/image";
import test from "../../public/assets/propios/sin_bg/AcerAspire-x1.png"




export const CardRedemmed = ({ name = "name", category = "category", src, cost, date }) => {




    return (
        <div className="min-w-max ">
            <div className="select-none m-8 bg-Neutral100 flex flex-col justify-center items-center rounded-2xl overflow-hidden sm:flex-row">
                <div className="p-4 flex flex-col justify-center items-center border-b border-Neutral500 sm:border-b-0">
                    <Image
                        src={src || test}
                        width={252}
                        height={182}
                    />
                </div>
                <div className="bg-Neutral100 w-full sm:border-l sm:border-Neutral500">
                    <h3 className="capitalize text-Neutral900 text-D-TEXT-L1-Default w-full pt-4 text-center px-4">{name}</h3>
                    <p className="uppercase text-Neutral600 text-D-TEXT-L2-All w-full pt-4 px-4 text-center">{category}</p>
                    <p className="uppercase text-Neutral600 text-D-TEXT-L2-All w-full py-4 px-4">Precio: {cost}</p>
                    <p className="uppercase text-Neutral600 text-D-TEXT-L2-All w-full pb-6 px-4">Fecha: {date}</p>
                </div>
            </div>
        </div>

    )
};
