import React, { useState, useEffect } from 'react'
import Search from "../utils/search"
import getData from '../utils/get_data';
import RichTable from '../utils/rich_table';
import imgIncome from "../assets/icon-income.png";
import imgExpence from "../assets/icon-expense.png";
import imgBagGreen from "../assets/icon-money-bag-green.png"
import imgBagRed from "../assets/icon-money-bag-red.png"
import imgBagYellow from "../assets/icon-money-bag-yellow.png"
import BarChart from '../components/bar_chart';
import PolarChart from '../components/polar_chart';
import LineChart from '../components/line_chart';

export default function Balance(props) {
  function format_date(str){
    return str.replace(/(.*)-(.{2})-(.{2})$/, '$1$2$3')
  }
  const [data, setData] = useState()
  const [lastDateFrom, setLastDateFrom] = useState()
  const [lastDateTill, setLastDateTill] = useState()
  
  useEffect(_ => {
      getData(`https://bank.gov.ua/NBUStatService/v1/statdirectory/banksincexp?json&freq=M&start=${format_date(props.dateFrom) || '20230101'}&end=${format_date(props.dateTill) || '20240101'}`)
      .then(data => setData(data.filter(e=>e.id_api.search(/_Exp/) !== -1).map(item => {
        return {
          key: item.id_api+item.dt, 
          value: item.value, 
          date: new Date(item.dt.replace(/(.*)(.{2})(.{2})$/, '$1-$2-$3')),
          caption: item.txt,
          id: item.id_api,
          img: (()=> {
            if (item.id_api.search(/NetProfitLoss/) !== -1 ){
              return <img src={imgBagYellow} className='img_bag_yellow' alt="Net profit loss" />
            } else if (item.id_api.search(/IncomeTotal/) !== -1){
              return <img src={imgBagGreen} className='img_bag_green' alt="Income total" />
            } else if(item.id_api.search(/ExpensesTotal/) !== -1 ){
              return <img src={imgBagRed} className='img_bag_red' alt="Expenses total" />
            } else if (item.id_api.search(/_Exp/) !== -1){
              return <img src={imgExpence} className='img_expence' alt="Expense image" />
            } else {
              return <img src={imgIncome} className='img_income' alt="Income image" />
            }
          })()
        }
      })))
    }, [lastDateFrom, lastDateTill])

    if (lastDateFrom !== props.dateFrom){
      setLastDateFrom(props.dateFrom)
    }

    if (lastDateTill !== props.dateTill){
      setLastDateTill(props.dateTill)
    }

  return (
    <div>
        <h1 className="date_container_title">
          Витрати банків
        </h1>
      <Search       
        data={data || []}
        dateFrom={props.dateFrom}
        dateTill={props.dateTill}
        setDateFrom={props.setDateFrom}
        setDateTill={props.setDateTill}
      >
      </Search>
      <div className='chart_container'>
        <BarChart data={data || []} />
        <PolarChart data={data || []} />
      </div>
      <LineChart data={data || []} />
      <RichTable
        data={data || []}
      ></RichTable>
    </div>
  )
}
