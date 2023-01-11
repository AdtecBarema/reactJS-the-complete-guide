import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Doro",
    description: "Finest Chicken and  spicies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Mahiberawi",
    description: "A Ethiopian Speciality, combo of best picks",
    price: 25.99,
  },
  {
    id: "m3",
    name: "Kitfo ",
    description: "Ethiopian, raw, meaty",
    price: 20.99,
  },
  {
    id: "m4",
    name: "Beyaynetu ",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem      
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
