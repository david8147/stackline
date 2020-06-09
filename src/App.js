import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchData} from './actions/dataFetch';

import Header from './components/Header/Header'
import ProductDescription from './components/ProductDescription/ProductDescription'
import SalesData from './components/SalesData/SalesData'
import Table from './components/Table/Table'

import './App.css'
const App = () =>{
    const data = useSelector((state) => state.dataFetchReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    const renderData = () =>{
        return (
            <div className='mainContainer'>
                <ProductDescription data={data.productData} />
                <div className='contentContainer'>
                    <SalesData data={data.productData.sales} />
                    <Table data={data.productData.sales} />
                </div>
            </div>
        );
    };
    return (
        <div className="App">
            <Header/>
            {data.loading ? renderData() : null}
        </div>
    );
}

export default App;
