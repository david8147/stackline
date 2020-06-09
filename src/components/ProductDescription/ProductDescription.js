import React  from 'react';
import './styles.css';
import home from '../../img/home.png';
import sales from '../../img/sales.png';
import Tags from '../Tags/Tags';
import Product from '../Product/Product';

const ProductDescription= ({data}) => {
    return (
        <div className='productContainer'>
            <Product title={data.title} image={data.image} subtitle={data.subtitle}/>
            <Tags tags={data.tags} />
            <div className='overviewContainer'>
                <img className='logoImage' src={home} alt='home'/>
                <p className='overviewText'>OVERVIEW</p>
            </div>
            <div className='salesContainer'>
                <img className='logoImage' src={sales} alt='sales'/>
                <p className= 'salesText'>SALES</p>
            </div>
        </div>
    );
}

export default ProductDescription;
