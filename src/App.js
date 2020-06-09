import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchData} from './actions/dataFetch';

const App = () =>{
    const data = useSelector((state) => state.dataFetchReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    console.log(data.productData.title);
    return (
        <div className="App">
            data
        </div>
    );
}

export default App;
