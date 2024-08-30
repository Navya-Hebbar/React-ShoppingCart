import React from 'react';
import { useCart } from 'react-use-cart';

const Cart = () => {
    const
    {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    }=useCart();

    if(isEmpty) return <h1 className='text-center' style={{color:'white',textShadow:'none'}}>Your Cart is Empty</h1>
  return (
    <section className='py-4 container'>
        <div className='row justify-content-center'>
            <div className='col-12'>
                <h5>Total Items:({totalItems}) &nbsp; &nbsp; Cart:({totalUniqueItems})</h5>
                <table className='table table-light table-hover m-0'>
                    <tbody>
                    {items.map((val,index)=>
                    {
                        return(
                        <tr key={index}>
                            <td>
                                <img src={val.img} style={{height:'6rem'}}/>
                            </td>
                            <td>{val.title}</td>
                            <td>{val.price}</td>
                            <td>Quantity ({val.quantity})</td>
                            <td>
                                <button className='btn btn-info ms-2'
                                onClick={()=>updateItemQuantity(val.id,val.quantity-1)}>-</button>
                                <button className='btn btn-info ms-2'
                                 onClick={()=>updateItemQuantity(val.id,val.quantity+1)}>+</button>
                                <button className='btn btn-danger ms-2'
                                onClick={()=>removeItem(val.id)}>Remove Items</button>
                            </td>
                        </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
            <div className='col-auto ms-auto'>
                <h4>TOTAL PRICE: Rs.{cartTotal}</h4>
            </div>
            <div className='col-auto'>
                <button className='btn btn-primary ms-2'
                onClick={()=>emptyCart()}>Clear Cart</button>
                
                <button className='btn btn-primary ms-2'>Pay Now</button>
            </div>
        </div>
    </section>
  )
}

export default Cart
