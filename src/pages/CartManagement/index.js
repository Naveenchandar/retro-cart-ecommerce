import { Link } from 'react-router-dom';
import { useCart } from 'context';
import { useDocumentTitle } from 'hooks/useDocumentTitle';
import { CartProduct } from './cartProduct';
import './index.css';
import { fetchTotalAmount } from 'utils';

export const CartManagement = () => {

    const { cartItems, quantityAdd, quantityRemove, addQuantity, removeFromCart, moveToWishList } = useCart();

    useDocumentTitle('Retro Cart | Cart Management')

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
                                        {cartItems?.map(({ qty, price, id }) => {
                                            return (
                                                <div key={id}>
                                                    <span className='product_price_detail'>
                                                        {qty} * {parseInt(price)} = &nbsp;
                                                        <i className='fa fa-rupee'></i>&nbsp;{qty * price}
                                                    </span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </li>
                                <li className="flex justify_spacebtw">
                                    <span>Deliver charges</span>
                                    <span><i className='fa fa-rupee'></i>&nbsp;41</span>
                                </li>
                            </ul>
                            <h5 className="font_bold flex justify_spacebtw total_amt">
                                Total Amount <span><i className='fa fa-rupee'></i> {fetchTotalAmount(cartItems)} </span>
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
    return <h4 className='text_center m-2'>No cart items added :(. <Link to="/products" className='shop_link'>Start shopping</Link></h4>
}