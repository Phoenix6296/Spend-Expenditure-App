import './ExpenseDate.css'

const ExpenseDate = (props) => {
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const year = props.date.getFullYear();
    return (
        <div className='expense-date'>
            <h4>{month}</h4>
            <h5>{year}</h5>
            <h2>{day}</h2>
        </div>
    );
}

export default ExpenseDate;