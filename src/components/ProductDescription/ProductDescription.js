import React  from 'react';
import './styles.css';
import home from '../../img/home.png';
import sales from '../../img/sales.png';
import Tags from '../Tags/Tags';
import Product from '../Product/Product';

const ProductDescription= ({productData}) => {
    return (
        <div className='product-container'>
            <Product
                title={productData.title}
                image={productData.image}
                subtitle={productData.subtitle}
            />
            <Tags tags={productData.tags} />
            <div style={{display:'flex', flexDirection:'row', justifyContent: 'space-between', marginLeft:-160, marginTop:10}}>
                <img style={{height:20, width:20, marginTop:15, marginRight:10}} src={home} alt='home'/>
                <p style={{color:'#9c9c9c', fontSize:15}}>OVERVIEW</p>
            </div>
            <div style={{display:'flex', flexDirection:'row', justifyContent: 'space-between', marginLeft:-190}}>
                <img style={{height:20, width:20, marginTop:15, marginRight:10}} src={sales} alt='sales'/>
                <p style={{fontSize:15}}> SALES</p>
            </div>
        </div>
    );
}

export default ProductDescription;
