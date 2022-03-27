import React from 'react';

export function ProductCard({ product }) {
    const { image, alt, productName, discount, price, oldPrice, rating } = product;
    return (
        <div className="ecommerce_card flex_column product_item">
            <div className="product_image w-100 my-1">
                <img src={image} className="w-100 block m_auto" alt={alt} />
                <i className="fa fa-heart-o product_wishlist pointer"></i>
            </div>
            <div className="product_details flex flex_dcolumn w-100">
                <h5 className="flex justify_spacebtw">
                    <span className="product_review">
                        <i className="fa fa-star"></i>&nbsp;
                        <span>{rating}</span>
                    </span>
                    <span className="product_offer font_bold">{discount}%</span>
                </h5>
                <div className="product_info">
                    <h4 className="product_title">{productName}</h4>
                </div>
                <div className="product_price">
                    <span className="product_discount_price primary_text_color font_bold">Rs. {price}</span>
                    &ensp;
                    <span className="product_original_price">Rs. {oldPrice}</span>
                </div>
                <button className="product_add_cart btn btn_primary p-2">
                    <a href="../cart-management/cart-management.html">
                        Add to cart
                    </a>
                </button>
            </div>
        </div>
    )
}