import { useState, useEffect } from 'react';
// import { v4 as uuid } from "uuid";
import toast from 'react-hot-toast';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import Confetti from 'react-confetti';
// import { useGetLocalStorage, useSetLocalStorage } from 'hooks/useLocalStorage';
// import { fetchItemById, updateItemById } from 'utils';
import { AddressForm } from './form';
import './index.css';
import { useNavigate } from 'react-router-dom';
import { useWindowSize } from 'hooks/useWindowSize';
import { addressAddNew, addressUpdate, removeAddress } from 'services/address';
import { useAuth, useCart } from 'context';
import { fetchTotalAmount } from 'utils';
import { clearAllCartItems } from 'services/cart';

const RAZORPAY_URL = "https://checkout.razorpay.com/v1/checkout.js";

const handleLoadScript = (src) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            reject(false);
        };
        document.body.appendChild(script);
    });
};

export const Address = () => {
    const { cartItems, setCartItems } = useCart();
    const { user } = useAuth();
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [editAddressForm, setEditAddressForm] = useState('');
    const [deliverySelected, setIsDeliverySelected] = useState(false);
    // const [isOngoingNetworkCall, setIsOngoingNetworkCall] = useState(false);

    // const setLocalStorage = useSetLocalStorage('retro-cart-address');
    // const getLocalStorage = useGetLocalStorage('retro-cart-address');
    const [addressList, setAddressList] = useState([]);

    const navigate = useNavigate();
    const token = localStorage.getItem('retro-cart-token');
    const { width, height } = useWindowSize();

    const addAddress = async (address) => {
        if (editAddressForm) {
            updateAddress(address);
        } else {
            try {
                const addresses = await addressAddNew(address, token);
                setAddressList(addresses);
                setShowAddressForm(!showAddressForm)
            } catch (error) {
                toast.error(error?.message);
            }
        }
    }

    const editAddress = (addressId) => {
        const findAddress = addressList?.find(({ _id }) => _id === addressId);
        setEditAddressForm(findAddress);
        setShowAddressForm(true);
    }

    const updateAddress = async (addressData) => {
        // const addressInfo = { ...addressData, id: editAddressForm?.id };
        // const data = fetchItemById(addressInfo?.id, addressList);
        // if (data?.id) {
        //     setAddressList(updateItemById(addressList, addressInfo));
        //     setShowAddressForm(false);
        // }
        const updateAddresses = await addressUpdate(addressData, token);
        setAddressList(updateAddresses);
        setShowAddressForm(false);
    }

    // useEffect(() => {
    //     setLocalStorage('retro-cart-address', addressList, false);
    // }, [addressList, setLocalStorage])

    useEffect(() => {
        return () => {
            setIsDeliverySelected(false);
            setEditAddressForm(false);
            setShowAddressForm(false);
        }
    }, [])

    const renderAddressInfo = (label, info) => (
        label?.map((item, index) => (
            <div key={item}>
                <p>
                    <b>{item}:</b>&nbsp;
                    {info[index]}
                </p>
            </div>
        ))
    )

    const deliveryClick = () => {
        setIsDeliverySelected(true);
        setTimeout(() => {
            navigate('/products', { replace: true });
        }, 5000)
    }

    const placeOrder = async (order) => {
        try {
            console.error("Placed order successfully!", "success");
            const data = await clearAllCartItems(token);
            if (data) {
                setCartItems([]);
                deliveryClick();
            }
        } catch (error) {
            console.error(error || error?.message);
        }
    };

    const handleShowRazorPay = async (address) => {
        const response = await handleLoadScript(RAZORPAY_URL);

        if (!response) {
            console.error(
                "Could not load razorpay payment options. Please try again later."
            );
            return;
        }

        var options = {
            key: process.env.REACT_APP_RAZORPAY_KEY,
            amount: fetchTotalAmount(cartItems) * 100,
            currency: "INR",
            name: "Retro cart",
            description: "Thank you for shopping!",

            handler: async function (response) {
                const { razorpay_payment_id } = await response;
                const order = {
                    razorpayPaymentId: razorpay_payment_id
                    // ...checkoutData,
                };
                placeOrder(order);
            },
            prefill: {
                name: address?.name,
                email: user?.email,
                contact: 7418887397,
            },
            theme: { color: "#3399cc" },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    const addNewAddress = () => {
        setShowAddressForm(!showAddressForm);
        setEditAddressForm('');
    }

    const deleteAddress = async (addressId) => {
        const addresses = await removeAddress(addressId, token);
        setAddressList(addresses);
    }

    if (!deliverySelected) {
        return (
            <section className='flex align_center flex_dcolumn address_section'>
                <h4 className='text_center'>Manage Address</h4>
                <button
                    className='btn btn_primary font_bold text_uppercase text_center'
                    onClick={addNewAddress}
                >
                    Add new address
                </button>
                {showAddressForm && <AddressForm addAddress={addAddress} edit={editAddressForm} />}
                {addressList?.length ? (
                    <section className='flex border address_list'>
                        {addressList?.map((address) => {
                            const { _id, name, phoneNum, country, state, landmark, fullAddress, pincode } = address;
                            return (
                                <section key={_id} className='border address_list_item'>
                                    <h4 className='flex'>
                                        <span title={name}>Name: {name}</span>
                                        <div className='address_icons'>
                                            <AiOutlineEdit
                                                className='pointer'
                                                title='Edit Address'
                                                onClick={() => editAddress(_id)}
                                            /> &nbsp;
                                            <AiOutlineDelete
                                                className='pointer'
                                                title='Delete Address'
                                                onClick={async () => await deleteAddress(_id)} />
                                        </div>
                                    </h4>
                                    {renderAddressInfo(
                                        ['Phone number', 'Address', 'Landmark', 'Pincode', 'State', 'Country'],
                                        [phoneNum, fullAddress, landmark, pincode, state, country]
                                    )}
                                    <button
                                        className='btn btn_primary font_bold text_uppercase'
                                        onClick={() => handleShowRazorPay(address)}
                                    >Delivery here</button>
                                </section>
                            )
                        })}
                    </section>
                ) : <p className='text_center'>{showAddressForm ? '' : 'No Address to add. Please add new address to proceed'}</p>
                }
            </section>
        )
    }
    return (
        <section className='flex align_center flex_dcolumn address_section'>
            <h4 className='text_center'>Congrats, Your order got successfully placed</h4>
            <Confetti
                width={width}
                height={height}
            />
        </section>
    )
}