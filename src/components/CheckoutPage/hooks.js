import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFullPrice, getOrderStatus, getOrderedItems } from "store/selectors";
import { onOrderSent } from "store/actions";

export const useCheckoutForm = () => {
  const defaultState = {
    name: {
      value: "",
    },
    surname: {
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
  };

  const form = {
    orderForm: {
      name: {
        label: "Imię: *",
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
      surname: {
        label: "Nazwisko: *",
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

  const [formState, setFormState] = useState(defaultState);
  const orderedItems = useSelector(getOrderedItems);
  const fullPrice = useSelector(getFullPrice);
  const orderStatus = useSelector(getOrderStatus);
  const dispatch = useDispatch();

  const inputChangedHandler = (elementType, event, inputIdentifier) => {
    const updatedorderForm = {
      ...formState,
    };
    const updatedFormElement = {
      ...updatedorderForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedorderForm[inputIdentifier] = updatedFormElement;
    setFormState(updatedorderForm);
  };

  const orderSendHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let formElementIdentifier in formState) {
      formData[formElementIdentifier] = formState[formElementIdentifier].value;
    }
    const data = {
      deliveryData: formData,
      order: orderedItems,
      price: fullPrice,
    };
    dispatch(onOrderSent(data));
  };

  return { inputChangedHandler, orderSendHandler, form, orderStatus };
};
