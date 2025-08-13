import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {

    const {currency , 
            delivery_fee_MumbaiAndThane,
            delivery_fee_OutOfMumbai, 
            delivery_fee_OutOfMaharahtra,
            getCartAmount
        } = useContext(ShopContext);

    const [location, setLocation] = useState('mumbai');

    const getDeliveryFee = () => {
        if(location === 'mumbai') return delivery_fee_MumbaiAndThane;
        if(location === 'out_of_mumbai') return delivery_fee_OutOfMumbai;
        if(location === 'out_of_maharashtra') return delivery_fee_OutOfMaharahtra;
        return 0;
    };

    const deliveryFee = getDeliveryFee();
    const subTotal = getCartAmount();
    const total = subTotal === 0 ? 0 : subTotal + deliveryFee;
    
  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={'CART'} text2={'TOTALS'}/>
      </div>

      {/* Location selector */}
      <div className='mt-4 mb-2'>
        <label className='block text-sm font-medium mb-1'>Select Delivery Location:</label>
        <select className="border p-2 rounded w-full" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}>

            <option value="mumbai">Mumbai</option>
            <option value="out_of_mumbai">Out of Mumbai</option>
            <option value="out_of_maharashtra">Out of Maharashtra</option>
        </select>
      </div>

      {/* Totals */}
      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
            <p>Subtotal</p>
            <p>{currency} {subTotal}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
            <p>Shipping Fee</p>
            <p>{currency} {deliveryFee}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
            <b>Total</b>
            <b>{currency} {total}.00</b>
        </div>
      </div>
    </div>
  )
}

export default CartTotal
