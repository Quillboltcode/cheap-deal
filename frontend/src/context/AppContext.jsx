import { createContext, useState } from "react";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const UrlBackend = "http://localhost:4000"

    const [profile, setProfile] = useState()

    const value = {
        UrlBackend,
        profile, setProfile
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider