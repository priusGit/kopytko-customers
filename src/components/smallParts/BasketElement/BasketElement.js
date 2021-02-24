import React, { Component } from 'react';
import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux';
import classes from './BasketElement.module.css'
class BasketElement extends Component {
    render() {
        return (
            <div className={classes.MobileBasketElement}
            >
                {this.props.id===0 ? <div className={classes.endLine}></div> : null}
                <div className={classes.mBasketContainer}>
                <div className={classes.mBasketLeft}>
                    <p>{this.props.amount}</p>
                </div>
                <div className={classes.mBasketMid}>
                    <p>{this.props.title}</p>
                </div>
                <div className={classes.mBasketRight}>
                    <p>{this.props.amount * this.props.price}zł</p>
                    <div className={classes.addDelete}>
                        <p onClick={() => this.props.addItem(this.props.title, this.props.price, this.props.id)}>+</p>
                        <p onClick={() => this.props.deleteItem(this.props.title, this.props.price, this.props.id)}>-</p>
                    </div>
                </div>
                </div>
                <div className={classes.endLine}></div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        orderedItems: state.orderedItems
    };
};

const mapDispatchToPrsops = dispatch => {
    return {
        deleteItem: (item, price,id) => dispatch(actions.deleteItemFromBasketAction(item, price,id)),
        addItem: (item, price,id) => dispatch(actions.addItemOnClickAction(item, price,id))
    };
};
export default connect(mapStateToProps, mapDispatchToPrsops)(BasketElement);
