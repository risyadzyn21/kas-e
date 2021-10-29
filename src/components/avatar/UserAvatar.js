import "./UserAvatar.scss";
import Avatar from "react-avatar";
import { useSelector } from "react-redux";

function UserAvatar() {
  const userData = useSelector(
    (state) => state.profileReducer.profileData.data
  );

  return (
    <div className="user-avatar">
      <Avatar name={userData ? userData.fullName : null} round={true} />
      <div className="user-info">
        <h3>{userData ? userData.fullName : null}</h3>
        <h4>{userData ? userData.User.email : null}</h4>
      </div>
    </div>
  );
}

export default UserAvatar;
