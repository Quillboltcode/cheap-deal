import { createContext, useState } from "react";
import { packages } from "../assets/assets";

export const AppContext = createContext()

const getCartDefault = () => {
    let cart = {}
    for (let index = 0; index < packages.length + 1; index++) {
        cart[index] = 0
    }
    return cart
}

const AppContextProvider = (props) => {

    const UrlBackend = "http://localhost:4000"

    const [profile, setProfile] = useState()
    const [packageId, setPackageId] = useState()

    const [indexData, setIndexData] = useState(1)
    const [priceData, setPriceData] = useState(99)

    const [cartItems, setCartItems] = useState(getCartDefault())

    const addToCart = (itemdId) => {
        setCartItems((prev) => ({ ...prev, [itemdId]: prev[itemdId] + 1 }))
        console.log(cartItems)
    }

    const removeFromCart = (itemdId) => {
        setCartItems((prev) => ({ ...prev, [itemdId]: prev[itemdId] - 1 }))
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (let items in cartItems) {
            if (cartItems[items] > 0) {
                totalItem += cartItems[items]
            }
        }
        return totalItem
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = packages.find((product) => product.id === Number(item) + 1)
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const value = {
        UrlBackend,
        profile, setProfile,
        packageId, setPackageId,
        addToCart, removeFromCart,
        getTotalCartItems, getTotalCartAmount,
        indexData, setIndexData,
        priceData, setPriceData,
        cartItems
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider