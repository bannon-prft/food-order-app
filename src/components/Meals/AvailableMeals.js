import { DUMMY_MEALS } from '../../assets/dummy-meals'

import Card from '../UI/Card'
import MealItem from './MealItem'
import styles from './AvailableMeals.module.css'

const AvailableMeals = (props) => {
  return (
    <Card className={styles.meals}>
      <ul>
        {DUMMY_MEALS.map((meal) => (
          <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
          />
        ))}
      </ul>
    </Card>
  )
}

export default AvailableMeals
