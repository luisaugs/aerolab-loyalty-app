import { WalkCard } from "./WalkCard"



const cardOne = {
    id: 1,
    srcPic: "/assets/images/walkthroug-1-desktop.png",
    srcIco: "/assets/icons/walkthrough-1.svg",
    title: "1 - browse",
    body: "Lalalalal lalalalal lalalalla llala"
}

const cardTwo = {
    id: 2,
    srcPic: "/assets/images/walkthroug-2-desktop.png",
    srcIco: "/assets/icons/walkthrough-2.svg",
    title: "2 - choose",
    body: "Lalalalal lalalalal lalalalla llala"
}

const cardThree = {
    id: 3,
    srcPic: "/assets/images/walkthroug-3-desktop.png",
    srcIco: "/assets/icons/walkthrough-3.svg",
    title: "3 - enjoy",
    body: "Lalalalal lalalalal lalalalla llala"
}






export const Section = () => {
    return (
        <section className="w-full h-[528px] bg-gradient-to-r from-Brand-Default-Primary to-Brand-Default-Secondary">

            <div className="sm:grid sm:grid-cols-3 relative">

                <div className="xl:absolute xl:left-[10%] xl:-bottom-[550px] xl:-rotate-3">
                    <WalkCard
                        data={cardOne}
                    />
                </div>
                <div className="xl:absolute xl:left-[50%] xl:translate-x-[-50%] xl:-bottom-[528px]">
                    <WalkCard
                        data={cardTwo}
                    />
                </div>
                <div className="xl:absolute xl:right-[10%] xl:-bottom-[550px] xl:rotate-3">
                    <WalkCard
                        data={cardThree}
                    />
                </div>

            </div>

        </section>
    )
}


{/* <div className="absolute bg-red-500 w-80 h-[600px] -rotate-3 left-1/3 "></div>
<div className="absolute bg-blue-500 w-80 h-[600px] left-[800px]"></div>
<div className="absolute bg-green-500 w-80 h-[600px] rotate-3 right-1/3"></div>     */}