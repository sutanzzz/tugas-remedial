import React from 'react'

import ProductListing from '../features/product-listing'

import data from '../data/product.json'

export default function HomePage (props) {
    return  <div className='bg'>
    
        <div className='page-container'>
        <h2>Become a Host </h2>
        <ProductListing products={data.products} />
        </div>
    </div>

}