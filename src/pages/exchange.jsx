import { AppContext } from '../utils/context';
import { useContext, useEffect, useState } from "react";
import getData from '../utils/get_data';
import Calendar from "../components/calendar";
import BarChart from "../components/bar_chart";
import PolarChart from "../components/polar_chart";
import {fetch_config} from "../utils/fetch_config"
import groupByCategory from "../utils/group_by_categoty";

const Exchange = (props) => {
  let {setData, dateFrom, dateTill} = useContext(AppContext)
  function format_date(str){
    return str.replace(/(.*)-(.{2})-(.{2})$/, '$1$2$3')
  }  
  const {BASE_URL, EX_DEBET_PATH} = fetch_config
  useEffect(_ => {
    getData(`${BASE_URL}${EX_DEBET_PATH}&start=${format_date(props.dateFrom) || '20230101'}&end=${format_date(props.dateTill) || '20240101'}`)
    .then(data => {
      let groupedData = groupByCategory(data?.filter(e=>e.value>0))
      setData(Object.keys(groupedData).map(txt => {
        let value = groupedData[txt] 
        return {
          key: txt, 
          value: value, 
          // date: new Date(item.dt.replace(/(.*)(.{2})(.{2})$/, '$1-$2-$3')),
          caption: txt,
          // id: item.id_api
        }
      }))
    })
  }, [dateFrom, dateTill])
  return (
    <>
      <Calendar /> 
      <div style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <BarChart />
        <PolarChart />
      </div>
    </>
  );
};

export default Exchange;