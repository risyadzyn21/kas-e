import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
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
      <div className='chart-container'>
        <div className='title-balance' >Balance</div>
        <div className='title-value-wrapper'>
          <div className='title-value opening'>
            Opening Balance
            <div className='chart-report-value'>Rp 300.000</div>
          </div >
          <div className='title-value ending'>
            Ending Balance
            <div className='chart-report-value'>Rp 300.000</div>
          </div>
        </div>
        <div className='title-value-wrapper'>
          <div className='title-netincome'>Net Income
            <div className='chart-report-value'>Rp 300.000</div>
          </div>
          <Link to="/report-detail" className="report-btn">
            See Detail
          </Link>
        </div>

        <div className='chart-content-wrapper'>
          <div className='title'>Income and Expense</div>
          <div className='pie-chart'>
            <Pie data={data} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default MonthlyChart
