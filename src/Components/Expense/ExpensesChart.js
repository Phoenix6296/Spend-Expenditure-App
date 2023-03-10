import Chart from "../Chart/Chart"

const ExpensesChart = (props) => {
    const dataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ]

    for (const expense of props.expenses) {
        if (props.filteredYear !== 'All' && expense.date.getFullYear() !== Number(props.filteredYear)) {
            continue
        }
        const expenseMonth = expense.date.getMonth()
        let amount = (expense.amount).slice(1)
        dataPoints[expenseMonth].value += Number(amount)
    }
    return (<Chart dataPoints={dataPoints} />)
}

export default ExpensesChart