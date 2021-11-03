import "./UserAvatar.scss";
import Avatar from "react-avatar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfileAsync } from "../../redux/actions/profileAction";

function UserAvatar() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const userData = useSelector(
    (state) => state.profileReducer.profileData.data
  );

  useEffect(() => {
    const fetchProfile = () => {
      dispatch(getProfileAsync(token));
    };
    fetchProfile();
  }, []);

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
