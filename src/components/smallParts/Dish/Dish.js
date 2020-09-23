import React from 'react';
import classes from './Dish.module.css'
const Dish = (props) => (
    <div className={classes.Dish}>
        <p className={classes.DishTitle}>{props.title}</p>
        <p className={classes.DishDisc}>I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.</p>
        <p className={classes.DishPrice}>{props.price}</p>
    </div>
)

export default Dish;