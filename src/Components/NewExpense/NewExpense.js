import { useState } from "react"
import ExpenseForm from "./ExpenseForm"
import Card from "../UI/Card"
import './NewExpense.css'

const NewExpense = (props) => {
    const [addExpense, setAddExpense] = useState(false)
    const addExpenseHandler = () => {
        setAddExpense(true);
    }
    const getDataFromExpenseForm = (data) => {
        const expenseData = {
            ...data,
            id: Math.random().toString()
        }
        props.onSaveNewExpense(expenseData);
    }
    const onSubmitHandler = () => {
        setAddExpense(false);
    }
    return (
        <Card className="newExpense">
            {!addExpense ? <button className="newExpense__button" onClick={addExpenseHandler} >Add New Expense</button> : null}
            {addExpense ? <ExpenseForm onSaveExpenseForm={getDataFromExpenseForm} addNewExpense={onSubmitHandler} /> : null}
        </Card>
    )
}

export default NewExpense;