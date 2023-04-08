import React from 'react';
import './FlashSaleProducts.css';
import banner from '../../image/banner.png';
import CountdownTimer from '../CountDownTimer';
import Card from './Card';
import { flashSaleProducts } from '../../data';
import SwiperCore, { Virtual, Navigation } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Virtual, Navigation]);

const FlashSaleProducts = () => {

    return (
        <div id='flash-sale-product'>
            <div className="p-5">
                <div className="row">
                    <div className="col-lg-10 col-md-12">
                        <div className=" d-flex">
                            <div className='header d-flex align-items-center'>
                                <h2 className='title'><span>Flash</span> Sale Product</h2>
                                <CountdownTimer />
                            </div>
                        </div>
                        <div className="content d-flex position-relative">
                            <Swiper
                                spaceBetween={0}
                                pagination={{
                                    type: "fraction",
                                }}
                                navigation={true}
                                virtual
                                breakpoints={{
                                    400: {
                                        width: 400,
                                        slidesPerView: 1,
                                    },
                                    568: {
                                        width: 568,
                                        slidesPerView: 2,
                                    },
                                    768: {
                                        width: 768,
                                        slidesPerView: 3,
                                    },
                                    1020: {
                                        width: 1020,
                                        slidesPerView: 5,
                                    },
                                }}
                            >
                                {flashSaleProducts.map((slideContent, index) => (
                                    <SwiperSlide key={slideContent.id} virtualIndex={index}>
                                        <Card item={slideContent} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                        </div>
                    </div>
                    <div className="col-lg-2 d-none d-lg-block">
                        <img className='w-100 h-100' src={banner} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlashSaleProducts;