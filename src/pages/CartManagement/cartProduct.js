import React from 'react'

function CartProduct({ product: { id, image, productName, price, oldPrice, discount, quantity }, product, quantityAdd,
    quantityRemove, removeFromCart, moveToWishList, addQuantity }) {
    return (
        <section className="cart_list my-2" key={id}>
            <div className="cart_item border flex_row cart_gap justify_spacebtw">
                <div className="cart_image">
                    <img src="https://retro-cart.netlify.app/assets/image_1.png" alt="Clothes" className="block w-100 m_auto" />
                </div>
                <div className="flex_column align_start cart_item_info cart_gap">
                    <h5>{productName}</h5>
                    <div className="product_price">
                        <span className="product_discount_price">{price}</span>
                        <span className="product_original_price">{oldPrice}</span>
                    </div>
                    <p className="cart_offer font_bold">{discount}% Off</p>
                    <div className="flex align_center cart_quantity cart_gap">
                        <span>Quantity :</span>
                        <div className="flex align_center cart_count cart_gap">
                            <i className='fa fa-minus-circle' onClick={() => quantityRemove(id, price, quantity)}></i>
                            <span>{quantity}</span>
                            <i className='fa fa-plus-circle' onClick={() => quantityAdd(id, price, 1)}></i>
                        </div>
                    </div>
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

export default CartProduct