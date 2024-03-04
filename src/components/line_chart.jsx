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
  // function generateRandomColor() {
  //   const letters = "0123456789ABCDEF"
  //   let color = "#"
  //   for (let i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)]
  //   }
  //   return color
  // }
  // function groupDataByCategory(props) {
  //   const data = Object.keys(props).map((item) => {
  //     if(props[item]){
  //       return {
  //         lable: item,
  //         data: Object.values(props[item]),
  //         borderColor: "red",
  //         backgroundColor: "tomato"
  //       }        
  //     }
  //     return null;
  //   })
  //   return data.filter((item) => {
  //     item !== null
  //   })
  // }
  const data = {
    labels: Object.values(rawData.reduce((acc,el) => {
      acc[el.date] = el.date
      return acc
    }, {})),
    // data: props.data.sort((a,b)=>a.value > b.value ? -1 : 1).map(e=>e.value),
    datasets: Object.values(
      rawData
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
