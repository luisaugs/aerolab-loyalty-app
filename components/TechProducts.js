import { NumberSelector } from "./NumberSelector";
import { DropdownList } from "./dropdown-menu/DropdownList"
import { Pager } from "./pager/Pager";
import { ProductCard } from "./products/ProductCard";



const lachota = {
    img: "/assets/propios/mouse.png",
    name: "mouse gamer",
    category: "pc"
}

const produc = [
    {
        img: "/assets/propios/mouse.png",
        name: "mouse gamer",
        category: "pc"
    },
    {
        img: "/assets/propios/mouse.png",
        name: "mouse gamer",
        category: "pc"
    },
    {
        img: "/assets/propios/mouse.png",
        name: "mouse gamer",
        category: "pc"
    },
    {
        img: "/assets/propios/mouse.png",
        name: "mouse gamer",
        category: "pc"
    },
    {
        img: "/assets/propios/mouse.png",
        name: "mouse gamer",
        category: "pc"
    },
    {
        img: "/assets/propios/mouse.png",
        name: "mouse gamer",
        category: "pc"
    },
    {
        img: "/assets/propios/mouse.png",
        name: "mouse gamer",
        category: "pc"
    },
    {
        img: "/assets/propios/mouse.png",
        name: "mouse gamer",
        category: "pc"
    },
    {
        img: "/assets/propios/mouse.png",
        name: "mouse gamer",
        category: "pc"
    },
    {
        img: "/assets/propios/mouse.png",
        name: "mouse gamer",
        category: "pc"
    },
    {
        img: "/assets/propios/mouse.png",
        name: "mouse gamer",
        category: "pc"
    },
    {
        img: "/assets/propios/mouse.png",
        name: "mouse gamer",
        category: "pc"
    },
    {
        img: "/assets/propios/mouse.png",
        name: "mouse gamer",
        category: "pc"
    },
    {
        img: "/assets/propios/mouse.png",
        name: "mouse gamer",
        category: "pc"
    },
    {
        img: "/assets/propios/mouse.png",
        name: "mouse gamer",
        category: "pc"
    },
    {
        img: "/assets/propios/mouse.png",
        name: "mouse gamer",
        category: "pc"
    },
    {
        img: "/assets/propios/mouse.png",
        name: "mouse gamer",
        category: "pc"
    },
    {
        img: "/assets/propios/mouse.png",
        name: "mouse gamer",
        category: "pc"
    },
    {
        img: "/assets/propios/mouse.png",
        name: "mouse gamer",
        category: "pc"
    },
    {
        img: "/assets/propios/mouse.png",
        name: "mouse gamer",
        category: "pc"
    },
    {
        img: "/assets/propios/mouse.png",
        name: "mouse gamer",
        category: "pc"
    },
    {
        img: "/assets/propios/mouse.png",
        name: "mouse gamer",
        category: "pc"
    },
    {
        img: "/assets/propios/mouse.png",
        name: "mouse gamer",
        category: "pc"
    },
    {
        img: "/assets/propios/mouse.png",
        name: "mouse gamer",
        category: "pc"
    },
    {
        img: "/assets/propios/mouse.png",
        name: "mouse gamer",
        category: "pc"
    },
    {
        img: "/assets/propios/mouse.png",
        name: "mouse gamer",
        category: "pc"
    },
    {
        img: "/assets/propios/mouse.png",
        name: "mouse gamer",
        category: "pc"
    }

]


export const TechProducts = () => {
    return (
        <section className="py-20 w-full max-w-[1920px] mx-auto bg-Neutral100 overflow-hidden">
            <h2 className="w-full p-10 text-center text-M-TITLES-L2 uppercase text-Neutral900 font-black bg-Neutral200 shadow-soft"><span className=" text-transparent bg-clip-text bg-gradient-to-r from-Brand-Default-Primary to-Brand-Default-Secondary" id="techProducts">tech</span> products</h2>
            <div className="w-full flex flex-col py-5 justify-center">
                <div className="flex flex-col justify-center items-center px-4 pb-4 mx-auto max-w-[1400px] md:p-4 md:w-full md:px-8 xl:justify-between">
                    <div className="w-full md:flex md:flex-col md:items-start lg:justify-center xl:flex-row xl:gap-x-2 xl:items-center">
                        <div className=" flex justify-center pb-4  md:w-60 xl:pb-0 relative z-50">
                            <DropdownList />
                        </div>
                        <div className="py-4 border rounded-xl w-[335px] border-Neutral500/50  md:flex md:items-center md:w-full md:overflow-x-auto xl: flex-row xl:py-1 xl:border-none">
                            <div className="w-full pb-4 text text-center text-M-TEXT-L1-Default text-Neutral600  md:pb-0 md:px-2 md:min-w-[100px] xl:w-[200px] xl:text-right">
                                Sort by:
                            </div>
                            <div className="w-full grid grid-cols-2 justify-items-center gap-1 md:flex md:gap-0 md:px-1 xl:justify-between">
                                <NumberSelector />
                                <NumberSelector />
                                <NumberSelector />
                                <NumberSelector />
                                <NumberSelector />
                                <NumberSelector />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="">
                    <div className="px-4 mx-auto max-w-[1400px] bg-Neutral100 flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-y-5 md:gap-0 tbt:px-5 lg:grid-cols-3 2xl:grid-cols-4">
                        {
                            produc.map(() => (
                                <ProductCard key={Math.random()} img={lachota.img} name={lachota.name} category={lachota.category} />
                            ))
                        }
                    </div>
                </div>
                <div className="py-16 flex items-center justify-center">
                    <Pager />
                </div>
            </div>
        </section>
    )
}

