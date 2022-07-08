import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './index.css';
import FreeShippingIcon from '../../assets/images/free.svg';
import DeliveryIcon from '../../assets/images/delivery.svg';
import QualityIcon from '../../assets/images/quality.svg';
import NewArrivalsImage from '../../assets/images/image_1.png';
import { Categories, Footer } from '../../components';
import { NewArrivals } from './NewArrivals';

export const Home = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const { status, data: { categories = [] } } = await axios.get('/api/categories');
                if (status === 200) {
                    setCategories(categories);
                } else {
                    throw new Error('Unable to fetch categories, Please try again');
                }
            } catch (error) {
                console.warn('error:', error)
            }
        })();
    }, [])

    return (
        <section id="home_main">
            <section className="header_group">
                <div className="w3-display-container w-100 relative_pos">
                    <img className="header_image_slides w-100 block" alt="shopping"
                        src="https://images.unsplash.com/photo-1603798125914-7b5d27789248?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />

                    <div className="absolute_pos header_content">
                        <div className="row">
                            <div>
                                <div className="detail_box">
                                    <h1 className="header_h1 font_bold my-2">
                                        <span className="header_off font_bold my-2">
                                            Sale 20% Off
                                        </span> <br /> On Everything
                                    </h1>
                                    <div className="btn_box">
                                        <Link to='/products' className="btn1 cta_product py-1 px-2 transition_3_ease rounded_sm text_center">
                                            Shop Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="why_section layout_padding">
                <div className="container_group w-100 flex_column">
                    <div className="heading_container heading_center text_center flex_column">
                        <h2>
                            Why Shop With Us
                        </h2>
                    </div>
                    <div className="section_row flex flex_wrap">
                        <div>
                            <div className="why_item text_center rounded_sm">
                                <div className="img_box">
                                    <img src={DeliveryIcon} alt="delivery faster" className="shop_icons m_auto" />
                                </div>
                                <div className="detail_box">
                                    <h5 className="my-1">
                                        Fast Delivery
                                    </h5>
                                    <p className="m-2">
                                        variations of passages of Lorem Ipsum available
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="why_item text_center rounded_sm">
                                <div className="img_box">
                                    <img src={FreeShippingIcon} alt="free shipping" className="shop_icons m_auto" />
                                </div>
                                <div className="detail_box">
                                    <h5 className="my-1">
                                        Free Shiping
                                    </h5>
                                    <p className="m-2">
                                        variations of passages of Lorem Ipsum available
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="why_item text_center rounded_sm">
                                <div className="img_box">
                                    <img src={QualityIcon} alt="Best quality" className="shop_icons m_auto" />
                                </div>
                                <div className="detail_box">
                                    <h5 className="my-1">
                                        Best Quality
                                    </h5>
                                    <p className="m-2">
                                        variations of passages of Lorem Ipsum available
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="new_arrivals_section flex justify_even">
                <NewArrivals season='Summer Collection' image={NewArrivalsImage} />
                <NewArrivals season='Winter Collection' image={NewArrivalsImage} />
            </section>
            <section className="product_section layout_padding">
                <div className="container_group flex_column m_auto">
                    <div className="heading_container heading_center text_center flex_column">
                        <h2> Our products </h2>
                    </div>
                    <div className="section_row flex flex_wrap">
                        <Categories categories={categories} />
                    </div>
                </div>
            </section>
            <Footer />
        </section>
    )
}