import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [itemTitle, setItemTitle] = useState('');
    const [itemAmount, setitemAmount] = useState('');
    const [itemDate, setItemDate] = useState('');
    const titleInputHandler = (event) => { setItemTitle(event.target.value); }
    const priceInputHandler = (event) => { setitemAmount(event.target.value); }
    const dateInputHandler = (event) => { setItemDate(event.target.value); }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: itemTitle,
            amount: "₹" + itemAmount,
            date: new Date(itemDate)
        }
        props.onSaveExpenseForm(expenseData);
        props.addNewExpense(false);
        setItemTitle('');
        setitemAmount('');
        setItemDate('');
    }

    return (
        <form action="submit" onSubmit={submitHandler} className='form__wrapper center'>
            <div className='form__container'>
                <div>
                    <label htmlFor="item-title">Item Title</label>
                    <input id="item-title" type="text" value={itemTitle} placeholder='Enter the Item Name' className="form__input" onChange={titleInputHandler} required />
                </div>
                <div>
                    <label htmlFor="item-price">Item Price(₹)</label>
                    <input type="number" id="item-price" value={itemAmount} placeholder='Enter the Price' className="form__input" onChange={priceInputHandler} required />
                </div>
                <div>
                    <label htmlFor="item-date">Item Date</label>
                    <input type="date" id="item-date" value={itemDate} className="form__input" min="2017-04-01" max="2023-04-30" onChange={dateInputHandler} required />
                </div>
            </div>
            <button className="form__submit-button" >Submit</button>
        </form>
    )
}

export default ExpenseForm