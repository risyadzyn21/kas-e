import React, { useState, useEffect } from 'react';
import './PieChart.scss'
import { Pie } from 'react-chartjs-2';
import { getReportMonthly } from '../../services';





const MonthlyChart = () => {
  const [reportMonthly, setReportMonthly] = useState([])


  const data = {
    labels: ['Income', 'Expense'],
    datasets: [
      {
        label: '# of Votes',
        data: [1000000, 200000],
        backgroundColor: [
          '#003F88',
          '#1EAE98',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <div>
        <h2 className='title-balance' >Balance</h2>
        <div>
          <h3>Opening Balance</h3>
        </div>
      </div>
      <div>
        <h2 className='title'>Income and Expense</h2>
      </div>
      <div className='pie-chart'>
        <Pie data={data} />
      </div>
    </div>
  )
}

export default MonthlyChart
