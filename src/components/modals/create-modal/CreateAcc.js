import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Input } from "antd";
import { createSafe, getSafe } from "../../../services/index";
import "./CreateAcc.scss";
import SafeIcon from "../../../assets/icons/brangkas.png";
import { useDispatch, useSelector } from "react-redux";
import { createSafeAsync } from "../../../redux/actions";
import Loading from '../../loading/Loading';

const CreateAcc = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const createSafes = useSelector((state) => state.SafesReducer);
  const [safes, setSafes] = useState([])
  const token = localStorage.getItem("token");


  const onFinish = (values) => {
    console.log("Success:", values);
    navigation.next()
    dispatch(createSafeAsync(values.safeName, values.amount));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    getSafe(token)
      .then((res) => {
        setSafes(res?.data)
        if (res.data && res.data.length) {
          setIsModalVisible(false);
        } else {
          setIsModalVisible(true);
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div>

      {/* {createSafes.loading ? <Loading /> : ''} */}

      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="create-form">
          <h2>Create Your First Safe</h2>
          <p>
            Enter the amount of income into your safe so that your expenses are
            under control
          </p>
          <img src={SafeIcon} alt="illus" />
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div className="create-first-wrapper">
              <Form.Item
                name="safeName"
                block size="large"
                rules={[
                  {
                    required: true,
                    message: "Please set your new safe!",
                  },
                ]}
              >
                <Input placeholder="Safe Name" className="text-create" />
              </Form.Item>

              <Form.Item
                name="amount"
                rules={[
                  {
                    required: true,
                    pattern: new RegExp(/^[0-9]+$/),
                    message: "Please set your new amount!",
                  },
                ]}
              >
                <Input
                  placeholder="Amount"
                  className="text-create"
                  controls={false}
                  prefix="Rp"
                  type="number"
                  min="0"
                />
              </Form.Item>
            </div>
            <div className="create-modal-btn">
              <Button htmlType="submit" block size="large">
                Create
              </Button>
            </div>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default CreateAcc;

// import React, { useState, useEffect } from "react";
// import { Modal, Button } from "antd";
// import { createSafe, getSafe } from "../../../services/index";
// import "./CreateAcc.scss";
// import SafeIcon from "../../../assets/icons/brangkas.png";
// import { useDispatch, useSelector } from "react-redux";
// import Loading from '../../loading/Loading';

// const CreateAcc = ({ navigation }) => {
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const dispatch = useDispatch();
//   const createSafes = useSelector((state) => state.SafesReducer)
//   const [safeName, setsafeName] = useState('')
//   const [amount, setAmount] = useState('')
//   const token = localStorage.getItem('token')
//  const [safes, setSafes] = useState([])

//   const handleChange = (e) => {
//   setsafeName(e.target.value)

//  }

//  const handleClick = (e) => {
//   setAmount(e.target.value)
//  }

//  const handleSubmit = (e) => {
//   e.preventDefault()
//   navigation.next()
//   createSafe( safeName, amount, token )
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((error) => {
//     // console.log(error)
//   })
//  }

//   const handleOk = () => {
//     setIsModalVisible(false);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   useEffect(() => {
//     getSafe(token)
//       .then((res) => {
//         setSafes(res?.data)
//         if (res.data && res.data.length) {
//           setIsModalVisible(false);
//         } else {
//           setIsModalVisible(true);
//         }
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//   }, [])

//   return (
//     <div>

//       {createSafes.loading ? <Loading /> : ''}

//       <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
//         <div
//           className="create-form"
//         >
//           <h2>Create Your First Safe</h2>
//           <p>
//             Enter the amount of income into your safe so that your expenses are
//             under control
//           </p>
//           <img
//             src={SafeIcon}
//             alt="illus"
//           />
//           <form onSubmit={handleSubmit} style={{ marginTop: 20}}>
//             <div className="form">
//               <input
//                 type="text"
//                 className="text-input"
//                 placeholder="Safe Name"
//                 name="safeName"
//                 value={safeName}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="form">
//               <input
//                 type="text"
//                 className="text-input"
//                 placeholder="IDR. 00(Your Income)"
//                 name="amount"
//                 value={amount}
//                 onChange={handleClick}
//                 />
//             </div>
//             <div className="create-second">
//               <button
//                 type="submit"
//                 className="submit-btn"
//                 onClick={handleSubmit}

//               >
//                 Create
//               </button>
//             </div>
//           </form>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default CreateAcc;
