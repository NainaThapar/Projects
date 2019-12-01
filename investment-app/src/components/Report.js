import React from 'react';
import { Table } from 'antd';

function Report() {
    const columns = [
        {
          title: 'Year',
          dataIndex: 'year',
        },
        {
          title: 'Cash Inflow',
          className: 'column-money',
          dataIndex: 'inflow',
        },
        {
          title: 'Cash Outflow',
          dataIndex: 'outflow',
        },
      ];

      const data = [
        {
          key: '1',
          year: '1970',
          inflow: '12,586',
          outflow: '14156',
        },
        {
          key: '2',
          year: '1972',
          inflow: '26,580',
          outflow: '30,567',
        },
        {
          key: '3',
          year: '1987',
          inflow: '29,789',
          outflow: '34,724',
        },
        {
            key: '4',
            year: '1987',
            inflow: '29,789',
            outflow: '34,724',
          },
          {
            key: '5',
            year: '1987',
            inflow: '29,789',
            outflow: '34,724',
          },
          {
            key: '6',
            year: '1987',
            inflow: '29,789',
            outflow: '34,724',
          },
          {
            key: '7',
            year: '1987',
            inflow: '29,789',
            outflow: '34,724',
          },
          {
            key: '8',
            year: '1987',
            inflow: '29,789',
            outflow: '34,724',
          }
      ];
    return(
        <div className='report-container'>
            <div className='tbl-wrapper'>
                <Table
                columns={columns}
                dataSource={data}
                bordered
                title={() => 'LenDen: Inflows And Outflows'}
                footer={() => 'Source: some random UIVN'}
                />
            </div>
        </div>
        
    )
}

export default Report;
