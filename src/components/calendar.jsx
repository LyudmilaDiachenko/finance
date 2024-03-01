import { Space, DatePicker } from 'antd';
import { AppContext } from '../utils/context';
import { useContext } from 'react'
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;

export default function Calendar() {
  let {dateFrom, dateTill, setDateFrom, setDateTill} = useContext(AppContext)
  
  function handleGetDate(e) {
    let partDate = (datePart) => String(datePart).padStart(2, "0")
    setDateFrom(`${e[0].$y}${partDate(e[0].$M + 1)}${partDate(e[0].$D)}`)
    setDateTill(`${e[1].$y}${partDate(e[1].$M + 1)}${partDate(e[1].$D)}`)
  }

  return (
    <div>
      <Space direction="vertical" size={12} style={{marginBottom: "1%"}}>
        <RangePicker
          defaultValue={[dayjs(dateFrom, 'YYYY/MM/DD'), dayjs(dateTill, 'YYYY/MM/DD')]}
          id={{
            start: 'startInput',
            end: 'endInput',
          }}
          // onFocus={(_, info) => {
          //   console.log('Focus:', info.range);
          // }}
          // onBlur={(_, info) => {
          //   console.log('Blur:', info.range);
          // }}
          onChange={handleGetDate}
        />
      </Space>
    </div>
  )
}
