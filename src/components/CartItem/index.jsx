import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../features/addtoCartSlice'


const CartItem = (props) => {
    const [quantity, setquantity] = useState(1) 
    const myStateCurrent=useSelector((state)=> state.addtoCart)
    const {eachCartItem}=props
    const {id,imageUrl,title,price,numberofItem}=eachCartItem
    const dispatch=useDispatch()
    const increaseHandle=()=>{
        setquantity(quantity+1)
        console.log(id,quantity)
        dispatch(increment({quantity,myId:id}))
    }
    const decreaseHandle=()=>{
        setquantity(quantity-1)
        dispatch(decrement({quantity,myId:id}))
    }   
    console.log("my current state",myStateCurrent)
    
  return (
    <li className='p-[5px] border-2 rounded-xl mb-2 border-zinc-700'  >
        <h1 className='text-base font-[700] font-[Roboto]'>{title}</h1>
                    <div className='flex my-[15px] justify-between'>

                <img src={imageUrl} alt="image" className=' rounded-[5px] mix-blend-multiply h-[35px] w-[30px]' />
                <div className='mr-[20px] flex items-center flex-row'>
                    <button className='text-center h-[30px] w-[25px] bg-blue-500 rounded-md text-base font-[700]  text-black-600' onClick={decreaseHandle}>-</button>
                    <p className='mx-[10px] text-base font-[700] font-[Roboto]'>{numberofItem}</p>
                    <button className='text-center h-[30px] w-[25px] bg-blue-500 rounded-md text-base font-[700]  text-black-600' onClick={increaseHandle}>+</button>
                </div>
                    </div>
                <p className='text-base font-[700] font-[Roboto]'>{`$ ${price}`}</p>
            </li> 
  )
}

export default CartItem

