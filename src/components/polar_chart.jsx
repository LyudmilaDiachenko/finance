import React from 'react'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(  
    ArcElement,
    Tooltip,
    Legend
)

export default function PolarChart(props) {
    const max = props.data.reduce((a,e)=>e.value>a?e.value:a, 0)

    const data = {
        labels: props.data.sort((a,b)=>a.value > b.value ? -1 : 1).map(e=>e.caption),
        datasets: [{
          label: 'Доходи та витрати банків',
          data: props.data.sort((a,b)=>a.value > b.value ? -1 : 1).map(e=>e.value),
          // backgroundColor: props.data.map(e=>`rgb(
          //   ${Math.round(255*e.value/max)}, 
          //   ${255-Math.round(255*e.value/max)}, 
          //   ${e.value/max < 0.5 ? 2*Math.round(255*e.value/max) : 512 - 2*Math.round(255*e.value/max)}
          // )`),
          backgroundColor: props.data.map(e=>`rgb(
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
