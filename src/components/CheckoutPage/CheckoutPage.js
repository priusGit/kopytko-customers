import React, { Component } from 'react';
import Input from '../smallParts/Input/Input';
import classes from './CheckoutPage.module.css';
import axios from '../../axios-orders';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import PurchasedModal from '../smallParts/PurchasedModal/PurchasedModal'
class OrderPage extends Component {
    componentDidMount() {
            window.scrollTo(0, 0);
    }
    state = {
            orderForm: {
                namesurname: {
                label: "Imię i nazwisko: *",
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
                label: "Adres mailowy: *",
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
                label: "Numer telefonu: *",
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
            street: {
                label: "Ulica: *",
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
                label: "Numer budynku: *",
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
                label: "Kod pocztowy *",
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
                label: "Miasto *",
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
                    placeholder: 'np. Proszę nie używać dzwonka. Dziecko śpi.'
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
        const updatedorderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedorderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedorderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedorderForm) {
            formIsValid = updatedorderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({ orderForm: updatedorderForm, formIsValid: formIsValid });
    }
    orderSendHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        const data = {
            deliveryData: formData,
            order: this.props.orderedItems,
            price: this.props.fullPrice
        };
        this.props.onOrderSent(data);
    }
    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        
        let form= (
                <form onSubmit={this.orderSendHandler}>
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
                            required={formElement.config.validation.required}
                            changed={(event) => this.inputChangedHandler(formElement.config.elementType, event, formElement.id)} />
                    ))}
                    <button >Zamów!</button>
                </form>
            );
        let modal;
        if(this.props.orderStatus)
        {
            modal = <PurchasedModal/>
     }
        return (
            <section className={classes.CheckoutPage}>
                <h1>Kasa</h1>
                <p>* - pole wymagane</p>
                {form}
                {modal}
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        orderedItems: state.orderedItems,
        fullPrice: state.fullPrice,
        orderStatus: state.orderStatus
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onOrderSent: (data) => dispatch(actions.onOrderSent(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage, axios);