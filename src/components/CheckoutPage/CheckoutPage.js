import React, { Component } from "react";
import Input from "../smallParts/Input/Input";
import classes from "./CheckoutPage.module.css";
import axios from "../../axios-orders";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import PurchasedModal from "../smallParts/PurchasedModal/PurchasedModal";
class OrderPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  state = {
    orderForm: {
      namesurname: {
        value: "",
      },
      email: {
        value: "",
      },
      phone: {
        value: "",
      },
      street: {
        value: "",
      },
      adressnumber: {
        value: "",
      },
      postcode: {
        value: "",
      },
      city: {
        value: "",
      },
      flatNumber: {
        value: "",
      },
      floor: {
        value: "",
      },
      stairwaykey: {
        value: "",
      },
      companyname: {
        value: "",
      },
      note: {
        value: "",
      },
    },
    formIsValid: false,
  };
  form = {
    orderForm: {
      namesurname: {
        label: "Imię i nazwisko: *",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Wpisz swoję imię i nazwisko",
        },
        validation: {
          required: true,
        },
        pattern: "\\p{L}+",
      },
      email: {
        label: "Adres mailowy: *",
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Wpisz swój adres mailowy",
        },
        validation: {
          required: true,
        },
      },
      phone: {
        label: "Numer telefonu: *",
        elementType: "input",
        elementConfig: {
          type: "tel",
          placeholder: "Wpisz swój numer telefonu",
        },
        validation: {
          required: true,
          isNumeric: true,
        },
        pattern: "[0-9]{8,14}",
      },
      street: {
        label: "Ulica: *",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Wpisz nazwę ulicy",
        },
        validation: {
          required: true,
        },
      },
      adressnumber: {
        label: "Numer budynku: *",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Wpisz numer budynku",
        },
        validation: {
          required: true,
          isNumeric: true,
        },
      },
      postcode: {
        label: "Kod pocztowy *",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Wpisz swój kod pocztowy",
        },
        validation: {
          required: true,
          isNumeric: true,
        },
      },
      city: {
        label: "Miasto *",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Wpisz swoje miasto",
        },
        validation: {
          required: true,
        },
      },
      flatNumber: {
        label: "Numer mieszkania (opcjonalne)",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Wpisz numer mieszkania",
        },
        validation: {
          isNumeric: true,
        },
      },
      floor: {
        label: "Piętro (opcjonalne)",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Wpisz swoje piętro",
        },
        validation: {
          isNumeric: true,
        },
      },
      stairwaykey: {
        label: "Kod do bramy (opcjonalne)",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Wpisz kod do bramy",
        },
        validation: {
          isNumeric: true,
        },
      },
      companyname: {
        label: "Nazwa firmy (opcjonalne)",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Wpisz nazwę firmy",
        },
        validation: {},
      },
      note: {
        label: "Dodaj notatkę (opcjonalne)",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "np. Proszę nie używać dzwonka. Dziecko śpi.",
        },
        validation: {},
      },
    },
  };
  inputChangedHandler = (elementType, event, inputIdentifier) => {
    const updatedorderForm = {
      ...this.state.orderForm,
    };
    const updatedFormElement = {
      ...updatedorderForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedorderForm[inputIdentifier] = updatedFormElement;
    this.setState({ orderForm: updatedorderForm });
  };
  orderSendHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[
        formElementIdentifier
      ].value;
    }
    const data = {
      deliveryData: formData,
      order: this.props.orderedItems,
      price: this.props.fullPrice,
    };
    this.props.onOrderSent(data);
  };
  render() {
    const formElementsArray = [];
    for (let key in this.form.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.form.orderForm[key],
      });
    }

    let form = (
      <form onSubmit={this.orderSendHandler}>
        {formElementsArray.map(
          (formElement) => (
            console.log(formElement.config.pattern),
            (
              <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                label={formElement.config.label}
                required={formElement.config.validation.required}
                pattern={
                  formElement.config.pattern ? formElement.config.pattern : null
                }
                changed={(event) =>
                  this.inputChangedHandler(
                    formElement.config.elementType,
                    event,
                    formElement.id
                  )
                }
              />
            )
          )
        )}
        <button type="submit">Zamów! </button>
      </form>
    );
    let modal;
    if (this.props.orderStatus) {
      modal = <PurchasedModal />;
    }
    return (
      <section className={classes.CheckoutPage}>
        <h1>Kasa</h1>
        <p>* - pole wymagane </p>
        {form}
        {modal}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orderedItems: state.orderedItems,
    fullPrice: state.fullPrice,
    orderStatus: state.orderStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOrderSent: (data) => dispatch(actions.onOrderSent(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage, axios);
