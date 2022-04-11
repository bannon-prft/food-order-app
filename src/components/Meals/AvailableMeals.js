import { useEffect, useState } from 'react'

import Card from '../UI/Card'
import MealItem from './MealItem'
import styles from './AvailableMeals.module.css'

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([])

  useEffect(() => {
    const url =
      'https://react-complete-guide-8e169-default-rtdb.firebaseio.com/meals.json'
    const fetchMeals = async () => {
      const res = await fetch(url)
      const data = await res.json()

      const loadedMeals = []

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        })
      }
      setMeals(loadedMeals)
    }

    fetchMeals()
  }, [])

  return (
    <Card className={styles.meals}>
      <ul>
        {meals.map((meal) => (
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
