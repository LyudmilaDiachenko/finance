import React, { useState, useEffect } from 'react'
import BarDiagram from "../utils/bar_diagram"
import getData from '../utils/get_data';
import RichTable from '../utils/rich_table';
import imgIncome from "../assets/icon-income.png";
import imgExpence from "../assets/icon-expense.png";
import imgBagGreen from "../assets/icon-money-bag-green.png"
import imgBagRed from "../assets/icon-money-bag-red.png"
import imgBagYellow from "../assets/icon-money-bag-yellow.png"
import BarChart from '../components/bar_chart';
import PolarChart from '../components/polar_chart';

export default function Balance(props) {
  function format_date(str){
    console.log(str,str.replace(/(.*)-(.{2})-(.{2})$/, '$1$2$3'))
    return str.replace(/(.*)-(.{2})-(.{2})$/, '$1$2$3')
  }
  const [data, setData] = useState()
  useEffect(_ => {
      getData(`https://bank.gov.ua/NBUStatService/v1/statdirectory/banksincexp?json&start=${format_date(props.dateFrom) || '20230101'}&end=${format_date(props.dateTill) || '20240101'}`)
      .then(data => setData(data.map(item => {
        return {
          key: item.k076+item.txt+item.dt, 
          value: item.value, 
          date: new Date(item.dt.replace(/(.*)(.{2})(.{2})$/, '$1-$2-$3')),
          caption: item.txt,
          img: (()=> {
            if (item.id_api.search(/NetProfitLoss/) !== -1 ){
              return <img src={imgBagYellow} className='img_bag_yellow' alt="Net profit loss" />
            } else if (item.id_api.search(/IncomeTotal/) !== -1){
              return <img src={imgBagGreen} className='img_bag_green' alt="Income total" />
            } else if(item.id_api.search(/ExpensesTotal/) !== -1 ){
              return <img src={imgBagRed} className='img_bag_red' alt="Expenses total" />
            } else if (item.id_api.search(/Income/) !== -1){
              return <img src={imgIncome} className='img_income' alt="Income image" />
            } else {
              return <img src={imgExpence} className='img_expence' alt="Expense image" />
            }
          })()
        }
      })))
  }, [])

  function onDiagramSelectChange(e){
    console.log(e);
  }

  return (
    <div>
      <BarDiagram
        caption="Якісь дані"
        class_suffix="_first_some_diagram"
        data={data || []}
        select_options={[{caption: '1', value: 1},{caption: '2', value: 2}]}
        select_onchange={onDiagramSelectChange}
        dateFrom={props.dateFrom}
        dateTill={props.dateTill}
        setDateFrom={props.setDateFrom}
        setDateTill={props.setDateTill}
      >
      </BarDiagram>
      <RichTable
        caption="Доходи та витрати банків"
        data={data || []}
      ></RichTable>
      <PolarChart data={data || []} />
      <BarChart data={data || []} />
    </div>
  )
}
