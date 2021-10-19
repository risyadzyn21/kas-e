import "./ProfileCard.scss";
import { Button, Card } from "antd";
import React from "react";
import AvatarIcon from "../../avatar/AvatarIcon";
import Right from "../../../assets/icons/arrow-right.png";

function ProfileCard() {
  return (
    <div className="main-profile">
      <AvatarIcon />
      <div className="profile">
        <Button className="all-safe-btn" block>
          <h4>See all safe</h4>
          <span>
            <img src={Right} alt="Pointer" />
          </span>
        </Button>
        <Card className="card-container">
          <Card className="profile-content">
            <h4>Name</h4>
            <p>Budi Budi</p>
          </Card>
          <Card className="profile-content">
            <h4>Email</h4>
            <p>budi.budi@gmail.com</p>
          </Card>
          <Card className="profile-content">
            <h4>Gender</h4>
            <p>Male</p>
          </Card>
          <Card className="profile-content">
            <h4>Age</h4>
            <p>32 Years</p>
          </Card>
          <Card className="profile-content">
            <h4>Password</h4>
            <p>************</p>
          </Card>
        </Card>
      </div>
    </div>
  );
}

export default ProfileCard;
