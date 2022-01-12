

export const NumberSelector = ({ value }) => {
    return (
        <div className="select-none bg-gradient-to-r from-Brand-Default-Primary to-Brand-Default-Secondary w-fit rounded-xl flex justify-center px-4 py-1 cursor-pointer">
            <span className="text-D-TEXT-L1-Default text-Neutral100">
                {
                    !value && (1234)
                }
            </span>
        </div>
    )
}