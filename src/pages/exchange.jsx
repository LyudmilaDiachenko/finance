import { AppContext } from '../utils/context';
import { useContext, useEffect } from "react";
import getData from '../utils/get_data';
import Calendar from "../components/calendar";
import BarChart from "../components/bar_chart";
import PolarChart from "../components/polar_chart";
import { fetch_config } from "../utils/fetch_config"
import groupBy from "../utils/groupBy";
import LineChart from '../components/line_chart';
import { Table } from 'antd';

const Exchange = (props) => {
  let {setData, dateFrom, dateTill} = useContext(AppContext)
  function format_date(str){
    return str.replace(/(.*)-(.{2})-(.{2})$/, '$1$2$3')
  }  
  const {BASE_URL, EX_DEBET_PATH} = fetch_config
  useEffect(_ => {
    getData(`${BASE_URL}${EX_DEBET_PATH}&start=${format_date(props.dateFrom) || '20210101'}&end=${format_date(props.dateTill) || '20240101'}`)
    .then(data => {
      let groupedData = 
        Object.values(groupBy(data?.filter(e=>e.value>0), ['txt', 'dt'], 'value', [a=>a, a=>a.substr(0,4)]))
        .reduce((acc, a)=>acc.concat(a), [])

      setData(groupedData.map(item => {
        return {
          key: item.txt, 
          value: item.value, 
          date: item.dt.substr(0,4),
          caption: item.txt,
          id: item.txt
        }
      }).sort(a=>a.date))
    })
  }, [dateFrom, dateTill])
  return (
    <>
      <Calendar /> 
      <div className='chart_container'>
        <BarChart />
        <PolarChart />
      </div>
      <LineChart single={true} />
      {/* <Table /> */}
    </>
  );
};

export default Exchange;