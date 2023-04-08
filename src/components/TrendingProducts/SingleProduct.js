import React from 'react';

import SwiperCore, { Virtual, Navigation, Grid, Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from 'react-simple-star-rating';

SwiperCore.use([Virtual, Navigation]);


const SingleProduct = ({ product }) => {
    console.log(product);
    return (
        <div className='mt-3 position-relative'>
            <div className='d-flex align-items-center'>
                <h4 className='sub-title'><span>Food</span> For Health</h4>
            </div>
            <div>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    grid={{
                        rows: 3,
                    }}
                    navigation={true}
                    modules={[Grid, Pagination]}
                    className="mySwiper"
                >
                    {product.map((item, index) => (
                        <SwiperSlide key={item.id} virtualIndex={index}>
                            <div className='card d-flex flex-row align-items-center mt-2'>
                                <div><img src={item.image} alt="" /></div>
                                <div className="card-body">
                                    <Rating initialValue={item.rating} size={12} />
                                    <h4 className='card-title mb-0'>{item.title}</h4>
                                    <h6 className='price'>${item.newPrice} <span className='old-price'><del>${item.oldPrice}</del></span></h6>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button className='btn btn-view'>view all</button>
            </div>
        </div>
    );
};

export default SingleProduct;