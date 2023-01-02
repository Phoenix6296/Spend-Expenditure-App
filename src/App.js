import { useState } from 'react';
import './App.css';
import Expenses from './Components/Expense/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

const DUMMY_DATA = [{
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
  amount: "₹450",
  date: new Date(2021, 5, 12),
}];

const App = () => {

  const [newExpense, setNewExpense] = useState(DUMMY_DATA);

  const getDataFromNewExpenses = (data) => {
    setNewExpense((prevExpense) => {
      return [data, ...prevExpense];
    });
  }
  return (
    <div className="App">
      <NewExpense onSaveNewExpense={getDataFromNewExpenses} />
      <Expenses items={newExpense} />
    </div>
  );
}
export default App;