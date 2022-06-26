import React from 'react'
import { useCart } from '../../context'

export function ProductQuantity({ id, price, quantity }) {
    const { quantityAdd, quantityRemove } = useCart();
    return (
        <div className="flex align_center cart_quantity cart_gap">
            <div className="flex align_center cart_count cart_gap">
                <i className='fa fa-minus-circle pointer' onClick={() => quantityRemove(id, price, quantity)}></i>
                <span>{quantity}</span>
                <i className='fa fa-plus-circle pointer' onClick={() => quantityAdd(id, price, 1)}></i>
            </div>
        </div>
    )
};