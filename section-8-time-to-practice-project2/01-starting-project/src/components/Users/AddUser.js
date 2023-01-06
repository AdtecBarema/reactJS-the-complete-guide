import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [entredUsername, setEntredUsername] = useState("");
  const [enteredAge, SetEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (entredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid  age (>0)",
      });
      return;
    }
    props.onAddUser(entredUsername, enteredAge);
    setEntredUsername("");
    SetEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEntredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    SetEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={entredUsername}
          />
          <label htmlFor="age"> Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
