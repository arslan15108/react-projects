import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";


export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems,setCartItems] = useState({});
    const [cartCount,setCartCount] = useState(0);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const newCount = (prev[itemId] || 0) - 1;
            if (newCount <= 0) {
                const { [itemId]: _, ...rest } = prev;
                return rest;
            } else {
                return { ...prev, [itemId]: newCount };
            }
        });
    }

    const totalItems = () => {
        let total = Object.keys(cartItems).length;
        setCartCount(total);
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = food_list.find(product => product._id === item);
                totalAmount += itemInfo.price * cartItems[item]
            }
        }
        return totalAmount;
    }


    useEffect(() => {
        totalItems();
        console.log(cartCount, "cartCount");
        console.log(cartItems,"cartItems");
    }, [cartItems]);


    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        cartCount,
        getTotalCartAmount
    }

    return (
        <StoreContext.Provider value = {contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider