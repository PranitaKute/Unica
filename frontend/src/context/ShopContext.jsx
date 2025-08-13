import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '₹';
    const delivery_fee_MumbaiAndThane = 60;
    const delivery_fee_OutOfMumbai = 80;
    const delivery_fee_OutOfMaharahtra = 120; 
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    // const addToCart = async (itemId) => {
    //     let cartData = structuredClone(cartItems);

    //     if (cartData[itemId]) {
    //         if (cartData[itemId]) {
    //             cartData[itemId] += 1;
    //         }
    //         else{
    //             cartData[itemId] = 1;
    //         }
    //     }
    //     else{
    //         cartData[itemId] = {};
    //         cartData[itemId] = 1;
    //     }
    //     setCartItems(cartData);
    // }

    const addToCart = (itemId) => {
        setCartItems(prevCartItems => ({
        ...prevCartItems,
        [itemId]: prevCartItems[itemId] ? prevCartItems[itemId] + 1 : 1
        }));
    };


    // const getCartCount = () => {
    //     let totalCount = 0;
    //     for(const items in cartItems){
    //         for (const item in cartItems[items]) {
    //             try {
    //                 if (cartItems[item][item] > 0) {
    //                     totalCount += cartItems[items][item];
    //                 }
    //             } catch (error) {
                    
    //             }
    //         }
    //     }
    //     return totalCount;
    // }

    const getCartCount = () => {
    let totalCount = 0;
    for (const item in cartItems) {
        totalCount += cartItems[item];
    }
    return totalCount;
    };


    // useEffect(() => {
    //     console.log(cartItems);
    // },[cartItems])

    const updateQuantity = async (itemId, quantity) =>{
        let cartData = structuredClone(cartItems);
        cartData[itemId] = quantity;
        setCartItems(cartData);
    }

    const getCartAmount =  ()=>{
        let totalAmount = 0;
        for (const items in cartItems){
            const quantity = cartItems[items];
            const itemInfo = products.find((product) => product._id === items);
            if(itemInfo && quantity > 0){
                totalAmount += itemInfo.price * quantity;
            }   
        }
        return totalAmount;    
    }

    const value = {
        products , currency, delivery_fee_MumbaiAndThane, delivery_fee_OutOfMumbai, delivery_fee_OutOfMaharahtra,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart, 
        getCartCount, updateQuantity,
        getCartAmount, navigate
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;