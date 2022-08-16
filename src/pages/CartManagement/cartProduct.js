import { useState } from 'react';
import { ProductQuantity, Alert } from 'components';

export const CartProduct = ({ product:
    { id, image, productName, price, oldPrice, discount, qty, _id: productId },
    product, quantityAdd, quantityRemove, removeFromCart, moveToWishList, addQuantity }) => {

    const [isAlertOpen, setIsAlertOpen] = useState(false);

    const showAlert = () => setIsAlertOpen(true);

    const closeAlert = () => setIsAlertOpen(false);

    // () => removeFromCart(productId)

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
                        id={productId}
                        price={price}
                        quantity={qty}
                    />
                    <div className="cart_btns flex flex_dcolumn w-100">
                        <button
                            className="btn btn_outlined w-100"
                            onClick={showAlert}
                        >Remove from cart</button>
                        <button className="btn btn_primary w-100" onClick={() => moveToWishList(product)}>
                            Move to wishlist
                        </button>
                    </div>
                </div>
            </div>
            {isAlertOpen && (
                <Alert open={isAlertOpen} close={closeAlert} className='root-modal'>
                    <div className='alert_section'>
                        <h2 className='alert_title'>Remove Item</h2>
                        <p className='alert_message'>
                            Are you sure you want to remove this item?
                        </p>
                        <button className="btn btn_outlined">
                            Cancel
                        </button>
                        <button className="btn btn_outlined">
                            Remove
                        </button>
                    </div>
                </Alert>
            )}
        </section>
    )
}