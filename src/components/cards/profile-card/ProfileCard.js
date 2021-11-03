import "./ProfileCard.scss";
import { Button, Card } from "antd";
import { Link } from "react-router-dom";
import AvatarIcon from "../../avatar/AvatarIcon";
import Right from "../../../assets/icons/arrow-right.png";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { profile } from "../../../services";
// import { useDispatch } from "react-redux";
// import { getProfileAsync } from "../../../redux/actions/profileAction";
import { useSelector } from "react-redux";

function ProfileCard() {
  // const [userData, setUserData] = useState("");
  // const token = localStorage.getItem("token");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios({
  //       method: "GET",
  //       url: "http://kas-e.herokuapp.com/api/v1/profile",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     console.log(result);
  //     setUserData(result.data.data);
  //   };
  //   fetchData();
  // }, []);

  const userData = useSelector(
    (state) => state.profileReducer.profileData.data
  );

  return (
    <div className="main-profile">
      <AvatarIcon name={userData ? userData.fullName : null} />
      <div className="profile">
        <Link to="/see-all-safe">
          <Button className="all-safe-btn" block>
            <h4>See all safe</h4>
            <span>
              <img src={Right} alt="Pointer" />
            </span>
          </Button>
        </Link>
        <Card className="card-container">
          <Card className="profile-content">
            <h4>Name</h4>
            <p>{userData ? userData.fullName : null}</p>
          </Card>
          <Card className="profile-content">
            <h4>E-mail</h4>
            {userData ? <p>{userData.User.email}</p> : null}
          </Card>
          <Card className="profile-content">
            <h4>Gender</h4>
            <p className="gender">{userData ? userData.gender : null}</p>
          </Card>
          <Card className="profile-content">
            <h4>Age</h4>
            <p>{userData ? userData.age : null} Years</p>
          </Card>
          {/* <Card className="profile-content">
            <h4>Password</h4>
            <p>************</p>
          </Card> */}
        </Card>
      </div>
    </div>
  );
}

export default ProfileCard;
