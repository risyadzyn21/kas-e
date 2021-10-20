import './SafeCard.scss'
import SafeIcon from '../../../assets/icons/brangkas.png'
import ArrowRight from '../../../assets/icons/arrow-right.png'

function SafeCard() {
  return (
    <>
      <div className='safe-card'>
        <div className='safe-icon'>
          <img src={SafeIcon} />
        </div>
        <div className='safe-info'>
          <h4 className='safe-name'>Jalan-jalan</h4>
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
