import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCart } from '../Features/Cart/cartSlice'
import { close } from '../Features/Modal/modalSlice'
const Modal = () => {
    const dispatch = useDispatch()
  return (
    <aside className='modal-container'>
    <div className='modal'>
      <h4>Remove all items from your shopping cart?</h4>
      <div className='btn-container'>
        <button type='button' className='btn confirm-btn' onClick={()=>{dispatch(clearCart()); dispatch(close())}}>
          confirm
        </button>
        <button type='button' className='btn clear-btn' onClick={()=>{dispatch(close())}}>
          cancel
        </button>
      </div>
    </div>
  </aside>
    )
}

export default Modal