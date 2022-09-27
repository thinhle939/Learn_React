import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        descriptions: 'Finest fish and veggies',
        price: '22.99'
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        descriptions: 'A german specialty',
        price: '16.99'
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        descriptions: 'American, raw, meaty',
        price: '12.99'
    },
    {
        id: 'm4',
        name: 'Green Bowl Burger',
        descriptions: 'Healthy...and green...',
        price: '99.99'
    },
]



const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => (
        <MealItem 
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    return <session className={classes.meals}>
        <Card>
            <ul>
                {mealsList}
            </ul>
        </Card>  
    </session>

};


export default AvailableMeals