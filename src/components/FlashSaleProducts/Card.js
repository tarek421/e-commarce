import React from 'react';
import { Rating } from 'react-simple-star-rating';
import image1 from '../../image/f-product-1.png';
import image2 from '../../image/f-product-4.png';
import image3 from '../../image/f-product-6.png';

import SwiperCore, { Virtual, Navigation, Pagination, EffectFade } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Virtual, Navigation]);

const Card = ({ item }) => {
    const { title, rating, catagory, oldPrice, newPrice, image } = item;
    return (
        <div className='card' id='card'>
            <span className='sale'>Sale</span>
            <img className='hover-none' src={image} alt="" />
            <div className='hover-block'>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    effect={"fade"}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[EffectFade, Navigation, Pagination]}
                    className="mySwiper"
                    Virtual
                >
                    <SwiperSlide>
                        <img src={image1} alt='eye' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image2} alt='eye' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image3} alt='eye' />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="card-body">
                <h6 className='catagory'>{catagory}</h6>
                <h4 className='card-title mb-0'>{title}</h4>
                <div className='hover-none'>
                    <Rating initialValue={rating} size={15} />
                    <h6 className='price'>${newPrice} <span className='old-price'><del>${oldPrice}</del></span></h6>
                </div>
                <div className='hover-block icon'>
                    <div className="d-flex justify-content-between">
                        <img src="https://img.icons8.com/ios-glyphs/30/null/visible--v1.png" alt='eye' />
                        <img src="https://img.icons8.com/ios-glyphs/30/null/hearts.png" alt='love' />
                        <img src="https://img.icons8.com/material-outlined/24/null/sorting-arrows.png" alt='arrow' />
                    </div>
                </div>
                <a href="/" class="btn w-100">Add to cart <i class="fa-regular fa-bag-shopping"></i></a>
            </div>

        </div>
    );
};

export default Card;