import React from 'react'

const ProductItem = ({product,setCart,cart}) => {
  const findProduct = cart.find((item) => item.id === product.id)

  const addToCart = (product) => {
    setCart((prevState) => [...prevState,product])
  }

  return (
    <div className='border p-4 m-2 rounded-lg shadow-lg'>
        <img className=' h-48 object-cover rounded-t-lg   w-full' src={product.image} alt="productimage" />


    <div className='p-4'> 
        <h2 className='text-xl font-semibold mb-2'> {product.name} </h2>
        <p className='text-gray-500 my-2'> {product.price} </p>
        <button disabled={findProduct} onClick={ () =>  addToCart(product) }  className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full'>Sepete Ekle</button>
    </div> 


    </div>
    
  )
}

export default ProductItem