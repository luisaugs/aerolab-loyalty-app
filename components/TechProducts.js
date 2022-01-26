import { NumberSelector } from "./NumberSelector";
import { DropdownList } from "./dropdown-menu/DropdownList"
import { Pager } from "./pager/Pager";
import { ProductCard } from "./products/ProductCard";
import { useEffect, useState } from "react";
import { useGlobal } from "../context/GlobalContext";
import _ from 'lodash'

export const TechProducts = ({ products }) => {

    const { data, lang, setLength, totalPages, setTotalPages, actPage, setActPage } = useGlobal()
    const [arrayProd, setArrayProd] = useState(products)
    const [order, setOrder] = useState("asc")
    const [orderActive, setOrderActive] = useState(true)
    const [type, setType] = useState("cost")
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


    const newArrayOrder = (arr) => {
        const array = _.orderBy(arrToLowCase(arr), [type], [order]);
        setArrayProd(array)
        //Pagination
        setLength(array.length)
        setTotalPages(cantPag(array))
        setActPage(1)
    }

    const filterResult = (query) => {
        const arrayFlitered = products.filter((elem) => {

            if (query) {
                return elem.category === query
            } else {
                return elem
            }

        })

        const arrayOrdered = _.orderBy(arrToLowCase(arrayFlitered), [type], [order]);
        setArrayProd(arrayOrdered)
        // Pagination
        setLength(arrayOrdered.length)
        setTotalPages(cantPag(arrayOrdered))
        setActPage(1)
    }

    const arrToLowCase = (arr) => {
        arr.map(e => {
            e.name = e.name.toLowerCase()
        })
        return arr
    }

    const handleSelection = (query) => {
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
                setResQuery("")
                filterResult("")
                break;
        }

    }


    useEffect(() => {
        filterResult("")
        newArrayOrder(arrayProd)
    }, [order, type])


    const cantPag = arr => Math.ceil(arr.length / 4)


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
                                    {lang == "en"
                                        ?
                                        <>
                                            <NumberSelector
                                                value={data.TechProducts.btnCost}
                                                active={typeActive}
                                                handleClick={handleType}
                                            />

                                            <NumberSelector
                                                value={data.TechProducts.btnType}
                                                active={!typeActive}
                                                handleClick={handleType}
                                            />
                                        </>
                                        :
                                        <>
                                            <NumberSelector
                                                value={data.TechProducts.btnCost}
                                                active={typeActive}
                                                handleClick={handleType}
                                            />

                                            <NumberSelector
                                                value={data.TechProducts.btnType}
                                                active={!typeActive}
                                                handleClick={handleType}
                                            />
                                        </>
                                    }
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="">
                    <div className="px-4 mx-auto max-w-[1400px] bg-Neutral100 flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-y-5 md:gap-0 tbt:px-5 lg:grid-cols-3 2xl:grid-cols-4">
                        {
                            arrayProd.slice((actPage - 1) * 4, actPage * 4).map(p => (
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
                    <Pager
                        actualValue={actPage}
                        endValue={totalPages}
                    />
                </div>
            </div>
        </section>
    )
}

