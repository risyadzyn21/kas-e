import React, { useState, useEffect } from 'react';
import { isToday, format } from 'date-fns';
import { useSelector, useDispatch } from 'react-redux'
import { getTransactionsDailyAsync, getTransactionsMonthlyAsync, addTransactionAsync, deleteTransactionAsync } from '../../../redux/actions';
import { Tooltip } from 'antd';
import { getTransaction } from '../../../services';
import NumberFormat from "react-number-format";
import './TransactionCard.scss'
import Limit from '../../../assets/icons/limit.png'
import YourExpense from '../../../assets/icons/your-expense.png'
import Safe from '../../../assets/icons/brangkas.png'
import DetailExpense from '../../../assets/icons/detail-expense.png'
import Trash from '../../../assets/icons/trash.png'
import PiggyBank from '../../../assets/icons/piggy-bank.svg'
import Loading from '../../loading/Loading'
import { getTransactionsDailySuccess } from '../../../redux/actions'
import EmptyPage from '../../empty-page/EmptyPage'

function TransactionCard() {
  const dispatch = useDispatch()
  // const [transactions, setTransactions] = useState([])
  // const [isLoading, setIsLoading] = useState(false)

  const { tabVariant, transactions, isLoading } = useSelector(
    (state) => state.GetTransactionReducer
  );

  useEffect(() => {
    if (tabVariant === 'day') {
      dispatch(getTransactionsDailyAsync(format(new Date(), 'yyyy-MM-dd')))
    } else {
      dispatch(getTransactionsMonthlyAsync(format(new Date(), 'yyyy-MM-dd')))
    }
  }, [tabVariant])


  return (
    <>
      {isLoading ? <Loading /> : ''}

      {transactions && transactions?.length < 1 ? <EmptyPage /> : (
        <div className='transaction-content'>
          {transactions.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))?.map((transaction) => {
            return transaction.type === 'expense' ? (
              <div key={transaction?.id} className='transaction-card'>
                <Tooltip title="Delete" className='trash-button-transaction'>
                  <img src={Trash} alt='delete' onClick={() => dispatch(deleteTransactionAsync(transaction.id))} />
                </Tooltip>
                <div className='card-content-container'>
                  <h3>{transaction?.Categories?.categoryName}</h3>
                  <img src={transaction?.Categories?.image_url} alt={transaction?.Categories?.categoryName} />
                  {transaction.Categories.Limit.map((limit) => {
                    return limit.amount < 0 ? (<div style={{ "fontWeight": "bold" }}>
                      Over Limit: <NumberFormat
                        value={limit.amount}
                        displayType="text"
                        thousandSeparator="."
                        decimalSeparator=","
                        prefix="Rp"
                        style={{ "color": "red", "fontWeight": "bold" }}
                      />
                    </div>) : ''
                  })}

                  <div className='card-content'>

                    <div className='card-left'>
                      <div className='detail-transaction-container'>
                        <img src={YourExpense} alt='limit' />
                        <div className='detail-content-container'>
                          <div className='detail-transaction-title'>Your Expense</div>
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
                            <img src={Limit} alt='Your Expense' />
                            <div className='detail-content-container'>
                              <div className='detail-transaction-title'>Limit</div>
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
              </div >
            ) : (
              <div key={transaction?.id} className='transaction-card'>
                <Tooltip title="Delete" className='trash-button-transaction'>
                  <img src={Trash} alt='delete' onClick={() => dispatch(deleteTransactionAsync(transaction.id))} />
                </Tooltip>
                <div className='card-content-container'>
                  <h3>Income</h3>
                  <img src={PiggyBank} alt={transaction?.Categories?.categoryName} />
                  <div className='card-content'>
                    <div className='card-left'>

                      <div className='detail-transaction-container'>
                        <img src={YourExpense} alt='limit' />
                        <div className='detail-content-container'>
                          <div className='detail-transaction-title'>Income</div>
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
                            <img src={Limit} alt='Your Expense' />
                            <div className='detail-content-container'>
                              <div className='detail-transaction-title'>Limit</div>
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
                          <div className='detail-transaction-title'>Add To</div>
                          <div>{transaction?.Safe?.safeName}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div >
      )}


    </>
  )
}

export default TransactionCard
