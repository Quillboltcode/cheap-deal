import { createContext, useState } from "react";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const [user, setUser] = useState([{
        name: 'Hoang Cuong',
        dateOfBirth: '25-11-2003',
        address: 'Quang Ninh',
        gender: 'male',
        phone: '0359020006',
        email: 'vancuong25112003@gamil.com',
        password: 'Asdasd123'
    }])

    const value = {
        user, setUser
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider