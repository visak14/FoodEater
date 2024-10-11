import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
const PlaceOrder = () => {


   const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <from className='place-order' >
       <div className=' place-order-left'>
         <p className='title'>Delivery Information</p>
         <div className=' multi-fields'>
          <input type='text' placeholder='First name'/>
          <input type='text' placeholder='Last name'/>
         </div>
         <input type='text' placeholder='Emal Address'/>
         <input type='text' placeholder='Street'/>

         <div className='multi-fields'>
          <input type='text' placeholder='city'/>
          <input type='text' placeholder='State'/>
         </div>
         <div className='multi-fields'>
          <input type='text' placeholder='Zip Code'/>
          <input type='text' placeholder='Country'/>
         </div>
         <input type='text' placeholder='Phone'/>
       </div> 
       <div className=' place-order-right'>
       <div className='cart-total '>
          <h2 className=' font-bold text-2xl'>Cart Totals</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}₹</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Delivery fee</p>
              <p>{getTotalCartAmount() === 0?0:2}₹</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Total</p>
              <p>{getTotalCartAmount()===0?0: getTotalCartAmount()+2}₹</p>
            </div>
           
          </div>
          <button >PROCEED TO PAYMENT</button>
        </div>     
       </div>
    </from>
  )
}

export default PlaceOrder