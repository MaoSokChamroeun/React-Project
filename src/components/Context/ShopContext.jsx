import { createContext } from "react";
import laptop_product from "../Assets/laptop_product";
import our_product from "../Assets/our_product";
import asus_product from "../Assets/asus_product";
import msi_product from "../Assets/msi_product";
import hot_product from "../Assets/hot_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) =>{
    const contextValue = {laptop_product, our_product, asus_product , msi_product , hot_product};
    return(
        <ShopContext.Provider value = {contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;