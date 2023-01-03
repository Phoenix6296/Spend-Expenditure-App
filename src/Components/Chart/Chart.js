import Card from '../UI/Card'
import './Chart.css'
import ChartBar from './ChartBar'
const Chart = (props) => {
    const allDataPoints = props.dataPoints.map((data) => data.value)
    const totalMaximum = Math.max(...allDataPoints)

    return (
        <Card className="chart__container">
            {props.dataPoints.map((data) => {
                return <ChartBar key={data.label} label={data.label} value={data.value} maxValue={totalMaximum} />
            })}
        </Card>
    )
}

export default Chart