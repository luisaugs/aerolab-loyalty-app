import { useGlobal } from "../../context/GlobalContext"
import { WalkCard } from "./WalkCard"


const dataCards = [
    {
        id: 1,
        srcPic: "/assets/images/walkthroug-1-desktop.png",
        srcIco: "/assets/icons/walkthrough-1.svg",
    },
    {
        id: 2,
        srcPic: "/assets/images/walkthroug-2-desktop.png",
        srcIco: "/assets/icons/walkthrough-2.svg",
    },
    {
        id: 3,
        srcPic: "/assets/images/walkthroug-3-desktop.png",
        srcIco: "/assets/icons/walkthrough-3.svg",
    }
]


// TW class
const styles = [
    "dsk:absolute dsk:left-[14%] dsk:-bottom-[550px] dsk:-rotate-3",
    "dsk:absolute dsk:left-[50%] dsk:translate-x-[-50%] dsk:-bottom-[528px]",
    "dsk:absolute dsk:right-[14%] dsk:-bottom-[550px] dsk:rotate-3"
]
const section_class = "w-full sm:pt-[100px] pt-[100px] lg:pt-0 lg:h-[528px] bg-gradient-to-r from-Brand-Default-Primary/50 to-Brand-Default-Secondary/50 dsk:max-w-[1920px] dsk:mx-auto relative z-10"
const div_class = "relative flex flex-col gap-6 items-center pb-10 lg:pb-0 lg:grid lg:grid-cols-3 lg:gap-0 lg:max-w-[1024px] lg:mx-auto dsk:max-w-[1920px] lg:pt-20 dsk:pt-0 "



export const Section = () => {

    const { data } = useGlobal()


    return (
        <section className={section_class}>

            <div className={div_class}>

                <div className={styles[0]}>
                    <WalkCard
                        srcPic={dataCards[0].srcPic}
                        srcIco={dataCards[0].srcIco}
                        title={data.Section[0].card_1.title}
                        body={data.Section[0].card_1.body}
                    />
                </div>
                <div className={styles[1]}>
                    <WalkCard
                        srcPic={dataCards[1].srcPic}
                        srcIco={dataCards[1].srcIco}
                        title={data.Section[1].card_2.title}
                        body={data.Section[1].card_2.body}
                    />
                </div>
                <div className={styles[2]}>
                    <WalkCard
                        srcPic={dataCards[2].srcPic}
                        srcIco={dataCards[2].srcIco}
                        title={data.Section[2].card_3.title}
                        body={data.Section[2].card_3.body}
                    />
                </div>
            </div>

        </section>
    )
}


{/* {
    cards.map((card, i) => (
        <div className={styles[i]} key={card.id}>
            <WalkCard
                data={card}
            />
        </div>
    ))
} */}