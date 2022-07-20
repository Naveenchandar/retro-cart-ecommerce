import { createContext, useContext, useEffect, useState } from "react";
import { useProducts } from ".";
import { fetchItemById, productQuantityDecrement, productQuantityIncrement } from "../utils";
import { useWishlist } from "./wishlist";

const CartContext = createContext([]);

const fetchCartItems = () => {
    const cartItems = localStorage.getItem("retro-cart");
    if (JSON.parse(cartItems)?.length) {
        return JSON.parse(cartItems);
    }
    return [];
}

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(fetchCartItems());
    const { productState: { products }, productDispatch } = useProducts();

    const { addToWishlist } = useWishlist();

    useEffect(() => {
        localStorage.setItem("retro-cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const moveToWishList = (product) => {
        addToWishlist(product);
        removeFromCart(product.id);
    }

    const updateProductsQuanitity = (data, productId) => {
        return data.map(item => item.id === productId ? fetchItemById(productId, data) : item)
    }

    const quantityAdd = (addProductId, addProductPrice, addProductQuantity) => {
        const productObj = {
            id: addProductId, price: addProductPrice, quantity: addProductQuantity, data: products
        }
        const filterProduct = productQuantityIncrement({ ...productObj, data: cartItems });
        const newProducts = updateProductsQuanitity(products, addProductId);
        productDispatch({
            type: 'FETCH_PRODUCTS_SUCCESS',
            payload: {
                products: newProducts,
                error: null,
                loading: false
            }
        });
        setCartItems(filterProduct);
    }

    const quantityRemove = (id, price, quantity) => {
        if (quantity === 1) {
            removeFromCart(id);
        } else {
            const productObj = { id, price, quantity: quantity - 1, data: products, removeFromCart };
            const filterProducts = productQuantityDecrement({ ...productObj, data: cartItems });
            const newProducts = updateProductsQuanitity(products, id);
            productDispatch({
                type: 'FETCH_PRODUCTS_SUCCESS',
                payload: {
                    products: newProducts,
                    error: null,
                    loading: false
                }
            });
            setCartItems(filterProducts);
        }
    }

    const addToCart = (product) => {
        product.quantity = 1;
        setCartItems([...cartItems, product]);
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