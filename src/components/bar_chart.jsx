import React from 'react'
import s from "../style/line_chart.module.css"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js"
import { Bar } from 'react-chartjs-2'

ChartJS.register(  
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export default function BarChart(props) {
  const data = {
    labels: props.data.sort((a,b)=>a.value > b.value ? -1 : 1).map(e=>e.caption),
    datasets: [
      { 
        data: props.data.sort((a,b)=>a.value > b.value ? -1 : 1).map(e=>e.value),
        borderColor: "black", 
        borderRadius: "10", 
        hoverBackgroundColor: "#5932EA",
        backgroundColor: props.data.map(e=>`rgb(
          ${Math.random() * 200 + 55}, 
          ${Math.random() * 200 + 55}, 
          ${Math.random() * 200 + 55}
        )`)
      }
    ]
  }
  const options = {
    scales: {x: {display: false}},
    plugins: {
      legend: {display: false}
    }
  }

  return (
    <div className={s.barChart}>
      <Bar data={data} options={options}></Bar>
    </div>
  )
}
