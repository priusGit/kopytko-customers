import React, { Component } from "react";
import Input from "../smallParts/Input/Input";
import classes from "./ReservationsPage.module.css";
import axios from "../../axios-orders";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import Spinner from "../smallParts/Spinner/Spinner";
import getDate from "./functions/getDate";

class ReservationsPage extends Component {
  componentDidMount() {
    this.props.onFetchReservations(getDate());
    window.scrollTo(0, 0);
  }
  state = {
    reservationForm: {
      reservationDate: {
        value: getDate(),
      },
      name: {
        value: "",
      },
      surName: {
        value: "",
      },
      phoneNumber: {
        value: "",
      },
    },
  };

  form = {
    reservationForm: {
      reservationDate: {
        label: "Podaj datę, na jaką ma być rezerwacja: *",
        elementType: "date",
        validation: {
          required: true,
        },
        valid: true,
      },
      name: {
        label: "Imię: *",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Imię",
        },
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
        validation: {
          required: true,
          isNumeric: true,
        },
        valid: false,
        touched: false,
      },
    },
  };

  inputChangedHandler = (elementType, event, inputIdentifier) => {
    const updatedreservationForm = {
      ...this.state.reservationForm,
    };
    const updatedFormElement = {
      ...updatedreservationForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedreservationForm[inputIdentifier] = updatedFormElement;
    this.setState({
      reservationForm: updatedreservationForm,
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
    for (let key in this.form.reservationForm) {
      formElementsArray.push({
        id: key,
        config: this.form.reservationForm[key],
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
            value={this.state.reservationForm[formElement.id].value}
            label={formElement.config.label}
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
          <>
            <p>{wolneStoliki}</p>
            <div className={classes.datePicker}>{form}</div>
          </>
        );
      } else {
        wolneStoliki =
          "Niestety, na dzisiejszy wieczór wszystkie stoliki zostały już zarezerwowane";
        content = (
          <>
            <p>{wolneStoliki}</p>
            <div className={classes.datePicker}></div>
          </>
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
