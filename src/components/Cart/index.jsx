import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../CartItem'
import { Link } from 'react-router-dom'

// import { myCartState } from '../../features/addtoCartSlice'



const Cart = () => {
   
    const wholeState=useSelector((state)=>state.addtoCart)
    const dispatch=useDispatch()
   
    //  console.log("length is ",wholeState.addtoCart.listItemAdded.length)
    console.log("my whole state",wholeState)

   const handlePayment=()=>{
    console.log("Activated")
    
   
    

   }
  return (
    <div className='w-[30%] flex flex-col items-center p-[10px] mt-[10px] mr-[30px] bg-[#ECFCCB] rounded-[8px] min-h-[30vh]'>
        <h1 className='my-[10px] text-2xl font-[500]  text-black-600  font-[Oswald]'>Cart Item</h1>
        <ul className='list-none'>
            {wholeState.listItemAdded.map((each)=>{
                return <CartItem key={each.id} eachCartItem={each}/>
        })}
    </ul>

        <p className='text-base font-[700] font-[Roboto] '>Total Amount:{`$ ${wholeState.totalamount}`}</p>
        <Link to="product">
        <button onClick={handlePayment} className='
        hover:scale-[1.2] shadow-xl shadow-indigo-500/40  duration-[600ms] 
        text-center h-[30px] w-[170px] my-[12px] bg-blue-500 rounded-md text-base font-[500]  text-black-600'>Preceed for payment</button>
        </Link>
    </div>
  )
}

export default Cart