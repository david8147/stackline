import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchData} from './actions/dataFetch';

import Header from './components/Header/Header'
import ProductDescription from './components/ProductDescription/ProductDescription'


const App = () =>{
    const data = useSelector((state) => state.dataFetchReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    const renderData = () =>{
        return (
            <div className={'content-container'}>
                <ProductDescription productData={data.productData} />
                {/*<div style={{ background: white, width: '70%' }}>*/}
                    {/*<Graph data={data.productData.sales} />*/}
                    {/*<Sales sales={data.productData.sales} />*/}
                {/*</div>*/}
            </div>
        );
    }
    return (
        <div className="App">
            <Header/>
            {data.loading ? null : renderData()}
        </div>
    );
}

export default App;
