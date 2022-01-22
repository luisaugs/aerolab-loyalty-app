import { createContext, useContext, useEffect, useState } from "react"
import { getUserInfo } from "../logic/api"
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

    useEffect(() => {

        try {
            const dataUserInfo = async () => {
                const data = await getUserInfo()    
                setUser(data.name)
                setPoints(data.points)
            }
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
        data
    }

    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobal = () => useContext(GlobalContext)