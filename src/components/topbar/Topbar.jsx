import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";

const Topbar = () => {
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
            <SettingsIcon fontSize="large" />
          </div>
          <div className="topbarIconContainer">
            <LanguageIcon fontSize="large" />
            <span className="topIconBadge">2</span>
          </div>
          <img className="topAvatar" src="images/wuff.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
