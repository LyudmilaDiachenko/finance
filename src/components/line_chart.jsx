import { AppContext } from '../utils/context';
import { useContext, useEffect } from "react";
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
  let contextData = useContext(AppContext).data
  let rawData = props.data || contextData || []
  const data = {
    labels: Object.values(rawData.reduce((acc,el) => {
      acc[el.date] = el.date
      return acc
    }, {})),
    datasets: Object.values(
      rawData
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
        label: arr[0]?.caption,
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
