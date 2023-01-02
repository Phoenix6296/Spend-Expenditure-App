import ExpenseForm from "./ExpenseForm"
import Card from "../UI/Card"
import './NewExpense.css'

const NewExpense = () => {
    return (
        <Card className="newExpense">
            <ExpenseForm />
        </Card>
    )
}

export default NewExpense;