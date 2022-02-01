import { useGlobal } from "../context/GlobalContext"
import { Toast } from "./Toast"

export default function Notifications() {

    const { notis, showToast, setShowToast } = useGlobal()


    const deleteNoti = () => {
        setShowToast(false)
    }

    return (
        <div className="relative">
            <div className="z-50 fixed flex flex-col space-y-4 bottom-[50px] left-1/2 translate-x-[-50%]">
                {showToast && <Toast
                    product={notis.pName}
                    failOp={notis.failOp}
                    deleteNoti={deleteNoti}
                />}
            </div>
        </div>
    )
}
