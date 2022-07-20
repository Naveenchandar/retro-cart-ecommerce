import { Link } from 'react-router-dom';
import { NoProduct } from '../../components/NoProduct';
import { useCart } from '../../context';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { CartProduct } from './cartProduct';
import './index.css';

export const CartManagement = () => {

    const { cartItems, quantityAdd, quantityRemove, addQuantity, removeFromCart, moveToWishList } = useCart();

    useDocumentTitle('Retro Cart | Cart Management')

    const addTotalAmount = () => {
        const amount = cartItems.reduce((a, b) => {
            return a + parseInt(b.quantity * b.price)
        }, 0);
        return Number.isNaN(amount) ? 0 : amount;
    }

    if (cartItems?.length > 0) {
        return (
            <>
                <h3 className="text_center my-1 py-1">My cart ({cartItems?.length}) </h3>
                <section id="cart_main" className="grid cart_main">
                    <section id="cart_management" className="cart_management">
                        {cartItems?.map(item => {
                            return (
                                <CartProduct
                                    key={item.id}
                                    product={item}
                                    quantityAdd={quantityAdd}
                                    quantityRemove={quantityRemove}
                                    addQuantity={addQuantity}
                                    removeFromCart={removeFromCart}
                                    moveToWishList={moveToWishList}
                                />
                            )
                        })}
                    </section>
                    <section id="cart_price_details" className="cart_price_details flex_column align_start justify_start border cart_gap m-2 p-3">
                        <div className="price_splitup flex flex_dcolumn w-100 cart_gap">
                            <ul className="flex flex_dcolumn cart_gap">
                                <li className="flex justify_spacebtw">
                                    <span>Price ({cartItems.length} items)</span>
                                    <div>
                                        {cartItems?.map(({ quantity, price, id }) => {
                                            return (
                                                <div key={id}>
                                                    <span className='product_price_detail'>{quantity} * {parseInt(price)} = <i className='fa fa-rupee'></i>&nbsp;{quantity * price}</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </li>
                                <li className="flex justify_spacebtw">
                                    <span>Deliver charges</span>
                                    <span><i className='fa fa-rupee'></i>&nbsp;500</span>
                                </li>
                            </ul>
                            <h5 className="font_bold flex justify_spacebtw total_amt">
                                Total Amount <span><i className='fa fa-rupee'></i> {addTotalAmount() + 500} </span>
                            </h5>
                            <button className="btn btn_primary font_bold text_uppercase w-100">
                                <Link to="/address">Proceed to checkout</Link>
                            </button>
                        </div>
                    </section>
                </section>
            </>
        )
    }
    return (
        <NoProduct
            message='No cart list items found :(.'
            icon={{ className: 'fa fa-shopping-cart', icon: true }}
            redirect
        />
    )
}