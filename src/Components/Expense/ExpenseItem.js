import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
const ExpenseItem = (props) => {
    return (
        <Card className="expense-container">
            <div className='expense-item__left'>
                <ExpenseDate date={props.date} />
                <h3 className="expense-item">{props.title}</h3>
            </div>
            <div className="expense-price center">{props.amount}</div>
        </Card>
    );
}
export default ExpenseItem;