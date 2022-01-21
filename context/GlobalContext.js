import { createContext } from "react"

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {



    return (
        <GlobalContext.Provider>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobal = () => useContext(GlobalContext)

