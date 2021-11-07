import './FooterReplace.scss'
import apple from "../../assets/landing-page-images/apple.png";
import google from "../../assets/landing-page-images/google.png";


function FooterReplace() {
  return (
    <div className='footer-container'>
      <div className='footer-content-wrapper'>
        <div className='footer-top-content'>
          <div className='footer-top-left-content'>
            <div className='footer-left-title'>
              <div>About</div>
              <div>Support</div>
            </div>
            <div className='footer-left'>
              <div>Company</div>
              <div>Help Center</div>
            </div>
            <div className='footer-left'>
              <div>Report</div>
              <div>Contact Us</div>
            </div>
          </div>
          <div className='footer-top-right-content'>
            <div className="download-img">
              <a href="https://play.google.com/">
                <img style={{ height: "100px" }} src={google} alt="" />{" "}
              </a>
              <a href="https://www.apple.com/app-store/">
                <img style={{ height: "100px" }} src={apple} alt="" />{" "}
              </a>
            </div>
          </div>
        </div>
        <div className='footer-bottom-content'>
          <div className='footer-bottom-caption'>© Copyright 2021. All right reserved.</div>
        </div>
      </div>
    </div>
  )
}

export default FooterReplace
