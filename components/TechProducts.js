import { DropdownList } from "./dropdown-menu/DropdownList"
import { Pager } from "./pager/Pager";
import { ProductCard } from "./products/ProductCard";
import { useEffect, useRef, useState } from "react";
import { useGlobal } from "../context/GlobalContext";
import { PropSelector } from "./PropSelector"
import _ from 'lodash'

export const TechProducts = ({ products }) => {

    const { data, lang, totalPages, setTotalPages, actPage, setActPage } = useGlobal()
    const [arrayProd, setArrayProd] = useState(products)
    const [order, setOrder] = useState("asc")
    const [orderActive, setOrderActive] = useState(true)
    const [type, setType] = useState("cost")
    const [typeActive, setTypeActive] = useState(true)
    const [resQuery, setResQuery] = useState("")
    const [items, setItems] = useState(null)
    const interLink = useRef()


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
        resize()
        filterResult("")
        newArrayOrder(arrayProd)
    }, [order, type, items])


    const cantPag = arr => Math.ceil(arr.length / items)

    const resize = () => {
        if (window.innerWidth < 1024) {
            setItems(4)
        } else if (window.innerWidth >= 1024 && window.innerWidth < 1900) {
            setItems(6)
        } else {
            setItems(8)
        }
    }

    useEffect(()=>{
        window.addEventListener('resize', resize)
        return () => {
            window.removeEventListener('resize', resize)
        }
    },[totalPages])


    // console.log("Total Paginas: ",totalPages,"Items por pag: ", items)

    const handleClick = () => {
        interLink.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <section className="py-20 w-full max-w-[1920px] mx-auto bg-Neutral100 overflow-hidden">
            <h2 className="w-full p-10 text-center text-M-TITLES-L2 uppercase text-Neutral900 font-black shadow-soft"><span className=" text-transparent bg-clip-text bg-gradient-to-r from-Brand-Default-Primary to-Brand-Default-Secondary" id="techProducts" ref={interLink} >{data.TechProducts.title.h2}</span> {data.TechProducts.title.span}</h2>
            <div className="w-full flex flex-col py-5 justify-center">

                {/* HEADER FROM GRID */}
                <div className=" flex flex-col justify-center items-center px-4 pb-4 mx-auto lg:max-w-[1024px] lg:w-full lg:justify-between lg:pb-0 dsk:max-w-[1464px] dsk:flex-row dsk:px-7">

                    <div className="lg:w-full lg:flex lg:flex-row lg:items-center dsk:w-[1000px]">
                        <div className="relative z-30 mb-5 lg:mb-0">
                            <DropdownList handleSelection={handleSelection} />
                        </div>
                        {/* container btns */}
                        <div className="border py-4 rounded-xl w-[335px] border-Neutral500/50 lg:flex lg:items-center lg:w-full lg:border-none dsk:w-[800px]">
                            {/* text */}
                            <div className="w-full pb-4 text text-center text-M-TEXT-L1-Default text-Neutral600 lg:pb-0 dsk:w-[150px]">
                                {data.TechProducts.sortBy}
                            </div>
                            {/* buttons */}
                            <div className="w-full flex justify-evenly gap-1 dsk:max-w-[600px]">
                                <div className="flex flex-col justify-center items-center gap-3 lg:flex-row">
                                    <PropSelector
                                        value={"asc"}
                                        active={orderActive}
                                        handleClick={handleOrder}
                                    />
                                    <PropSelector
                                        value={"desc"}
                                        active={!orderActive}
                                        handleClick={handleOrder}
                                    />
                                </div>
                                <div className="border border-Neutral500 w-[1px]"></div>
                                <div className="flex flex-col justify-center items-center gap-3 lg:flex-row">
                                    {lang == "en"
                                        ?
                                        <>
                                            <PropSelector
                                                value={data.TechProducts.btnCost}
                                                active={typeActive}
                                                handleClick={handleType}
                                            />

                                            <PropSelector
                                                value={data.TechProducts.btnType}
                                                active={!typeActive}
                                                handleClick={handleType}
                                            />
                                        </>
                                        :
                                        <>
                                            <PropSelector
                                                value={data.TechProducts.btnCost}
                                                active={typeActive}
                                                handleClick={handleType}
                                            />

                                            <PropSelector
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
                    <div className="hidden dsk:block">
                    <Pager
                        actualValue={actPage}
                        endValue={totalPages}
                        handleClick={handleClick}
                    />
                </div>
                </div>

                {/* CARDS GRID */}
                <div className="">
                    <div className="px-4 mx-auto bg-Neutral100 flex flex-col gap-5 lg:grid lg:grid-cols-3 lg:max-w-[1024px] dsk:grid-cols-4 dsk:max-w-[1464px]">
                        {
                            arrayProd.slice((actPage - 1) * items, actPage * items).map(p => (
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
                {/* PAGER */}
                <div className="py-16 flex items-center justify-center">
                    <Pager
                        actualValue={actPage}
                        endValue={totalPages}
                        handleClick={handleClick}
                    />
                </div>
            </div>
        </section>
    )
}

