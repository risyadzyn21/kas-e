// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom'
// import NumberFormat from "react-number-format";
// import './PieChart.scss'
// import { Pie } from 'react-chartjs-2';
// import { getReportDaily, getSafe } from '../../services';
// import * as FaIcons from 'react-icons/fa'
// import { getReportDailyExpenseAsync } from '../../redux/actions';


// const MonthlyChart = () => {
//   const [reportsDailyExpense, setReportsDailyExpense] = useState([])
//   const [reportsDailyIncome, setReportsDailyIncome] = useState([])
//   const [totalIncome, setTotalIncome] = useState(0)
//   const [totalExpense, setTotalExpense] = useState(0)
//   const [balances, setBalances] = useState([])
//   const token = localStorage.getItem('token')
//   const dispatch = useDispatch()

//   // const { filtered: transactions } = useSelector(
//   //   (state) => state.GetTransactionReducer
//   // );

//   // useEffect(() => {
//   //   dispatch(getReportDailyExpenseAsync())
//   // }, [])

//   useEffect(() => {
//     getReportDaily()
//       .then((res) => {
//         setReportsDailyExpense(res?.data?.expense)
//         const total = res?.data?.expense?.reduce((prev, curr) => {
//           return prev + parseInt(curr.totalExpense)
//         }, 0)
//         setTotalExpense(total)
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//   }, [])

//   useEffect(() => {
//     getReportDaily()
//       .then((res) => {
//         setReportsDailyIncome(res?.data?.addIncome)
//         const total = res?.data?.addIncome?.reduce((prev, curr) => {
//           return prev + parseInt(curr.totalAddIncome)
//         }, 0)
//         setTotalIncome(total)
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//   }, [])

//   useEffect(() => {
//     getSafe(token)
//       .then((res) => {
//         setBalances(res?.data)

//       })
//       .catch((error) => {
//         console.log(error)
//       })
//   }, [])

//   const netIncome = totalIncome - totalExpense


//   const data = {
//     labels: ['Income', 'Expense'],
//     datasets: [
//       {
//         label: '# of Votes',
//         data: [totalIncome, totalExpense],
//         backgroundColor: [
//           '#003F88',
//           '#1EAE98',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <div>

//       <div className='chart-container'>
//         <div className='title-balance' >Balance</div>
//         {balances.map((balance, index) => {
//           return (
//             <div key={balance.date + index} className='title-value-wrapper'>
//               <div className='title-value opening'>
//                 Opening Balance
//                 <div className='chart-report-value'>
//                   <NumberFormat
//                     value={balance.openingBalance}
//                     displayType="text"
//                     thousandSeparator="."
//                     decimalSeparator=","
//                     prefix="Rp"
//                   />
//                 </div>
//               </div >
//               <div className='title-value ending'>
//                 Ending Balance
//                 <div className='chart-report-value'>
//                   <NumberFormat
//                     value={balance.amount}
//                     displayType="text"
//                     thousandSeparator="."
//                     decimalSeparator=","
//                     prefix="Rp"
//                   />
//                 </div>
//               </div>
//             </div>
//           )
//         })}

//         <div className='title-value-wrapper'>
//           <div className='title-netincome'>Net Income
//             <div className='chart-report-value'>
//               <NumberFormat
//                 value={netIncome}
//                 displayType="text"
//                 thousandSeparator="."
//                 decimalSeparator=","
//                 prefix="Rp"
//               />
//             </div>
//           </div>
//           <div className='right-report'>
//             <div className='income-indicator-wrapper'>
//               <div className='income-indicator'></div>
//               Income
//               <div className='chart-indicator-value'>
//                 <NumberFormat
//                   value={reportsDailyIncome.reduce((prev, curr) => {
//                     return prev + parseInt(curr.totalAddIncome)
//                   }, 0)}
//                   displayType="text"
//                   thousandSeparator="."
//                   decimalSeparator=","
//                   prefix="Rp"
//                 />
//               </div>

//             </div>
//             <div className='expense-indicator-wrapper'>
//               <div className='expense-indicator'></div>
//               Expense
//               <div className='chart-indicator-value'>
//                 <NumberFormat
//                   value={reportsDailyExpense.reduce((prev, curr) => {
//                     return prev + parseInt(curr.totalExpense)
//                   }, 0)}
//                   displayType="text"
//                   thousandSeparator="."
//                   decimalSeparator=","
//                   prefix="Rp"
//                 />
//               </div>
//             </div>
//             <Link to="/report-detail" className="report-btn">
//               See Detail
//             </Link>
//           </div>
//         </div>

//         <div className='chart-content-wrapper'>
//           <div className='title'>Income and Expense</div>
//           <div className='pie-chart'>
//             <Pie data={data} />
//           </div>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default MonthlyChart
