import ForwardTable from 'antd/es/table/Table'
import React from 'react'

export default function Table() {
    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];
      
      const columns = [
        {
          title: 'Категорія',
          dataIndex: 'category',
          key: 'category',
        },
        {
          title: 'Загальна сума, грн',
          dataIndex: 'sum',
          key: 'sum',
        },
      ];
  return (
    <div>
        <ForwardTable dataSource={dataSource} columns={columns}>

        </ForwardTable>
    </div>
  )
}
