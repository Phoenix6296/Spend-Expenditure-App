import { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
// import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('All');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpenseList items={props.items} filteredYear={filteredYear} />
        </Card >
    );
}
export default Expenses;