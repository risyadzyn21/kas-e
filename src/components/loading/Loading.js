import { Spin, Space } from 'antd';
import './Loading.scss'

function Loading() {
  return (
    <div className='spinner-container'>

      <Spin size="large" wrapperClassName='spinner' />
      <h2 className='loading-title'>Please Wait . . .</h2>

    </div>
  )
}

export default Loading
