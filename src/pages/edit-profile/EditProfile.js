import "./EditProfile.scss";
import { useState } from "react";
import { Button, Card, Layout, PageHeader, Form } from "antd";
import { Link } from "react-router-dom";

import Sidebar from "../../components/sidebar/Sidebar";
import arrowLeft from "../../assets/icons/arrow-left.png";
import AvatarIcon from "../../components/avatar/AvatarIcon";
import EditProfileForm from "../../components/forms/EditProfileForm";
import axios from "axios";
import { useSelector } from "react-redux";
import Loading from "../../components/loading/Loading";
import {
  getProfileFailed,
  getProfileSuccess,
} from "../../redux/actions/profileAction";
import { useDispatch } from "react-redux";

function EditProfile() {
  const { Sider, Content } = Layout;
  const [form] = Form.useForm();
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const userData = useSelector(
    (state) => state.profileReducer.profileData.data
  );

  const onFinish = () => {
    const fullName = form.getFieldValue("fullName");
    const email = form.getFieldValue("email");
    const gender = form.getFieldValue("gender");
    const age = form.getFieldValue("age");
    const password = form.getFieldValue("password");

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("gender", gender);
    formData.append("age", age);
    formData.append("password", password);

    setLoading(true);

    axios({
      method: "PUT",
      url: "https://kas-e.herokuapp.com/api/v1/profile/edit",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    })
      .then((res) => {
        console.log(res);
        // window.location.reload();
        axios({
          method: "GET",
          url: "http://kas-e.herokuapp.com/api/v1/profile",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            console.log(response.data);
            dispatch(getProfileSuccess(response.data));
          })
          .catch((error) => {
            console.log(error);
            dispatch(getProfileFailed(error));
          });
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      {loading === true ? <Loading /> : null}
      <Layout>
        <Sider theme="light" width={326} className="sidebar">
          <Sidebar />
        </Sider>
        <Layout className="main-layout">
          <PageHeader
            className="site-page-header"
            onBack={() => null}
            title="Edit Profile"
            backIcon={
              <Link to="my-profile">
                <img src={arrowLeft} alt="Back" />
              </Link>
            }
          />
          <Content>
            <div className="container">
              <div className="main-edit">
                <AvatarIcon name={userData ? userData.fullName : null} />
                <Card>
                  <EditProfileForm
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    userData={userData}
                    loading={loading}
                  />
                </Card>
              </div>
              <div className="button-profile">
                <Button type="primary" onClick={() => form.submit()}>
                  Save
                </Button>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default EditProfile;
