import { useContext, useState } from 'react'

import CartContext from '../../store/cart-context'
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import Checkout from './Checkout'
import styles from './Cart.module.css'

const Cart = (props) => {
  const [checkout, setCheckout] = useState(false)

  const cartCtx = useContext(CartContext)

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  }

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 })
  }

  const orderHandler = () => {
    setCheckout(true)
  }

  const modalActions = (
    <div className={styles.actions}>
      <button className={styles['button--alt']} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={styles.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  )

  return (
    <Modal onClick={props.onClose}>
      <ul className={styles['cart-items']}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        ))}
      </ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {checkout && <Checkout onCancel={props.onClose} />}
      {!checkout && modalActions}
    </Modal>
  )
}

export default Cart
