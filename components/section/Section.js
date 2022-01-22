import { WalkCard } from "./WalkCard"


const cards = [
    {
        id: 1,
        srcPic: "/assets/images/walkthroug-1-desktop.png",
        srcIco: "/assets/icons/walkthrough-1.svg",
        title: "1 - browse",
        body: "Lalalalal lalalalal lalalalla llala"
    },
    {
        id: 2,
        srcPic: "/assets/images/walkthroug-2-desktop.png",
        srcIco: "/assets/icons/walkthrough-2.svg",
        title: "2 - choose",
        body: "Lalalalal lalalalal lalalalla llala"
    },
    {
        id: 3,
        srcPic: "/assets/images/walkthroug-3-desktop.png",
        srcIco: "/assets/icons/walkthrough-3.svg",
        title: "3 - enjoy",
        body: "Lalalalal lalalalal lalalalla llala"
    }
]


const only = {
    id: 3,
    srcPic: "/assets/images/walkthroug-3-desktop.png",
    srcIco: "/assets/icons/walkthrough-3.svg",
    title: "3 - enjoy",
    body: "Lalalalal lalalalal lalalalla llala"
}


// TW class
const styles = [
    "dsk:absolute dsk:left-[10%] dsk:-bottom-[550px] dsk:-rotate-3",
    "dsk:absolute dsk:left-[50%] dsk:translate-x-[-50%] dsk:-bottom-[528px]",
    "dsk:absolute dsk:right-[10%] dsk:-bottom-[550px] dsk:rotate-3"
]
const section_class = "w-full sm:pt-[100px] pt-[100px] tbt:pt-0 tbt:h-[528px] bg-gradient-to-r from-Brand-Default-Primary-Hover/50 to-Brand-Default-Secondary-Hover/50 dsk:max-w-[1920px] dsk:mx-auto"
const div_class = "relative flex flex-col gap-6 items-center pb-10 tbt:pb-0 tbt:grid tbt:grid-cols-3 tbt:gap-2 tbt:max-w-[1040px] tbt:mx-auto dsk:max-w-[1920px] tbt:pt-20 dsk:pt-0"



export const Section = () => {
    return (
        <section className={section_class}>

            <div className={div_class}>

                {
                    cards.map((card, i) => (
                        <div className={styles[i]} key={card.id}>
                            <WalkCard
                                data={card}
                            />
                        </div>
                    ))
                }

            </div>

        </section>
    )
}