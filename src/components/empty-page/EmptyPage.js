import './EmptyPage.scss'
import KasELogo from '../../assets/logo/Rectangle-9.png'


function EmptyPage() {
  return (
    <>
      <div className='empty-page'>
        <img src={KasELogo} alt='Kas E Logo' />
        <h3>You Haven’t add any transactions yet</h3>
      </div>
    </>
  )
}

export default EmptyPage
