import React, { useContext } from "react";
import UserContext from "../context/useContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please Login</div>;

  return <div>Welcome {user.userName}</div>;
};

export default Profile;
