import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
function App() {
  const expenses = [
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
    },
  ];

  const addExpenseHandler = expense=>{
    console.log('In App.js');
  console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}
export default App;
