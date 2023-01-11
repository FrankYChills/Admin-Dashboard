import HomeIcon from "@mui/icons-material/Home";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PaidIcon from "@mui/icons-material/Paid";
import MessageIcon from "@mui/icons-material/Message";
import EmailIcon from "@mui/icons-material/Email";
import FeedbackIcon from "@mui/icons-material/Feedback";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <HomeIcon fontSize="large" className="sbicon" /> <b>Home</b>
            </li>
            <li className="sidebarListItem">
              <AnalyticsIcon fontSize="large" className="sbicon" />{" "}
              <b> Analytics</b>
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon fontSize="large" className="sbicon" />
              <b> Sale</b>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <PeopleOutlineIcon fontSize="large" className="sbicon" />
              <b>Users</b>
            </li>
            <li className="sidebarListItem">
              <LocalMallIcon fontSize="large" className="sbicon" />
              <b>Products</b>
            </li>
            <li className="sidebarListItem">
              <PaidIcon fontSize="large" className="sbicon" />
              <b>Transcations</b>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <MessageIcon fontSize="large" className="sbicon" />
              <b>Messages</b>
            </li>
            <li className="sidebarListItem">
              <EmailIcon fontSize="large" className="sbicon" />
              <b>Mail</b>
            </li>
            <li className="sidebarListItem">
              <FeedbackIcon fontSize="large" className="sbicon" />
              <b>Feedbacks</b>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
