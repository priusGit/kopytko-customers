import React, { Component } from 'react';
import Input from '../smallParts/Input/Input';
import classes from './CheckoutPage.module.css';
import axios from '../../axios-orders';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
class ReservationsPage extends Component {
    componentDidMount() {
        //let link = this.getDate();
            window.scrollTo(0, 0);
    }
    state = {
            reservationForm: {

                namesurname: {
                label: "Imię i nazwisko:",
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Wpisz swoję imię i nazwisko'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                label: "Adres mailowy:",
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Wpisz swój adres mailowy'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            phone: {
                label: "Numer telefonu:",
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Wpisz swój numer telefonu'
                },
                value: '',
                validation: {
                    required: true,
                    isNumeric: true
                },
                valid: false,
                touched: false
            },
            ulica: {
                label: "Ulica:",
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Wpisz nazwę ulicy'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            adressnumber: {
                label: "Numer budynku:",
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Wpisz numer budynku'
                },
                value: '',
                validation: {
                    required: true,
                    isNumeric: true
                },
                valid: false,
                touched: false
            },
            postcode: {
                label: "Kod pocztowy",
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Wpisz swój kod pocztowy'
                },
                value: '',
                validation: {
                    required: true,
                    isNumeric: true
                },
                valid: false,
                touched: false
            },
            city: {
                label: "Miasto",
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Wpisz swoje miasto'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            flatNumber: {
                label: "Numer mieszkania (opcjonalne)",
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Wpisz numer mieszkania'
                },
                value: '',
                validation: {
                    isNumeric: true
                },
                valid: false,
                touched: false
            },
            floor: {
                label: "Piętro (opcjonalne)",
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Wpisz swoje piętro'
                },
                value: '',
                validation: {
                    isNumeric: true
                },
                valid: false,
                touched: false
            },
            stairwaykey: {
                label: "Kod do bramy (opcjonalne)",
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Wpisz kod do bramy'
                },
                value: '',
                validation: {
                    isNumeric: true
                },
                valid: false,
                touched: false
            },
            companyname: {
                label: "Nazwa firmy (opcjonalne)",
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Wpisz nazwę firmy'
                },
                value: '',
                validation: {
                },
                valid: false,
                touched: false
            },
            note: {
                label: "Dodaj notatkę (opcjonalne)",
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'np. Proszę nie używać dzwonka. Dziekco śpi.'
                },
                value: '',
                validation: {
                },
                valid: false,
                touched: false
            },

        },
        formIsValid: false
    }

    getDate() {
        let date = new Date();
        let day = String(date.getDate());
        let month = String(date.getMonth() + 1);
        let year = String(date.getFullYear());
        if (date.getDate() < 10) {
            day = '0' + day;
        }
        if (date.getMonth() + 1 < '10') {
            month = 0 + month;
        }
        let link = year + '-' + month + '-' + day;
        return link;
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

    inputChangedHandler = (elementType, event, inputIdentifier) => {
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
                        label={formElement.config.label}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(formElement.config.elementType, event, formElement.id)} />
                ))}
                <button>ZAREZERWUJ!</button>
            </form>
        );
        
        return (
            <section className={classes.CheckoutPage}>
                <h1>Kasa</h1>
                {form}
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onReservationSent: (reservationDate) => dispatch(actions.sendReservation(reservationDate)),
        onFetchReservations: (link) => dispatch(actions.fetchReservations(link))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationsPage, axios);