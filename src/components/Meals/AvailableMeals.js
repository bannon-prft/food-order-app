import { useEffect, useState } from 'react'

import Card from '../UI/Card'
import MealItem from './MealItem'
import styles from './AvailableMeals.module.css'

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    const fetchMeals = async () => {
      const res = await fetch(
        'https://react-complete-guide-8e169-default-rtdb.firebaseio.com/meals.json'
      )

      if (!res.ok) {
        throw new Error('Something went wrong!')
      }

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
      setIsLoading(false)
    }

    fetchMeals().catch((err) => {
      setIsLoading(false)
      setError(err.message)
    })
  }, [])

  if (isLoading) {
    return (
      <section className={styles.mealsLoading}>
        <p>Loading...</p>
      </section>
    )
  }

  if (error) {
    return (
      <section className={styles.mealsError}>
        <p>{error}</p>
      </section>
    )
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ))

  return (
    <Card className={styles.meals}>
      <ul>{mealsList}</ul>
    </Card>
  )
}

export default AvailableMeals
