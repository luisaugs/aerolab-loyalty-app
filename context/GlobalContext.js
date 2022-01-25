import { createContext, useContext, useEffect, useState } from "react"
import { getUserInfo, redeem } from "../logic/api"
import es from "../locale/es"
import en from "../locale/en"

const langs = {
    es,
    en
}

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {

    //User status
    const [user, setUser] = useState("")
    const [points, setPoints] = useState("---")



    const dataUserInfo = async () => {
        const data = await getUserInfo()    
        setUser(data.name)
        setPoints(data.points)
        return data
    }


    const redeemPoints = async (id, cost) => {
        try {
            const data = await redeem(id)
            if (data.message === "You've redeem the product successfully"){
                setPoints(points => points - cost)
                return data.message
            }
            if (data.error === "User don't have enogh points"){
                return data.error
            }
        } catch (error) {
            console.log("Error during reddeming", error)
        }
    }

    useEffect(() => {

        try {
            dataUserInfo()
        } catch (error) {
            console.log("Error catching data from user", error)
        }

    }, [points])


    //Languages
    const [lang, setLang] = useState("en")
    const data = langs[lang]




    const values = {
        user,
        points,
        setPoints,
        lang,
        setLang,
        data,
        redeemPoints,
        dataUserInfo
    }

    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobal = () => useContext(GlobalContext)