import { createContext, useContext, useEffect, useState } from 'react';
import { addWishlistItem, fetchWishListItems, removeWishlistItem } from 'services/wishlist';
import { useAuth } from './AuthContext';

const WishListContext = createContext([]);

// const fetchWishListItems = () => {
//     const wishlistitems = localStorage.getItem("retro-wishlist");
//     if (JSON.parse(wishlistitems)?.length) {
//         return JSON.parse(wishlistitems);
//     }
//     return [];
// }

const WishListProvider = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState([]);
    const { user } = useAuth();
    
    useEffect(() => {
        const token = localStorage.getItem('retro-cart-token');
        if (user?.email && token) {
            (async () => {
                const wishlist = await fetchWishListItems();
                setWishlistItems(wishlist || []);
            })();
            // localStorage.setItem("retro-wishlist", JSON.stringify(addedToWishList));
        }
    }, [wishlistItems, user?.email]);

    useEffect(() => {
        return () => {
            setWishlistItems([]);
        }
    }, [])

    const addToWishlist = async (product, type) => {
        // const { image, productName, discount, price, oldPrice, rating, id } = product;
        // if (type === 'remove') {
        //     const removeFromWishList = addedToWishList.filter(item => item.id !== id);
        //     setWishlistItems(removeFromWishList);
        // } else {
        //     const wishListItemsAdd = [
        //         ...addedToWishList,
        //         {
        //             id, image, productName, price, oldPrice, rating, discount
        //         }
        //     ]
        //     setWishlistItems(wishListItemsAdd);
        // }
        if (type === 'remove') {
            const data = await removeWishlistItem(product);
            setWishlistItems(data);
        } else {
            const data = await addWishlistItem(product);
            setWishlistItems(data);
        }
    }

    return (
        <WishListContext.Provider value={{ wishlistItems, addToWishlist }}>
            {children}
        </WishListContext.Provider>
    )
}

const useWishlist = () => useContext(WishListContext);

export { useWishlist, WishListProvider }