// eslint-disable-next-line no-unused-vars
import React from 'react'
import { StateContextCustom } from '../Context/StateContex'
import Product from './Product';

const Products = () => {
  const {state:{products}} = StateContextCustom(); 
  return (
    <div className='flex justify-center flex-wrap gap-10 mt-14'>
    {
      products?.map(pd=>{
        return(
          <Product key={pd.id} {...pd}/>
        )
      })
    }
    </div>
  )
}

export default Products