import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = props => {
    return( <from className={classes.form}>
        <Input lable="Amount" input={{
            id: 'amount',
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }} />
        <button>+ Add</button>
    </from>
    );
};

export default MealItemForm