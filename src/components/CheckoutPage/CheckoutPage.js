import React, { useEffect } from "react";
import Input from "../smallParts/Input/Input";
import classes from "./CheckoutPage.module.css";
import PurchasedModal from "../smallParts/PurchasedModal/PurchasedModal";
import { useCheckoutForm } from "./hooks";
const OrderPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const { inputChangedHandler, orderSendHandler, form, orderStatus } =
    useCheckoutForm();

  const formElementsArray = [];
  for (let key in form.orderForm) {
    formElementsArray.push({
      id: key,
      config: form.orderForm[key],
    });
  }

  return (
    <section className={classes.CheckoutPage}>
      <h1>Kasa</h1>
      <p>* - pole wymagane </p>
      <form onSubmit={orderSendHandler}>
        {formElementsArray.map((formElement) => (
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
              inputChangedHandler(
                formElement.config.elementType,
                event,
                formElement.id
              )
            }
          />
        ))}
        <button type="submit">Zamów! </button>
      </form>
      {orderStatus && <PurchasedModal />}
    </section>
  );
};

export default OrderPage;
