import React from "react";
import { useRef, useState } from "react";

import classes from "./Checkout.module.css";
const isEmpty = (value) => value.trim() === "";
const isNotFiveChar = (value) => value.trim().length !== 5;

const Checkout = (props) => {

  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef(); /*  */
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const entredName = nameInputRef.current.value;
    const entredStreet = streetInputRef.current.value;
    const entredPostalCode = postalCodeInputRef.current.value;
    const entredCity = cityInputRef.current.value;

    const entredNameIsValid = !isEmpty(entredName);
    const entredStreetIsValid = !isEmpty(entredStreet);
    const entredCityIsValid = !isEmpty(entredCity);
    const entredPostCodeIsValid = !isNotFiveChar(entredPostalCode);

    setFormInputsValidity({
      name: entredNameIsValid,
      street: entredStreetIsValid,
      city: entredCityIsValid,
      postalCode: entredPostCodeIsValid,
    });

    const formIsVlaid =
      entredNameIsValid &&
      entredStreetIsValid &&
      entredCityIsValid &&
      entredPostCodeIsValid;

    if (!formIsVlaid) {
      return;
    }

    props.onConfirm({
        name: entredName,
        street: entredStreet,
        city:entredCity,
        postalCode:entredPostalCode
    });
    //Submit the cart data
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;

  const streetControlClasses = `${classes.control} ${
    formInputsValidity.street ? "" : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    formInputsValidity.postalCode ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter a valid street</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formInputsValidity.postal && <p>Please enter a valid postal</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
