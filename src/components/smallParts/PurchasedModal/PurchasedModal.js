import React, { Component } from 'react';
import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux';
import classes from './PurchasedModal.module.css'
import Spinner from '../Spinner/Spinner'
import Auxi from '../../../hoc/Auxi'
import { NavLink } from 'react-router-dom'
class PurchasedModal extends Component {
    render() {
        let modalConent;
        if(this.props.orderStatus==="sent"){
            modalConent = <Spinner/>
        }
        else
        {
            if(this.props.orderStatus==="success")
            {  
                modalConent =(
                    <Auxi>
                        <h1 className={classes.ModalH}>Garnki w ruch!</h1>
                        <p>twoje zamówienie zostało przyjęte przez restaurację</p>
                        <p>Wysyłka za około: 45 minut</p>
                        <NavLink onClick={()=> this.props.afterPurchase(this.props.orderStatus)} className={classes.toMainPage} exact to={"/"}>Strona główna</NavLink>
                    </Auxi>
                )
            }
            else{
                
                modalConent =(
                    <Auxi>
                        <p>nie udało sie sory</p>
                        <NavLink onClick={()=> console.log("chuj")} className={classes.toMainPage} exact to={"/"}>Strona główna</NavLink>
                    </Auxi>
                )
            }
        }
        return (
            <div className={classes.PurchasedModalBG}>
                <div className={classes.PurchasedModal}>
                {modalConent}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        orderStatus:state.orderStatus
    };
};

const mapDispatchToProps = dispatch => {
    return {
        afterPurchase: (orderStatus) => dispatch(actions.afterPurchase(orderStatus)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(PurchasedModal);
