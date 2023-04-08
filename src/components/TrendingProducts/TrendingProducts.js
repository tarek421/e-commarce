import React from 'react';
import { trendingProducts } from '../../data';
import './TrendingProducts.css';

import SingleProduct from './SingleProduct';

const dress = trendingProducts.filter(item => item.catagory === "Dress");
const food = trendingProducts.filter(item => item.catagory === "Food");
const cosmetics = trendingProducts.filter(item => item.catagory === "Cosmetics");

const TrendingProducts = () => {
    return (
        <div id='trending-product'>
            <div className="p-5">
                <h2 className='title'><span>Trending</span> Product</h2>
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <SingleProduct title="Fashion For Women" product={dress} />
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <SingleProduct title="Food For Health" product={food} />
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <SingleProduct title="Cosmetics For Winter" product={cosmetics} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingProducts;