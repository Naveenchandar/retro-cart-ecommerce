import { useState, useEffect } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import Confetti from 'react-confetti';
import { useGetLocalStorage, useSetLocalStorage } from '../../hooks/useLocalStorage';
import { fetchItemById, updateItemById } from '../../utils';
import { AddressForm } from './form';
import './index.css';
import { useNavigate } from 'react-router-dom';
import { useWindowSize } from '../../hooks/useWindowSize';

export const Address = () => {
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [editAddressForm, setEditAddressForm] = useState('');
    const [deliverySelected, setIsDeliverySelected] = useState(false);
    const setLocalStorage = useSetLocalStorage('retro-cart-address');
    const getLocalStorage = useGetLocalStorage('retro-cart-address');
    const [addressList, setAddressList] = useState(getLocalStorage('retro-cart-address') || []);
    const navigate = useNavigate();
    const { width, height } = useWindowSize()

    const addAddress = (address) => {
        if (editAddressForm) {
            updateAddress(address);
        } else {
            try {
                setAddressList([...addressList, address]);
                setShowAddressForm(!showAddressForm)
            } catch (error) {
                toast.error(error?.message);
            }
        }
    }

    const editAddress = (addressId) => {
        const findAddress = addressList?.find(({ id }) => id === addressId);
        setEditAddressForm(findAddress);
        setShowAddressForm(true);
    }

    const updateAddress = (addressData) => {
        const addressInfo = { ...addressData, id: editAddressForm?.id };
        const data = fetchItemById(addressInfo?.id, addressList);
        if (data?.id) {
            setAddressList(updateItemById(addressList, addressInfo));
            setShowAddressForm(false);
        }
    }

    useEffect(() => {
        setLocalStorage('retro-cart-address', addressList, false);
        return () => {
            setIsDeliverySelected(false);
            setEditAddressForm(false);
            setShowAddressForm(false);
        }
    }, [addressList, setLocalStorage])

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

    if (!deliverySelected) {
        return (
            <section className='flex align_center flex_dcolumn address_section'>
                <h4 className='text_center'>Manage Address</h4>
                <button
                    className='btn btn_primary font_bold text_uppercase text_center'
                    onClick={() => { setShowAddressForm(!showAddressForm); setEditAddressForm(''); }}
                >
                    Add new address
                </button>
                {showAddressForm && <AddressForm addAddress={addAddress} edit={editAddressForm} />}
                {addressList?.length ? (
                    <section className='flex border address_list'>
                        {addressList?.map(({ id, name, phoneNum, country, state, landmark, fullAddress, pincode }) => {
                            return (
                                <section key={id} className='border address_list_item'>
                                    <h4 className='flex'>
                                        <span title={name}>Name: {name}</span>
                                        <div className='address_icons'>
                                            <AiOutlineEdit
                                                className='pointer'
                                                title='Edit Address'
                                                onClick={() => editAddress(id)}
                                            /> &nbsp;
                                            <AiOutlineDelete className='pointer' title='Delete Address' />
                                        </div>
                                    </h4>
                                    {renderAddressInfo(
                                        ['Phone number', 'Address', 'Landmark', 'Pincode', 'State', 'Country'],
                                        [phoneNum, fullAddress, landmark, pincode, state, country]
                                    )}
                                    <button
                                        className='btn btn_primary font_bold text_uppercase'
                                        onClick={deliveryClick}
                                    >Delivery here</button>
                                </section>
                            )
                        })}
                    </section>
                ) : <p className='text_center'>
                    {showAddressForm ? '' : 'No Address to add. Please add new address to proceed'}</p>
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