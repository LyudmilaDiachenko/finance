import React from 'react'
import style from "../style/rich_table.module.css"

// const data = {
//   caption: '',
//   data: [
//       {caption: "", tizer: "", img: "", link: "", money: "", date: ""}
//     ]
//   }

export default function RichTable({caption, data}) {
  const formatter = new Intl.NumberFormat(
    'uk-UA', 
    {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }
    );
  return (
    <div className={style.rich_table_container}>
       <table>
        <caption>{caption}</caption>
       <tbody>
        {data.map(row => 
          <tr key={row.key}>
            <td>{row.img}</td>
            <td className={style.caption}>{row.caption}</td>
            <td className={style.number}>{formatter.format(row.value)} млн. грн.</td>
            <td className={style.date}>{row.date.toLocaleDateString()}</td>
          </tr>
        )}
        </tbody>
       </table>
    </div>
  )
}
