import React from 'react';
import './styles.css';

const Product = ({ image, title, subtitle }) => {
    return (
        <div className='product'>
            <img className='productImage' src={image} alt={title} />
            <h4 className='productTitle'>{title}</h4>
            <div className='subtitleDiv'>
                <h5 className='productSubtitle'>{subtitle}</h5>
            </div>
        </div>
    );
};

export default Product;
