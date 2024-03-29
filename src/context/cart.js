import { createContext, useContext, useEffect, useState } from "react";
import { useAuth, useProducts } from ".";
import { useWishlist } from "./wishlist";
import { addCartItem, fetchCartItems, removeCartItem, updateCartItemQuantity } from "services/cart";
import { useNavigate } from "react-router-dom";

const CartContext = createContext([]);

// const fetchCartItems = () => {
//     const cartItems = localStorage.getItem("retro-cart");
//     if (JSON.parse(cartItems)?.length) {
//         return JSON.parse(cartItems);
//     }
//     return [];
// }

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const { productState: { products }, productDispatch } = useProducts();

    const { addToWishlist } = useWishlist();
    const { user } = useAuth();
    const navigate = useNavigate();
    const token = localStorage.getItem('retro-cart-token');

    useEffect(() => {
        const userToken = localStorage.getItem('retro-cart-token');
        if (user?.email && userToken) {
            (async () => {
                const cart = await fetchCartItems(userToken);
                if (cart) {
                    setCartItems(cart);
                } else {
                    setCartItems([]);
                }
            })();
        }
        // localStorage.setItem("retro-cart", JSON.stringify(cartItems));
    }, [cartItems, user?.email]);

    useEffect(() => {
        return () => {
            setCartItems([]);
        }
    }, [])

    const moveToWishList = (product) => {
        addToWishlist(product);
        removeFromCart(product._id);
    }

    const quantityAdd = async (productId, addProductPrice, addProductQuantity) => {
        // const productObj = {
        //     id: addProductId, price: addProductPrice, quantity: addProductQuantity, data: products
        // }
        // const filterProduct = productQuantityIncrement({ ...productObj, data: cartItems });
        // const newProducts = updateProductsQuanitity(products, addProductId);
        // productDispatch({
        //     type: 'FETCH_PRODUCTS_SUCCESS',
        //     payload: {
        //         products: newProducts,
        //         error: null,
        //         loading: false
        //     }
        // });
        // setCartItems(filterProduct);
        const data = await updateCartItemQuantity(productId, 'increment', token);
        if (data?.length > 0) {
            const findProduct = data?.find(({ _id }) => _id === productId);
            if (findProduct) {
                const newProducts = products.map(item => {
                    if (item._id === findProduct?._id) {
                        return item = findProduct;
                    }
                    return { ...item };
                });
                productDispatch({
                    type: 'FETCH_PRODUCTS_SUCCESS',
                    payload: {
                        products: newProducts,
                        error: null,
                        loading: false
                    }
                });
            }
            setCartItems(data);
        }
    }

    const quantityRemove = async (id, price, quantity) => {
        // if (quantity === 1) {
        //     removeFromCart(id);
        // } else {
        //     const productObj = { id, price, quantity: quantity - 1, data: products, removeFromCart };
        //     const filterProducts = productQuantityDecrement({ ...productObj, data: cartItems });
        //     const newProducts = updateProductsQuanitity(products, id);
        //     productDispatch({
        //         type: 'FETCH_PRODUCTS_SUCCESS',
        //         payload: {
        //             products: newProducts,
        //             error: null,
        //             loading: false
        //         }
        //     });
        //     setCartItems(filterProducts);
        // }
        if (quantity === 1) {
            await removeFromCart(id);
        } else {
            const data = await updateCartItemQuantity(id, 'decrement', token);
            if (data?.length > 0) {
                const findProduct = data?.find(({ _id }) => _id === id);
                if (findProduct) {
                    const newProducts = products.map(item => {
                        if (item._id === findProduct?._id) {
                            return item = findProduct;
                        }
                        return { ...item };
                    });
                    productDispatch({
                        type: 'FETCH_PRODUCTS_SUCCESS',
                        payload: {
                            products: newProducts,
                            error: null,
                            loading: false
                        }
                    });
                }
                setCartItems(data);
            }
        }
    }

    const addToCart = async (product) => {
        // product.quantity = 1;
        // setCartItems([...cartItems, product]);
        if (user?.email && token) {
            const data = await addCartItem(product, token);
            if (data) {
                setCartItems(data);
            }
        } else {
            navigate('/login');
        }
    }

    const removeFromCart = async (id) => {
        // const removeProduct = cartItems.filter(item => item.id !== id);
        // setCartItems(removeProduct);
        const data = await removeCartItem(id, token);
        if (data) {
            setCartItems(data);
        }
    }

    return (
        <CartContext.Provider value={{ addToCart, cartItems, removeFromCart, quantityAdd, quantityRemove, moveToWishList, setCartItems }}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };