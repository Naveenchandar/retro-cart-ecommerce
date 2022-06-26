import { ProductQuantity } from '../../components';

export const CartProduct = ({ product: { id, image, productName, price, oldPrice, discount, quantity }, product, quantityAdd,
    quantityRemove, removeFromCart, moveToWishList, addQuantity }) => {
    return (
        <section className="cart_list my-2" key={id}>
            <div className="cart_item border flex_row cart_gap justify_spacebtw">
                <div className="cart_image">
                    <img src={image} alt="Clothes" className="block w-100 m_auto" />
                </div>
                <div className="flex_column align_start cart_item_info cart_gap">
                    <h5 className='product_name'>{productName}</h5>
                    <div className="product_price">
                        <span className="product_discount_price"><i className='fa fa-rupee'></i>&nbsp;{price}</span>&nbsp;
                        <span className="product_original_price"><i className='fa fa-rupee'></i>&nbsp;{oldPrice}</span>
                    </div>
                    <p className="cart_offer font_bold">{discount}% Off</p>
                    <ProductQuantity
                        id={id}
                        price={price}
                        quantity={quantity}
                    />
                    <div className="cart_btns flex flex_dcolumn w-100">
                        <button className="btn btn_outlined w-100" onClick={() => removeFromCart(id)}>Remove from cart</button>
                        <button className="btn btn_primary w-100" onClick={() => moveToWishList(product)}>
                            Move to wishlist
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}