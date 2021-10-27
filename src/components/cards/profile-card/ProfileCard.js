import "./ProfileCard.scss";
import { Button, Card } from "antd";
import { Link } from "react-router-dom";
import AvatarIcon from "../../avatar/AvatarIcon";
import Right from "../../../assets/icons/arrow-right.png";

import { useEffect, useState } from "react";
import axios from "axios";
import { profile } from "../../../services";

function ProfileCard() {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    profile().then((result) => {
      setUserData(result.data.data);
    });
  }, []);

  console.log(userData);

  return (
    <div className="main-profile">
      <AvatarIcon name={userData.fullName} />
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
            <p>{userData.fullName}</p>
          </Card>
          <Card className="profile-content">
            <h4>E-mail</h4>
            {/* <p>{userData.User.email}</p> */}
            {userData.User ? <p>{userData.User.email}</p> : null}
          </Card>
          <Card className="profile-content">
            <h4>Gender</h4>
            <p className="gender">{userData.gender}</p>
          </Card>
          <Card className="profile-content">
            <h4>Age</h4>
            <p>{userData.age} Years</p>
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
