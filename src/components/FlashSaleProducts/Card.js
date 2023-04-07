import React from 'react';
import { Rating } from 'react-simple-star-rating';

const Card = ({ item }) => {
    const { title, rating, catagory, oldPrice, newPrice, image } = item;
    return (
        <div className='card'>
            <img src={image} alt="" />
            <div className="card-body">
                <h6 className='catagory'>{catagory}</h6>
                <h4 className='card-title mb-0'>{title}</h4>
                <Rating initialValue={rating} size={15} />
                <h6 className='price'>${newPrice} <span className='old-price'><del>${oldPrice}</del></span></h6>
                <a href="/" class="btn w-100">Add to cart <i class="fa-regular fa-bag-shopping"></i></a>
            </div>
        </div>
    );
};

export default Card;