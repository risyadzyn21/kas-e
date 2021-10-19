import { useState } from 'react';
import { Modal, Button } from 'antd';
import './Modal.scss'
import AddIncomeForm from '../forms/AddIncomeForm';


const AddIncomeModal = () => {
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
      <div className='income-modal'>
        <Button type="primary" onClick={showModal}>
          Add Income
        </Button>
      </div>
      <Modal title="Add Income" visible={isModalVisible} footer={null} onOk={handleOk} onCancel={handleCancel}>
        <AddIncomeForm />
      </Modal>
    </div>
  )
}

export default AddIncomeModal
