import { useState, useEffect } from "react"
import './SafeCard.scss'
import SafeIcon from '../../../assets/icons/brangkas.png'
import ArrowRight from '../../../assets/icons/arrow-right.png'
import { getSafe } from "../../../services"

function SafeCard() {
  const [safes, setSafes] = useState([])
  const token = localStorage.getItem('token')

  useEffect(() => {
    getSafe(token)
    .then((res) => {
      setSafes(res.data)
      console.log(res.data)
    })
  }, [])

  
  return (
    <>
      <div className='safe-card'>
        <div className='safe-icon'>
          <img src={SafeIcon} />
        </div>
        {safes.length === 0 ? "" : (
            <div className='safe-info'>
            <h4 className='safe-name'>{safes[safes.length - 1].safeName}</h4>
            <h4 className='safe-amount'>Rp {safes[[safes.length - 1]].amount}</h4>
          </div>
          
        )}
          
        
        <div className='safe-button'>
          <img src={ArrowRight} />
        </div>
      </div>
    </>
  )
}

export default SafeCard
