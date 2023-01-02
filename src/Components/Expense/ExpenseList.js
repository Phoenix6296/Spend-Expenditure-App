import ExpenseItem from "./ExpenseItem"

const ExpenseList = ({ items, filteredYear }) => {
    return (
        <div>
            {items.filter((expense) =>
                filteredYear === 'All' || expense.date.getFullYear().toString() === filteredYear).length === 0 ?
                <p style={{ color: 'red', textAlign: 'center' }}>No records found for the selected year</p> :
                items.filter((expense) =>
                    filteredYear === 'All' || expense.date.getFullYear().toString() === filteredYear).map((expense) =>
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    )
            }
        </div>
    )
}

export default ExpenseList