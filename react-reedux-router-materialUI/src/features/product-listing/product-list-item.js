import React from 'react'
import AddBtn from './add-btn'

export default function ProductListItem(props) {
    return <div className='product-list-item'>
        <h3>{ props.product.name }</h3>
        <img 
         height={150}
         title={ props.product.name }
         src={`/products/${props.product.image}`}
        />
        <div>{ props.product.description }</div>
        <div>${ props.product.price }</div>
        <div>
            <AddBtn 
                cartItem={props.cartItem} 
                product={props.product} 
                addToCart={props.addToCart}
            />
           
        </div>
    </div>
}