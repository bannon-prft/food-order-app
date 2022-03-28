import styles from './Header.module.css'
import mainImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Sushi Order App</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles['main-image']}>
        <img src={mainImage} alt="table of food" />
      </div>
    </>
  )
}

export default Header
