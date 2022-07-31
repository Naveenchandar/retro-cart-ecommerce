import { useEffect, useRef, useState } from 'react';

export const AddressForm = ({ addAddress, edit }) => {
    const [address, setAddress] = useState({
        name: '', phoneNum: '', country: '', state: '', landmark: '', pincode: '', fullAddress: ''
    });
    const [errorInfo, setErrorInfo] = useState({
        name: '', phoneNum: '', country: '', state: '', landmark: '', pincode: '', fullAddress: ''
    });
    const formRef = useRef(null);

    useEffect(() => {
        formRef?.current?.scrollIntoView();
        if (edit) {
            const { name, phoneNum, country, state, landmark, pincode, fullAddress } = edit;
            setAddress({
                name, phoneNum, country, state, landmark, pincode, fullAddress
            })
        }
    }, [edit])

    const { name, phoneNum, country, state, landmark, pincode, fullAddress } = address;
    const { name: errorName, phoneNum: errorPhoneNum, country: errorCountry, state: errorState, pincode: errorPincode, fullAddress: errorFullAddress } = errorInfo;

    const addDummyAddress = (e) => {
        e.preventDefault();
        const addressObj = {
            name: 'Naveen ram',
            phoneNum: '7418887397',
            country: 'India',
            state: 'Tamilnadu',
            landmark: 'near blue world aquarium',
            pincode: '600097',
            fullAddress: '201, Rajiv gandhi salai, OMR road, Chennai'
        }
        setAddress(addressObj);
        addAddress(addressObj);
    }

    const validateAddress = () => {
        if (!name && !phoneNum && !country && !state && !pincode && !fullAddress) {
            setErrorInfo({
                ...errorInfo,
                name: 'Please enter name', phoneNum: 'Please enter phone number',
                country: 'Please enter country', state: 'Please enter state',
                pincode: 'Please enter pincode', fullAddress: 'Please enter full address'
            });
            return false;
        }
        if (!name) {
            setErrorInfo({ ...errorInfo, name: 'Please enter name' });
            return false;
        }
        if (!phoneNum) {
            setErrorInfo({ ...errorInfo, phoneNum: 'Please enter phone number' });
            return false;
        }
        if (!country) {
            setErrorInfo({ ...errorInfo, country: 'Please enter country' });
            return false;
        }
        if (!state) {
            setErrorInfo({ ...errorInfo, state: 'Please enter state' });
            return false;
        }
        if (!pincode) {
            setErrorInfo({ ...errorInfo, pincode: 'Please enter pincode' });
            return false;
        }
        if (!fullAddress) {
            setErrorInfo({ ...errorInfo, fullAddress: 'Please enter full address' });
            return false;
        }
        return true;
    }

    const addressAdd = (e) => {
        e.preventDefault();
        if (validateAddress()) {
            addAddress(address);
        }
    }

    const addressFieldChange = (type, targetValue) => {
        setErrorInfo('');
        setAddress({ ...address, [type]: targetValue })
    }

    return (
        <section className="flex address_form border" ref={formRef}>
            <form className="input_group flex relative_pos flex_dcolumn align_center justify_center">
                <div className="flex address_input_fields">
                    <label htmlFor="name">Name:
                        <input
                            required
                            placeholder="Enter your name"
                            value={name}
                            id="name"
                            onChange={(e) => addressFieldChange('name', e.target.value)}
                        />
                        {errorName && <span className='red'>{errorName}</span>}
                    </label>
                    <label htmlFor="mobile">Phn No:
                        <input
                            type="number"
                            required
                            placeholder="Enter 10 digit phone number"
                            value={phoneNum}
                            id="mobile"
                            onChange={(e) => addressFieldChange('phoneNum', e.target.value)}
                        />
                        {errorPhoneNum && <span className='red'>{errorPhoneNum}</span>}
                    </label>
                    <label htmlFor="country" >Country:
                        <input
                            required
                            placeholder="Enter your nearest country"
                            value={country}
                            id="country"
                            onChange={(e) => addressFieldChange('country', e.target.value)}
                        />
                        {errorCountry && <span className='red'>{errorCountry}</span>}
                    </label>
                    <label htmlFor="state">State:
                        <input
                            required
                            placeholder="Enter your state"
                            value={state}
                            id="state"
                            onChange={(e) => addressFieldChange('state', e.target.value)}
                        />
                        {errorState && <span className='red'>{errorState}</span>}
                    </label>
                    <label htmlFor="landmark">Landmark:
                        <input
                            placeholder="Enter your nearest landmark"
                            value={landmark}
                            id="landmark"
                            onChange={(e) => addressFieldChange('landmark', e.target.value)}
                        />
                    </label>
                    <label htmlFor="zipcode">PinCode:
                        <input
                            required
                            placeholder="Enter your pincode"
                            value={pincode}
                            id="zipcode"
                            onChange={(e) => addressFieldChange('pincode', e.target.value)}
                        />
                        {errorPincode && <span className='red'>{errorPincode}</span>}
                    </label>
                </div>
                <div className="address_textarea">
                    <label htmlFor="address">Address: </label>
                    <textarea id="address" required placeholder="Enter your address" value={fullAddress} onChange={(e) => addressFieldChange('fullAddress', e.target.value)} />
                    {errorFullAddress && <span className='red'>{errorFullAddress}</span>}
                </div>
                <div>
                    <button
                        className="btn btn_primary font_bold text_uppercase"
                        onClick={addDummyAddress}
                    >Add Dummy Address</button>
                    <button
                        className="btn btn_primary font_bold text_uppercase"
                        onClick={addressAdd}
                    >{edit ? 'Update Address' : 'Add Address'}</button>
                </div>
            </form>
        </section>
    )
}