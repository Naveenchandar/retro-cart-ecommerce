import { createContext, useContext, useEffect, useState } from "react";
import { useProducts } from ".";
import { productQuantityDecrement, productQuantityIncrement } from "../utils";
import { useWishlist } from "./wishlist";

const CartContext = createContext([]);

function fetchCartItems() {
    const cartItems = localStorage.getItem("retro-cart");
    if (JSON.parse(cartItems)?.length) {
        return JSON.parse(cartItems);
    }
    return [];
}

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(fetchCartItems());
    const { productState: { products } } = useProducts();

    const { addToWishlist } = useWishlist();

    useEffect(() => {
        localStorage.setItem("retro-cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const moveToWishList = (product) => {
        addToWishlist(product);
        removeFromCart(product.id);
    }

    const quantityAdd = (addProductId, addProductPrice, addProductQuantity) => {
        const productObj = {
            id: addProductId, price: addProductPrice, quantity: addProductQuantity, data: products
        }
        productQuantityIncrement(productObj);
        const filterProduct = productQuantityIncrement({ ...productObj, data: cartItems })
        setCartItems(filterProduct);
    }

    const quantityRemove = (id, price, quantity) => {
        if (quantity === 1) {
            removeFromCart(id);
        } else {
            const productObj = { id, price, quantity, data: products, removeFromCart };
            setCartItems(productQuantityDecrement({ ...productObj, data: cartItems }));
        }
    }

    const addToCart = ({ id, image, productName, price, oldPrice, rating, discount, quantity }) => {
        setCartItems([
            ...cartItems,
            {
                id, image, productName, price, oldPrice, rating, discount, quantity
            }
        ])
    }

    const removeFromCart = (id) => {
        const removeProduct = cartItems.filter(item => item.id !== id);
        setCartItems(removeProduct);
    }

    return (
        <CartContext.Provider value={{ addToCart, cartItems, removeFromCart, quantityAdd, quantityRemove, moveToWishList }}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };