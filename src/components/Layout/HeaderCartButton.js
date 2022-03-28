import { useContext } from 'react'

import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'
import styles from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
  const total = useContext(CartContext).totalAmount

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>
        {total}
      </span>
    </button>
  )
}

export default HeaderCartButton
