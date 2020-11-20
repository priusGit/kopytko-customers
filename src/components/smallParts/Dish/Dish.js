import React, { Component } from 'react';
import axios from '../../../axios-orders';
import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux';
import classes from './Dish.module.css'
class Dish extends Component {
    render() {
        return (
            <div className={classes.Dish} onClick={() => this.props.onItemClicked(this.props.title)}>
                <p className={classes.DishTitle}>{this.props.title}</p>
                <p className={classes.DishDisc}>I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.</p>
                <p className={classes.DishPrice}>{this.props.price}</p>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onItemClicked: (item) => dispatch(actions.addItemOnClickAction(item))
    };
};
export default connect(null, mapDispatchToProps)(Dish, axios);