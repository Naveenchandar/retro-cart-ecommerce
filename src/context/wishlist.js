import { createContext, useContext, useState } from 'react';

const WishListContext = createContext([]);

const WishListProvider = ({ children }) => {
    const [addedToWishList, setAddedToWishList] = useState([]);

    const addToWishlist = (product, type) => {
        const { image, productName, discount, price, oldPrice, rating, id } = product;
        if (type === 'remove') {
            const removeFromWishList = addedToWishList.filter(item => item.id !== id);
            setAddedToWishList(removeFromWishList);
        } else {
            setAddedToWishList([
                ...addedToWishList,
                {
                  id, image, productName, price, oldPrice, rating, discount
                }
              ])
        }
    }
    
    return (
        <WishListContext.Provider value={{ addedToWishList, addToWishlist }}>
            {children}
        </WishListContext.Provider>
    )
}

const useWishlist = () => useContext(WishListContext);

export { useWishlist, WishListProvider }