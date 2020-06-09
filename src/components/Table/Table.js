import React from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";

const Table = ({data}) => {
    const processData = (data) =>{
        data.forEach((entry)=>{
            entry.retailSales = "$" + entry.retailSales;
            entry.wholesaleSales = "$" + entry.wholesaleSales;
            entry.retailerMargin = "$" + entry.retailerMargin;
        });
        return data;
    }
    const columnEntry = [
        {Header: 'Week Ending', accessor: 'weekEnding'},
        {Header: 'Retail Sales', accessor: 'retailSales'},
        {Header: 'Wholesale Sales', accessor: 'wholesaleSales'},
        {Header: 'Units Sold', accessor: 'unitsSold'},
        {Header: 'Retailer Margin', accessor: 'retailerMargin'}
    ];
    return (
        <div className='tableColor'>
            <ReactTable
                className={'-highlight'}
                columns={columnEntry}
                data={processData(data)}
                defaultSorted={[{ id: 'weekEnding' }]}
                showPagination={false}
            />
        </div>
    );
}

export default Table;
