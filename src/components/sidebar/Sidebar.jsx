import HomeIcon from "@mui/icons-material/Home";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebardTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <HomeIcon fontSize="large" /> Home
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
