import './SafeCard.scss'
import { useState, useEffect } from 'react'
import SafeIcon from '../../../assets/icons/brangkas.svg'
import ArrowRight from '../../../assets/icons/arrow-right.png'

function SafeCard() {

  return (
    <>
      <div className='safe-card'>
        <div className='safe-icon'>
          <img src={SafeIcon} />
        </div>

        <div className='safe-info'>
          <h4 className='safe-name'>hura-hura</h4>
          <h4 className='safe-amount'>Rp 3.000.000</h4>
        </div>

        <div className='safe-button'>
          <img src={ArrowRight} />
        </div>
      </div>
    </>
  )
}

export default SafeCard
