import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Grossery",
    amount: 294.67,
    date: new Date(2022, 8, 21),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 300,
    date: new Date(2022, 12, 21),
  },
  {
    id: "e3",
    title: "Car Gas",
    amount: 100,
    date: new Date(2022, 10, 14),
  },
  {
    id: "e4",
    title: "Telescope for space Observatory",
    amount: 1000,
    date: new Date(2022, 11, 10),
  }
  ,{
    id: "e5",
    title: "A Book",
    amount: 10.99,
    date: new Date(2021, 11, 10),
  }
  ,{
    id: "e6",
    title: "Laundary Machine",
    amount: 999.999,
    date: new Date(2020, 11, 10),
  }
  ,{
    id: "e7",
    title: "Vacum Cleaner",
    amount: 249.99,
    date: new Date(2020, 11, 10),
  }
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prev) => {
      return [expense, ...prev];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
