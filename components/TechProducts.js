import { NumberSelector } from "./NumberSelector";






export const TechProducts = () => {
    return (
        <section className="bg-white py-8 px-60">
            <h2 className="py-10 text-center text-D-TITLE-L2 uppercase font-black"><span className=" text-transparent bg-clip-text bg-gradient-to-r from-Brand-Default-Primary to-Brand-Default-Secondary">tech</span> products</h2>
            <div className="flex flex-col">
                <div className="flex items-center justify-between">
                    <div>Filter</div>
                    <div className="border-x border-Neutral900 px-10 flex justify-center items-center">
                        <div className="mr-10 text-D-TEXT-L1-Default text-Neutral600">
                            Ordenar por
                        </div>
                        <div className="flex justify-center items-center">
                            <NumberSelector />
                            <NumberSelector />
                            <NumberSelector />
                            <NumberSelector />
                        </div>
                    </div>
                    <div>Paginacion</div>
                </div>
                <div>Mapa de productos</div>
                <div>Paginacion</div>
            </div>
        </section>
    )
}
