import React, { Component } from 'react';
import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux';
import classes from './BasketElement.module.css'
class BasketElement extends Component {
    render() {
        return (
            <div className={classes.MobileBasketElement} onClick={() => this.props.onOrderElementClick(this.props.title, this.props.price, this.props.id)}
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
                        <span>+</span>
                        <span>-</span>
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
        onOrderElementClick: (item, price,id) => dispatch(actions.deleteItemFromBasketAction(item, price,id))
    };
};
// eslint-disable-next-line no-lone-blocks
{/* <p className={classes.DishTitle}>{this.props.title}</p>
                <p>Dodaj notatkę</p>
                <p>{this.props.price}zł</p>
                <p>{this.props.amount}</p>
                <div className={classes.endLine}></div> */}
export default connect(mapStateToProps, mapDispatchToPrsops)(BasketElement);
