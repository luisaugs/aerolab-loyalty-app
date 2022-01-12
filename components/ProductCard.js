import { ButtonCTA } from "./ButtonCTA"
import { PrimaryCard } from "./PrimaryCard"


export const ProductCard = ({data}) => {
    return (
        <div className="my-4 h-[506px] w-fit mx-auto flex flex-col ">
            <PrimaryCard 
                data={data}
            />
            <ButtonCTA 
                text={"Redeem"}
            />
        </div>
    )
}