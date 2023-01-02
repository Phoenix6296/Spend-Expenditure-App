import './App.css';
import Expenses from './Components/Expense/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

const App = () => {
  const getDataFromNewExpenses = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString()
    }
    console.log(expenseData, "This is App.js");
  }
  const expense = [{
    id: 'e1',
    title: "Car Insurance",
    amount: "₹294.67",
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e2',
    title: "New TV",
    amount: "₹799.99",
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e3',
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  ];
  return (
    <div className="App">
      <NewExpense onSaveNewExpense={getDataFromNewExpenses} />
      <Expenses items={expense} />
    </div>
  );
}
export default App;