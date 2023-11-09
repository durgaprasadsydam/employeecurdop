import React from 'react';
import SingleProducts from './SingleProducts';

function Products() {
  return (
    <div className='container  py-5'>
        <div className='row'>
            <h2 className='text-center mb-3 mb-lg-5'>Our Special Products</h2>
            <div className='box'> 
                <SingleProducts title="Samsung S23" url="https://m.media-amazon.com/images/I/71qGismu6NL._SX679_.jpg" off="25" cost='60,000' />
                <SingleProducts title="iQOO Neo 7 5G" url="https://m.media-amazon.com/images/I/61IiuWQcVjL._SX679_.jpg" off="20" cost='27,999' />
                <SingleProducts title="Samsung Galaxy M34 5G" url="https://m.media-amazon.com/images/I/91ItZJh1FDL._SX679_.jpg" off="33" cost='16,299' />
                <SingleProducts title="Xiaomi 12 Pro 5G" url="https://m.media-amazon.com/images/I/71vNgTH3MzL._SX679_.jpg" off="51" cost='41,999' />
                <SingleProducts title="Redmi 12 5G " url="https://m.media-amazon.com/images/I/61SmnheBBRL._SX679_.jpg" off="25" cost='11,999' />
            </div>
        </div>
    </div>
  );
}

export default Products;
