import { Modal, Button } from 'antd';

function VerificationModal({ isModalVisible, handleOk }) {
  console.log('halo aku modal')
  return (
    <>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
}

export default VerificationModal
