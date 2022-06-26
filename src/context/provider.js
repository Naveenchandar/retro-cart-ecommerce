import {
    AuthContextProvider,
    CartProvider,
    ProductFilterProvider,
    ProductsProvider,
    WishListProvider
} from '.';

export const ContextProvider = ({ children }) => {
    return (
        <AuthContextProvider>
            <ProductsProvider>
                <ProductFilterProvider>
                    <WishListProvider>
                        <CartProvider>
                            {children}
                        </CartProvider>
                    </WishListProvider>
                </ProductFilterProvider>
            </ProductsProvider>
        </AuthContextProvider>
    )
}