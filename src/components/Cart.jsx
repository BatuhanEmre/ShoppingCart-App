import React from 'react'

const Cart = ({cart,emptyCart}) => {

  const total = cart.reduce((acc,item) => acc + item.price ,0)


  if(cart.lengt === 0) return;

  return (
    <div className='border ml-auto w-72 p-4 mt-2 rounded-lg shadow-lg '>
        <h2 className='text-2xl font-semibold'>Sepet</h2>
        <ul>
          {cart.map((item) => (
           <li className='mt-2 flex justify-between'>
          <span>{item.name} </span>
 <        span>  {item.price} </span>

</li>
          ))}
           
        </ul>
        <hr className='my-4'/>
        <p className=' font-semibold text-xl'>Toplam : {total} TL</p>
        <button className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all w-full mt-4 ' onClick={emptyCart} >Sepeti Boşalt</button>
    </div>
  )
}

export default Cart