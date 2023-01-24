import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import LogoutIcon from "@mui/icons-material/Logout";
import { useContext } from "react";

import { authContext } from "../../context/authContext/AuthContext";
import { logout } from "../../context/authContext/ApiCalls";

const Topbar = () => {
  const { dispatch } = useContext(authContext);

  const logOutUser = () => {
    logout(dispatch);
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">ReactAdmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNoneIcon fontSize="large" />
            <span className="topIconBadge">2</span>
          </div>

          <div className="topbarIconContainer">
            <LanguageIcon fontSize="large" />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer" onClick={logOutUser}>
            <LogoutIcon fontSize="large" />
          </div>
          <img className="topAvatar" src="images/wuff.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
