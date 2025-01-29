import { createContext , useState } from "react";
import laptop_product from "../Assets/laptop_product";
import our_product from "../Assets/our_product";
import hot_product from "../Assets/hot_product";
import asus_product from "../Assets/asus_product";
import msi_product from "../Assets/msi_product";
export const ShopContext = createContext();
const ShopContextProvider = (props) =>{
    const contextValue = { 
        laptop_product,
        our_product,
        hot_product,
        msi_product,
        asus_product };

   
    return(
        <ShopContext.Provider value = {contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;