import { AppContext } from '../utils/context';
import { useContext } from 'react'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend)

export default function PolarChart(props) {
  let contextData = useContext(AppContext).data
  let rawData = props.data || contextData || []
  const max = rawData.reduce((a,e)=>e.value>a?e.value:a, 0)

    const data = {
        labels: rawData.sort((a,b)=>a.value > b.value ? -1 : 1).map(e=>e.caption),
        datasets: [{
          label: 'Доходи та витрати банків',
          data: rawData.sort((a,b)=>a.value > b.value ? -1 : 1).map(e=>e.value),
          // backgroundColor: rawData.map(e=>`rgb(
          //   ${Math.round(255*e.value/max)}, 
          //   ${255-Math.round(255*e.value/max)}, 
          //   ${e.value/max < 0.5 ? 2*Math.round(255*e.value/max) : 512 - 2*Math.round(255*e.value/max)}
          // )`),
          backgroundColor: rawData.map(e=>`rgb(
            ${Math.random() * 200 + 55}, 
            ${Math.random() * 200 + 55}, 
            ${Math.random() * 200 + 55}
          )`),
          hoverOffset: 24,
          radius: "70%",
        }],
      };
      const options = {
        plugins: {
          legend: {
              display: false
          }
        },
      }
  return (
    <div className='polar_chart'>
      <Pie data={data} options={options}/>
    </div>
  )
}
