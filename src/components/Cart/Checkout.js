import { useRef, useState } from 'react'

import styles from './Checkout.module.css'

const isEmpty = (value) => value.trim() === ''
const isNotFiveChars = (value) => value.trim().length !== 5

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  })

  const nameInputRef = useRef()
  const streetInputRef = useRef()
  const postalInputRef = useRef()
  const cityInputRef = useRef()

  const confirmHandler = (event) => {
    event.preventDefault()

    const enteredName = nameInputRef.current.value
    const enteredStreet = streetInputRef.current.value
    const enteredPostal = postalInputRef.current.value
    const enteredCity = cityInputRef.current.value

    const enteredNameIsValid = !isEmpty(enteredName)
    const enteredStreetIsValid = !isEmpty(enteredStreet)
    const enteredPostalIsValid = !isNotFiveChars(enteredPostal)
    const enteredCityIsValid = !isEmpty(enteredCity)

    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postal: enteredPostalIsValid,
      city: enteredCityIsValid,
    })

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalIsValid &&
      enteredCityIsValid

    if (!formIsValid) {
      return
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity,
    })
  }

  const nameClasses = `${styles.control} ${
    formInputValidity.name ? '' : styles.invalid
  }`
  const streetClasses = `${styles.control} ${
    formInputValidity.street ? '' : styles.invalid
  }`
  const postalClasses = `${styles.control} ${
    formInputValidity.postal ? '' : styles.invalid
  }`
  const cityClasses = `${styles.control} ${
    formInputValidity.city ? '' : styles.invalid
  }`

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} type="text" id="name" />
        {!formInputValidity.name && <p>Please enter a valid name.</p>}
      </div>
      <div className={streetClasses}>
        <label htmlFor="street">Street</label>
        <input ref={streetInputRef} type="text" id="street" />
        {!formInputValidity.street && <p>Please enter a valid street.</p>}
      </div>
      <div className={postalClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalInputRef} type="text" id="postal" />
        {!formInputValidity.postal && (
          <p>Please enter a valid postal code, 5 characters long.</p>
        )}
      </div>
      <div className={cityClasses}>
        <label htmlFor="city">City</label>
        <input ref={cityInputRef} type="text" id="city" />
        {!formInputValidity.city && <p>Please enter a valid city.</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  )
}

export default Checkout
