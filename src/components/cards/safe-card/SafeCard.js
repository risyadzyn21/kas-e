import { useState, useEffect } from "react"
import { Spin } from 'antd';
import './SafeCard.scss'
import NumberFormat from "react-number-format";
import SafeIcon from '../../../assets/icons/brangkas.svg'
import ArrowRight from '../../../assets/icons/arrow-right.png'
import { getSafe } from "../../../services"

function SafeCard() {
  const [safes, setSafes] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const token = localStorage.getItem('token')

  useEffect(() => {
    setIsLoading(true)
    getSafe(token)
      .then((res) => {
        setSafes(res.data)
        console.log(res.data)
        setIsLoading(false)
      })
  }, [])


  return (
    <>

      {safes.length === 0 ? "" : (
        <div className='safe-card'>
          <div className='safe-icon'>
            <img src={SafeIcon} alt='icon safe' />
          </div>
          <div className='safe-info'>
            <h4 className='safe-name'>{safes[safes.length - 1].safeName}</h4>
            <h4 className='safe-amount'>
              <NumberFormat
                value={safes[[safes.length - 1]].amount}
                displayType="text"
                thousandSeparator="."
                decimalSeparator=","
                prefix="Rp"
              />
            </h4>
          </div>
          <div className='safe-button'>
            <img src={ArrowRight} alt='arrow' />
          </div>
        </div>
      )}



    </>
  )
}

export default SafeCard
