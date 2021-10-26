import './SafeCard.scss'
import { useState, useEffect } from 'react'
import SafeIcon from '../../../assets/icons/brangkas.png'
import ArrowRight from '../../../assets/icons/arrow-right.png'
import { getSafe } from '../../../services'

function SafeCard() {
  const [safes, setSafes] = useState([])

  useEffect(() => {
    getSafe()
      .then((res) => {
        setSafes(res.data)
      })
  })
  return (
    <>
      <div className='safe-card'>
        <div className='safe-icon'>
          <img src={SafeIcon} />
        </div>
        {safes.map((safe) => {
          return (
            <div key={safe.id} className='safe-info'>
              <h4 className='safe-name'>{safe.safeName}</h4>
              <h4 className='safe-amount'>Rp 3.000.000</h4>
            </div>
          )
        })}

        <div className='safe-button'>
          <img src={ArrowRight} />
        </div>
      </div>
    </>
  )
}

export default SafeCard
