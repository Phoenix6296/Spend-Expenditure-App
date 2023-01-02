import './App.css';
import ExpenseItem from './Components/Expense/ExpenseItem';
import NewExpense from './Components/NewExpense/NewExpense';
import Card from './Components/UI/Card';

const App = () => {
  const expense = [{
    title: "Car Insurance",
    amount: "₹294.67",
    date: new Date(2021, 2, 28),
  },
  {

    title: "New TV",
    amount: "₹799.99",
    date: new Date(2021, 2, 28),
  },
  {
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  ];
  return (
    <Card className="expense-body">
      <NewExpense />
      <ExpenseItem title={expense[0].title} price={expense[0].amount} date={expense[0].date} />
      <ExpenseItem title={expense[1].title} price={expense[1].amount} date={expense[1].date} />
      <ExpenseItem title={expense[2].title} price={expense[2].amount} date={expense[2].date} />
    </Card>
  );
}
export default App;