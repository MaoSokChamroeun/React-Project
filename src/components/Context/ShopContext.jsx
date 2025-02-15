import React, { createContext, useState } from 'react';
import all_product from '../Assets/all_product';
export const ShopContext = createContext(null);
const getDefaultCard = () => {
  let card = {};
  // Initialize cardItems with asus_id as keys
  for (let index = 0; index < all_product.length; index++) {
    card[all_product[index].id] = 0;
  }
  return card;
};
const ShopContextProvider = (props) => {
  const [cardItems, setCardItems] = useState(getDefaultCard());
  const addToCard = (itemId) => {
    setCardItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };
  const removeFromCard = (itemId) => {
    setCardItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
  };
  const getTotalCardAmount = () => {
    let totalAmount = 0;
    // Loop through all items in cardItems
    for (const item in cardItems) {
      if (cardItems[item] > 0) {
        // Find the product details based on the item ID (asus_id)
        const itemInfo = all_product.find((product) => product.id === Number(item));
        // Add the item's total price to totalAmount
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cardItems[item];
        }
      }
    }
    return totalAmount;
  };
  const getCountTotalItems = () => {
    let totalItem = 0;
    // Loop through all items in cardItems
    for (const item in cardItems) {
      if (cardItems[item] > 0) {
        totalItem += cardItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCardAmount,
    getCountTotalItems,
    cardItems,
    addToCard,
    removeFromCard,
    all_product,
  };
  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
export default ShopContextProvider;