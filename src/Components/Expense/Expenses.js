import { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    let filteredExpenses = props.items;
    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {
                filteredExpenses.filter((expense) =>
                    //Find no of records for the selected year
                    filteredYear === 'All' || expense.date.getFullYear().toString() === filteredYear).length === 0 ?
                    <p style={{ color: 'red', textAlign: 'center' }}>No records found for the selected year</p> :
                    filteredExpenses.filter((expense) =>
                        filteredYear === 'All' || expense.date.getFullYear().toString() === filteredYear).map((expense) =>
                            <ExpenseItem
                                key={expense.id}
                                title={expense.title}
                                amount={expense.amount}
                                date={expense.date}
                            />
                        )
            }
        </Card >
    );
}
export default Expenses;