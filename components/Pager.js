import { PagerButton } from "./PagerButton"




export const Pager = ({ props }) => {

    const { actualValue, endValue } = props || { actualValue: 1, endValue: 2 }

    return (
        <div className="py-3 px-4 rounded-2xl border border-Neutral300 flex justify-center items-center w-fit">
            <div>
                <PagerButton />
            </div>
            <div className="px-6">
                <p className="text-D-TEXT-L1-Default text-Neutral600">Page <span className="text-transparent bg-clip-text bg-gradient-to-r from-Brand-Default-Primary to-Brand-Default-Secondary">{actualValue} of {endValue}</span></p>
            </div>
            <div>
                <PagerButton />
            </div>
        </div>
    )
}