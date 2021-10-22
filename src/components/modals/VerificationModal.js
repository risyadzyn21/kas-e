import { Modal } from 'antd';

function VerificationModal({ isModalVisible, handleOk, handleCancel }) {
  return (
    <>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
}

export default VerificationModal
