import { useRef, useState } from 'react';

import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = props => {
    const [amoutIsValid, SetAmountIsValid] = useState(true);
    const amoutInput = useRef();

    const submitHenler = event => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmountNumber.trim().length === 0 || 
            enteredAmountNumber < 1 || 
            enteredAmountNumber > 5
        ) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };


    return( <from className={classes.form} onSubmit={submitHenler}>
        <Input
            ref={amountInputRef}
            lable="Amount"
            input={{
            id: 'amount',
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }} />
        <button>+ Add</button>
        {!amoutIsValid && <p>Please enter a valid amount (1-5).</p>}
    </from>
    );
};

export default MealItemForm