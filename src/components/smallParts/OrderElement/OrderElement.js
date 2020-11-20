import React, { Component } from 'react';
import classes from './OrderElement.module.css'
class OrderElement extends Component {
    render() {
        return (
            <div className={classes.OrderElement}>
                <p className={classes.DishTitle}>{this.props.title}</p>
            </div>
        )
    }
}
export default OrderElement;