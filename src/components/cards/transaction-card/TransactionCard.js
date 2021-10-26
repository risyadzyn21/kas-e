import React, { useState, useEffect } from 'react';
import { Tooltip } from 'antd';
import { getTransaction } from '../../../services';
import NumberFormat from "react-number-format";
import './TransactionCard.scss'
import Limit from '../../../assets/icons/limit.png'
import YourExpense from '../../../assets/icons/your-expense.png'
import Safe from '../../../assets/icons/brangkas.png'
import DetailExpense from '../../../assets/icons/detail-expense.png'
import Trash from '../../../assets/icons/trash.png'


function TransactionCard() {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    getTransaction()
      .then((res) => {
        setTransactions(res?.data?.data?.transactions)

      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      <div className='transaction-content'>
        {transactions?.map((transaction) => {
          return (
            <div key={transaction?.id} className='transaction-card'>
              <Tooltip title="Delete" className='trash-button-transaction'>
                <img src={Trash} alt='delete' />
              </Tooltip>
              <div className='card-content-container'>
                <h3>{transaction?.Categories?.categoryName}</h3>
                <img src={transaction?.Categories?.image_url} alt={transaction?.Categories?.categoryName} />
                <div className='card-content'>
                  <div className='card-left'>
                    <div key={transaction?.id} className='detail-transaction-container'>
                      <img src={Limit} alt='limit' />
                      <div className='detail-content-container'>
                        <div className='detail-transaction-title'>Limit</div>
                        <NumberFormat
                          value={transaction?.expense}
                          displayType="text"
                          thousandSeparator="."
                          decimalSeparator=","
                          prefix="Rp"
                        />
                      </div>
                    </div>

                    {transaction?.Categories?.Limit?.map((category) => {
                      return (
                        <div key={category?.id} className='detail-transaction-container'>
                          <img src={YourExpense} alt='Your Expense' />
                          <div className='detail-content-container'>
                            <div className='detail-transaction-title'>Your Expense</div>
                            <NumberFormat
                              value={category?.limit}
                              displayType="text"
                              thousandSeparator="."
                              decimalSeparator=","
                              prefix="Rp"
                            />
                          </div>
                        </div>

                      )
                    })}
                  </div>
                  <div className='card-right'>
                    <div className='detail-transaction-container'>
                      <img src={Safe} alt='Taken From' />
                      <div className='detail-content-container'>
                        <div className='detail-transaction-title'>Taken From</div>
                        <div>{transaction?.Safe?.safeName}</div>
                      </div>
                    </div>
                    <div className='detail-transaction-container'>
                      <img src={DetailExpense} alt='Your Expense' />
                      <div className='detail-content-container'>
                        <div className='detail-transaction-title'>Detail Expense</div>
                        <div>{transaction?.detailExpense}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TransactionCard
