import ExpenseForm from "./ExpenseForm"
import Card from "../UI/Card"
import './NewExpense.css'

const NewExpense = (props) => {
    const getDataFromExpenseForm = (data) => {
        const expenseData = {
            ...data,
            id: Math.random().toString()
        }
        props.onSaveNewExpense(expenseData);
    }
    return (
        <Card className="newExpense">
            <ExpenseForm onSaveExpenseForm={getDataFromExpenseForm} />
        </Card>
    )
}

export default NewExpense;