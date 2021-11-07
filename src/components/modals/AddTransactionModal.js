import { useState } from 'react';
import { Modal, Button } from 'antd';
import './Modal.scss'
import AddTransactionForm from '../forms/AddTransactionForm';


const AddTransactionModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <div className='transaction-modal'>
        <Button type="primary" onClick={showModal}>
          Add Transactions
        </Button>
      </div>
      <Modal title="Add Transactions" visible={isModalVisible} footer={null} onOk={handleOk} onCancel={handleCancel}>
        <AddTransactionForm handleOk={handleOk} />
      </Modal>
    </div>
  )
}

export default AddTransactionModal
