import { NumberSelector } from "./NumberSelector";
import { DropdownList } from "./dropdown-menu/DropdownList"
import { Pager } from "./pager/Pager";
import { ProductCard } from "./products/ProductCard";
import { useEffect, useState } from "react";
import { useGlobal } from "../context/GlobalContext";
import _ from 'lodash'

export const TechProducts = ({ products }) => {

    const { data } = useGlobal()
    const [arrayProd, setArrayProd] = useState(products)
    const [order, setOrder] = useState("asc")
    const [orderActive, setOrderActive] = useState(true)
    const [type, setType] = useState("name")
    const [typeActive, setTypeActive] = useState(true)
    const [resQuery, setResQuery] = useState("")


    const handleOrder = () => {
        if (order === "asc") {
            setOrder("desc")
            setOrderActive(false)
        } else {
            setOrder("asc")
            setOrderActive(true)
        }
    }

    const handleType = () => {
        if (type === "cost") {
            setType("name")
            setTypeActive(false)
        } else {
            setType("cost")
            setTypeActive(true)
        }
    }



    const filterResult = (query) => {
        const arrayFlitered = products.filter((elem) => {

            if (query) {
                return elem.category === query
            } else {
                return elem
            }

        })
        setArrayProd(arrayFlitered)
        // console.log(arrayFlitered, "🛴🛴🛴🛴🛴🛴🛴🛴🛴")

        // console.log(arrToLowCase(arrayFlitered, "🎉🎉🎉🎉🎉🎉🎉🎉🎉"))


        const arrayOrdered =  _.orderBy(arrToLowCase(arrayFlitered), [type], [order]);
        setArrayProd(arrayOrdered)
        // console.log("🍑🍑🍑🍑🍑", _.orderBy(arrayFlitered, ['cost'], ['asc']));
    }

    const arrToLowCase = (arr) => {

        arr.map(e => {
            e.name = e.name.toLowerCase()
        })

        return arr

    }






    const handleSelection = (query) => {
        // console.log(query, "🚗🚗🚗🚗🚗🚗🚗🚗")
        switch (query) {
            case "Laptops":
                setResQuery("Laptops")
                filterResult("Laptops")
                break;
            case "Tablets":
                setResQuery("Tablets")
                filterResult("Tablets & E-readers")
                break;
            case "Cameras":
                setResQuery("Cameras")
                filterResult("Cameras")
                break;
            case "Cámaras":
                setResQuery("Cameras")
                filterResult("Cameras")
                break;

            default:
                filterResult("")
                break;
        }

    }


    useEffect(() => {
        filterResult("")
    }, [type, order, resQuery ])


    return (
        <section className="py-20 w-full max-w-[1920px] mx-auto bg-Neutral100 overflow-hidden">
            <h2 className="w-full p-10 text-center text-M-TITLES-L2 uppercase text-Neutral900 font-black bg-Neutral200 shadow-soft"><span className=" text-transparent bg-clip-text bg-gradient-to-r from-Brand-Default-Primary to-Brand-Default-Secondary" id="techProducts">{data.TechProducts.title.h2}</span> {data.TechProducts.title.span}</h2>
            <div className="w-full flex flex-col py-5 justify-center">
                <div className="flex flex-col justify-center items-center px-4 pb-4 mx-auto max-w-[1400px] md:p-4 md:w-full md:px-[30px ] xl:justify-between">
                    <div className="w-full md:flex md:flex-col md:items-start lg:justify-center xl:flex-row xl:gap-x-2 xl:items-center">
                        <div className=" flex justify-center pb-4  md:w-60 xl:pb-0 relative z-30 ">
                            <DropdownList handleSelection={handleSelection} />
                        </div>
                        <div className="py-4 border rounded-xl w-[335px] border-Neutral500/50  md:flex md:items-center md:w-full md:overflow-x-auto xl: flex-row xl:py-1 xl:border-none">
                            <div className="w-full pb-4 text text-center text-M-TEXT-L1-Default text-Neutral600  md:pb-0 md:px-2 md:min-w-[100px] xl:w-[200px] xl:text-right">
                                {data.TechProducts.sortBy}
                            </div>
                            {/* BORRAR */}
                            {/* BORRAR */}
                            {/* BORRAR */}
                            {/* BORRAR */}
                            {/* BORRAR */}
                            {/* BORRAR */}
                            {/* <div>
                                <button className="p-4 bg-red-500 rounded-2xl" onClick={() => filterResult("")}>default</button>
                                <button className="p-4 bg-red-500 rounded-2xl" onClick={() => filterResult("Laptops")}>laptops</button>
                                <button className="p-4 bg-red-500 rounded-2xl" onClick={() => filterResult("Tablets & E-readers")}>tablets</button>
                                <button className="p-4 bg-red-500 rounded-2xl" onClick={() => filterResult("Cameras")}>camera</button>
                            </div> */}
                            <div className="w-full grid grid-cols-2 justify-it  ems-center gap-1 md:flex md:gap-0 md:px-1 xl:justify-between">
                                <div>
                                    <NumberSelector
                                        value={"asc"}
                                        active={orderActive}
                                        handleClick={handleOrder}
                                    />
                                    <NumberSelector
                                        value={"desc"}
                                        active={!orderActive}
                                        handleClick={handleOrder}
                                    />
                                </div>
                                <div>
                                    <NumberSelector
                                        value={"cost"}
                                        active={typeActive}
                                        handleClick={handleType}
                                    />
                                    <NumberSelector
                                        value={"name"}
                                        active={!typeActive}
                                        handleClick={handleType}
                                    />
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="">
                    <div className="px-4 mx-auto max-w-[1400px] bg-Neutral100 flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-y-5 md:gap-0 tbt:px-5 lg:grid-cols-3 2xl:grid-cols-4">
                        {
                            arrayProd.map(p => (
                                <ProductCard
                                    key={p._id}
                                    idProduct={p._id}
                                    img={p.img.url}
                                    name={p.name}
                                    category={p.category}
                                    cost={p.cost}
                                />
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

