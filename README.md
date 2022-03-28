# Food Order App

This project is a practice project from [React - The Complete Guide (incl Hooks, React Router, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)

## Building the Header

- Need actual header (with cart icon) and the image below
  - Has a Page Title and the cart icon (as a button) - header section
  - Has the image below - img section (within div)
- Problem with the supplied `.header` styling, pushes button off screen
  - Seems that the `position: fixed` css rule along with `top: 0; left: 0` and `padding: 0 10%` is causing the header element to compensate the padding width into a negative `right` position
  - This was caused by starting my own project and not copying over the `index.css` stylings from the starting-project
    - The actual rule that fixed it was
    ```css
    * {
      box-sizing: border-box;
    }
    ```
    - Without this rule, the padding on a fixed element causes the position to compensate
- Can use spans inside of buttons to add multiple content

## Adding Meals section

- Created AvailableMeals first as the dummy-meals information was supplied
- Created MealItem which holds the information from the dummy-meals.js and also the form for each item to add things to the cart
- Created MealItemForm which holds the input/label and a button to add things to cart
  - Set defaultValue for input to 1
- Created Input component for the amount/label that is needed in each meal
  - This component is also built to be reusable if another part of the app would need it, not sure at time of creation if that is needed
- Created Card component to add styling provided and used AvailableMeals as child
- Too big of a space on the name/description/price in MealItem component
  - Seems as if semantically the structure is wrong
  - Changing the `<p></p>` tags to `<div></div>` seemed to do the trick
- Added Meals.js as recommended by instructor
  - This really just causes one less import in App.js
