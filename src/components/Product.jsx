/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { StateContextCustom } from '../Context/StateContex';

const Product = (props) => {
   
    const {id,title,description,image,price} = props;
    const {disptch} = StateContextCustom()
  return (
    <div>
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} className='w-[200px] h-[200px]'/></figure>
  <div className="card-body">
    <h2 className="card-title text-purple-400">{title.slice(0,50)}</h2>
    <h1 className='text-[20px]'>${price}</h1>
    <p>{description.slice(0,70)}......</p>
    <div className="card-actions justify-between">
      <button onClick={()=>disptch({type:"ADD_TO_CART",payload:props})} className="btn btn-primary">Add To Cart</button>
      <button className="btn btn-primary">Detail</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Product