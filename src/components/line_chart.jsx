import React from 'react'
import s from "../style/bar_chart.module.css"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  LineElement
} from "chart.js"
import { Line } from 'react-chartjs-2'

ChartJS.register(  
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default function LineChart(props) {
  const data = {
    labels: Object.values(props.data.reduce((acc,el) => {
      acc[el.date] = el.date
      return acc
    }, {})),
    // data: props.data.sort((a,b)=>a.value > b.value ? -1 : 1).map(e=>e.value),
    datasets: Object.values(
      props
      .data
      .sort((a,b)=>a.value > b.value ? -1 : 1)
      .reduce((acc,el) => {
          acc[el.id] = acc[el.id] || []; 
          acc[el.id].push(el);
          return acc;
      }, 
      {}
      )
    ).map(arr => {
      let 
        r = Math.random() * 200 + 55,
        g = Math.random() * 200 + 55,
        b = Math.random() * 200 + 55
      return {
        label: arr[0].caption,
        data: arr.map(el => el.value),
        borderColor: `rgb(${r},${g},${b})`,
        backgroundColor: `rgba(${r},${g},${b},0.5)`
      }
    })
  }

  const options = {
    scales: {x: {display: false}}
  }

  return (
    <div className={s.lineChart}>
      <Line data={data} options={options}></Line>
    </div>
  )
}
