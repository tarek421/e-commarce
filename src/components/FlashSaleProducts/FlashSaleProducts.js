import React, { useState } from 'react';
import './FlashSaleProducts.css';
import banner from '../../image/banner.png';
import CountdownTimer from '../CountDownTimer';
import Card from './Card';
import { flashSaleProducts } from '../../data';
import SwiperCore, { Virtual, Navigation } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { screen } from '@testing-library/react';
SwiperCore.use([Virtual, Navigation]);

const FlashSaleProducts = () => {

    // let mobile = screen.width;
    console.log(screen.width);

    return (
        <div id='flash-sale-product'>
            <div className="px-5 py-5">
                <div className="row">
                    <div className="col-lg-10">
                        <div className="header d-flex">
                            <div className='d-flex align-items-center'>
                                <h2 className='title'><span className='font-weight-bold'>Flash</span> Sale Product</h2>
                                <CountdownTimer />
                            </div>
                        </div>
                        <div className="content d-flex  position-relative">
                            <Swiper
                                // slidesPerView={5}
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
                                    768: {
                                        width: 768,
                                        slidesPerView: 2,
                                    },
                                    1020: {
                                        width: 1020,
                                        slidesPerView: 5,
                                    },
                                }}
                            >
                                {flashSaleProducts.map((slideContent, index) => (
                                    <SwiperSlide key={slideContent} virtualIndex={index}>
                                        <Card item={slideContent} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                        </div>
                    </div>
                    <div className="col-lg-2">
                        <img className='w-100 h-100' src={banner} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlashSaleProducts;