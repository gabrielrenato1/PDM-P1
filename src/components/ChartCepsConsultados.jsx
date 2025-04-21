import { Chart } from 'primereact/chart'

const ChartCepsConsultados = ({chartData}) => {
    return (
        <Chart type="pie" style={{width: '50%', margin: 'auto'}} data={chartData}/>
    )
}
export default ChartCepsConsultados;