import { useGlobal } from "../context/GlobalContext"
import { Toast } from "./Toast"

export default function Notifications() {

    const { notis, setNotis } = useGlobal()


    const deleteNoti = id => {
        setNotis(notis.filter(n => n.id != id))
    }
    
    return (
        <div className="relative">
            <div className="z-50 fixed flex flex-col space-y-4 bottom-[50px] left-1/2 translate-x-[-50%]">
                {notis && notis.map(n => <Toast
                    deleteNoti={deleteNoti}
                    key={n.id}
                    id={n.id}
                    product={n.pName}
                    failOp={n.failOp}
                />)}
            </div>
        </div>
    )
}
