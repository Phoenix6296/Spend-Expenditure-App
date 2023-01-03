import './ChartBar.css'
const ChartBar = (props) => {
    let barFillHeight = '0%';
    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
        console.log(barFillHeight)
    }
    return (
        <div className='chartBar__container'>
            <div className='chartBar__bar' >
                <div className="chartBar__fill" style={{ height: barFillHeight }}></div>
            </div>
            <div className='chartBar__label'>{props.label}</div>
        </div>
    )
}

export default ChartBar