import React, { Component } from 'react';
import Input from '../smallParts/Input/Input';
import classes from './FAQPage.module.css';
import axios from '../../axios-orders';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
class FAQPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    state = {
        messageForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Twoje Imie'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Twój E-Mail'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            message: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'textarea',
                    placeholder: 'Twoja wiadomość'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false,

    }
    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedMessageForm = {
            ...this.state.messageForm
        };
        const updatedFormElement = {
            ...updatedMessageForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedMessageForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedMessageForm) {
            formIsValid = updatedMessageForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({ messageForm: updatedMessageForm, formIsValid: formIsValid });
    }
    messageHandler = (event) => {
        event.preventDefault();

        const formData = {};
        for (let formElementIdentifier in this.state.messageForm) {
            formData[formElementIdentifier] = this.state.messageForm[formElementIdentifier].value;
        }
        this.props.onMessageSent(formData);
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.messageForm) {
            formElementsArray.push({
                id: key,
                config: this.state.messageForm[key]
            });
        }
        let form = (
            <form onSubmit={this.messageHandler}>
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
                <button>WYŚLIJ</button>
            </form>
        );
        return (
            <section className={classes.FAQ}>
                <section className={classes.Container}>
                    <h2 className={classes.Title}>
                        FAQ - najczęściej zadawane pytania
                    </h2>
                    <div className={classes.QuestionsContainer}>
                        <div className={classes.Question}>
                            <p className={classes.QuestionTitle}>Jakie są wasze godziny otwarcia?</p>
                            <div className={classes.QuestionAnswer}>
                                <p>Poniedziałek - Czwartek: 10:00 - 22:00</p>
                                <p>Piątek - Niedziela: 12:00 - 24:00</p>
                            </div>
                        </div>
                        <div className={classes.Question}>
                            <p className={classes.QuestionTitle} >Gdzie was znaleść?</p>
                            <p className={classes.QuestionAnswer} >Ul. Polna 24, Wrocław. Tuż obok Kościoła Iksińskiego, w samym centrum miasta.</p>
                        </div>
                        <div className={classes.Question}>
                            <p className={classes.QuestionTitle}>Czy jest dostępny parking?</p>
                            <p className={classes.QuestionAnswer}>Na terenie lokalu dostępny jest parking dla 20 pojazdów, a w okolicy są dodatkowe parkingi miejskie.</p>
                        </div>
                        <div className={classes.Question}>
                            <p className={classes.QuestionTitle}>Czy jest dostępna tablica alergenów?</p>
                            <p className={classes.QuestionAnswer}>Jak najbardziej, link do dokumentu znajduje się <a target="blank" href="https://www.google.com/search?q=tablica+alergen%C3%B3w&oq=tablica+aler&aqs=chrome.0.0l3j69i57j0l4.2872j0j7&sourceid=chrome&ie=UTF-8">tutaj</a></p>
                        </div>
                        <div className={classes.Question}>
                            <p className={classes.QuestionTitle}>Czy są opcje wegetariańskie?</p>
                            <p className={classes.QuestionAnswer}>Oczywiście, w zakładce "Menu" każda potrawa posiada stosowne oznaczenie, jest też opcja filtrowania dań wg. własnych preferencji</p>
                        </div>
                        <div className={classes.Question}>
                            <p className={classes.QuestionTitle}>Czy jest dostępna wynajem lokalu?</p>
                            <p className={classes.QuestionAnswer}>W celu wynajęcia, prosimy o kontakt przez formularz niżej, bądź na adres: kontakt@kopytko.pl</p>
                        </div>
                        <div className={classes.Question}>
                            <p className={classes.QuestionTitle}>Czy są opcje wegetariańskie?</p>
                            <p className={classes.QuestionAnswer}>Oczywiście, w zakładce "Menu" każda potrawa posiada stosowne oznaczenie, jest też opcja filtrowania dań wg. własnych preferencji</p>
                        </div>
                        <div className={classes.Question}>
                            <p className={classes.QuestionTitle}>Czy jest dostępna wynajem lokalu?</p>
                            <p className={classes.QuestionAnswer}>W celu wynajęcia, prosimy o kontakt przez formularz niżej, bądź na adres: kontakt@kopytko.pl</p>
                        </div>
                    </div>
                    <div>
                        <h2 className={classes.Title} style={{ marginBottom: "20px" }}>
                            Więcej pytań? Skontaktuj się z nami!
                    </h2>
                        {form}
                    </div>
                </section>
            </section>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onMessageSent: (messageData) => dispatch(actions.sendMessage(messageData))
    };
};

export default connect(null, mapDispatchToProps)(FAQPage, axios);