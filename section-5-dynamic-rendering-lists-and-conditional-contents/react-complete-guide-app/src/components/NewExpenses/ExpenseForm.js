import React, { useState } from "react";
import "./ExpenseForm.css";
import "./NewExpense.js"
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    //This helps to handle two way binding: getting the value during eventChange such as SUBMIT, and then reset the state values to the default one
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense_controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.00"
            step="0.01"
            value={enteredAmount}
            onChange={amountHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2017-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
       <button type="button" onClick={props.onCancel}> Cancel </button> <button type="submit"> Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
