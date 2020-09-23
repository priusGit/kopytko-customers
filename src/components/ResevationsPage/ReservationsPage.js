import React, { Component } from 'react';
import Input from '../smallParts/Input/Input';
import classes from './ReservationsPage.module.css';
import axios from '../../axios-orders';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
class ReservationsPage extends Component {
    componentDidMount() {
        this.props.onFetchReservations();
    }

    state = {
        reservationForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Imię'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            surName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Nazwisko'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            phoneNumber: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Numer Telefonu'
                },
                value: '',
                validation: {
                    required: true,
                    isNumeric: true
                },
                valid: false,
                touched: false
            },
            reservationDate: {
                elementType: 'date',
                validation: {},
                valid: true
            }
        },
        formIsValid: false
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedreservationForm = {
            ...this.state.reservationForm
        };
        const updatedFormElement = {
            ...updatedreservationForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedreservationForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedreservationForm) {
            formIsValid = updatedreservationForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({ reservationForm: updatedreservationForm, formIsValid: formIsValid });
    }
    reservationHandler = (event) => {
        event.preventDefault();

        const formData = {};
        for (let formElementIdentifier in this.state.reservationForm) {
            formData[formElementIdentifier] = this.state.reservationForm[formElementIdentifier].value;
        }
        console.log(formData);
        console.log(this.props.numberOfReservations);
        this.props.onReservationSent(formData);
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.reservationForm) {
            formElementsArray.push({
                id: key,
                config: this.state.reservationForm[key]
            });
        }

        let form = (
            <form onSubmit={this.reservationHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <button>guzik</button>
            </form>
        );
        let wolneStoliki = 34;
        return (
            <section className={classes.ReservationsPage}>
                <h1>Zarezerwuj stolik!</h1>
                <p>Rezerwacja dostępna od godziny 20:00!</p>
                <p>Liczba wolnych stolików na dziś:  {wolneStoliki} </p>
                <div className={classes.datePicker}>
                    {form}
                </div>
                {/* <div className={classes.prewiew}>

                </div> */}
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        numberOfReservations: state.numberOfReservations
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onReservationSent: (reservationDate) => dispatch(actions.sendReservation(reservationDate)),
        onFetchReservations: () => dispatch(actions.fetchReservations())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationsPage, axios);