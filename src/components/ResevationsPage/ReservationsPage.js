import React, { Component } from "react";
import Input from "../smallParts/Input/Input";
import classes from "./ReservationsPage.module.css";
import axios from "../../axios-orders";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import Auxi from "../../hoc/Auxi";
import Spinner from "../smallParts/Spinner/Spinner";
class ReservationsPage extends Component {
  componentDidMount() {
    let link = this.getDate();
    this.props.onFetchReservations(link);
    window.scrollTo(0, 0);
  }
  state = {
    reservationForm: {
      reservationDate: {
        label: "Podaj datę, na jaką ma być rezerwacja: *",
        elementType: "date",
        validation: {
          required: true,
        },
        value: this.getDate(),
        valid: true,
      },
      name: {
        label: "Imię: *",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Imię",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      surName: {
        label: "Nazwisko: *",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Nazwisko",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      phoneNumber: {
        label: "Numer telefonu: *",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Numer Telefonu",
        },
        value: "",
        validation: {
          required: true,
          isNumeric: true,
        },
        valid: false,
        touched: false,
      },
    },
    formIsValid: false,
  };

  getDate() {
    let date = new Date();
    let day = String(date.getDate());
    let month = String(date.getMonth() + 1);
    let year = String(date.getFullYear());
    if (date.getDate() < 10) {
      day = "0" + day;
    }
    if (date.getMonth() + 1 < "10") {
      month = 0 + month;
    }
    let link = year + "-" + month + "-" + day;
    return link;
  }

  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    return isValid;
  }

  inputChangedHandler = (elementType, event, inputIdentifier) => {
    const updatedreservationForm = {
      ...this.state.reservationForm,
    };
    const updatedFormElement = {
      ...updatedreservationForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedreservationForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedreservationForm) {
      formIsValid =
        updatedreservationForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({
      reservationForm: updatedreservationForm,
      formIsValid: formIsValid,
    });
    if (elementType === "date") {
      this.props.onFetchReservations(
        updatedreservationForm.reservationDate.value
      );
    }
  };
  reservationHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let formElementIdentifier in this.state.reservationForm) {
      formData[formElementIdentifier] = this.state.reservationForm[
        formElementIdentifier
      ].value;
    }
    this.props.onReservationSent(formData);
  };
  render() {
    const formElementsArray = [];
    for (let key in this.state.reservationForm) {
      formElementsArray.push({
        id: key,
        config: this.state.reservationForm[key],
      });
    }

    let form = (
      <form
        className={classes.reservationsForm}
        onSubmit={this.reservationHandler}
      >
        {formElementsArray.map((formElement) => (
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
            changed={(event) =>
              this.inputChangedHandler(
                formElement.config.elementType,
                event,
                formElement.id
              )
            }
          />
        ))}
        <button>ZAREZERWUJ!</button>
      </form>
    );
    let content = <Spinner />;
    let wolneStoliki = 32 - this.props.numberOfReservations;
    if (!this.props.loading) {
      if (wolneStoliki > 0) {
        wolneStoliki = "Liczba wolnych stolików na dziś: " + wolneStoliki;
        content = (
          <Auxi>
            <p>{wolneStoliki}</p>
            <div className={classes.datePicker}>{form}</div>
          </Auxi>
        );
      } else {
        wolneStoliki =
          "Niestety, na dzisiejszy wieczór wszystkie stoliki zostały już zarezerwowane";
        content = (
          <Auxi>
            <p>{wolneStoliki}</p>
            <div className={classes.datePicker}></div>
          </Auxi>
        );
      }
    }
    return (
      <section className={classes.ReservationsPage}>
        <h1>Zarezerwuj stolik!</h1>
        <p>Rezerwacja dostępna od godziny 20:00!</p>
        {content}
        {/* <div className={classes.prewiew}>

                </div> */}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    numberOfReservations: state.numberOfReservations,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onReservationSent: (reservationDate) =>
      dispatch(actions.sendReservation(reservationDate)),
    onFetchReservations: (link) => dispatch(actions.fetchReservations(link)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ReservationsPage,
  axios
);
