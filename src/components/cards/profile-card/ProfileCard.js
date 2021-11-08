import "./ProfileCard.scss";
import { Card } from "antd";
import { Link } from "react-router-dom";
import AvatarIcon from "../../avatar/AvatarIcon";

function ProfileCard({ userData }) {
  return (
    <div className="main-profile">
      {userData?.profilePicture ? (
        <img src={userData.profilePicture} alt="Avatar" className="avatar" />
      ) : (
        <AvatarIcon name={userData ? userData.fullName : null} />
      )}
      <div className="profile">
        <Link to="/see-all-safe">
          {/* <Button className="all-safe-btn" block>
            <h4>See all safe</h4>
            <span>
              <img src={Right} alt="Pointer" />
            </span>
          </Button> */}
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
