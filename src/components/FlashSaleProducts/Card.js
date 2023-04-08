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
                <div className='hover-none'>
                    <Rating initialValue={rating} size={15} />
                    <h6 className='price'>${newPrice} <span className='old-price'><del>${oldPrice}</del></span></h6>
                </div>
                <div className='hover-block'>
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