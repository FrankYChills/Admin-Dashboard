import VisibilityIcon from "@mui/icons-material/Visibility";
import { useEffect, useState } from "react";
import axios from "axios";

const WidgetSm = () => {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const fetchNewUsers = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3500" + "/api/users?new=true",
          {
            headers: {
              authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2E0MTBlYTViYjBlMTY2MjY3NTZjNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDM2NTkzNCwiZXhwIjoxNjc0OTcwNzM0fQ.IP28VZxkIjXAszWGtBBXRhDXAI5lKz274vqvqIeE328",
            },
          }
        );
        setNewUsers(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchNewUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Users</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
          <li className="widgetSmListItem">
            <img
              src={
                user.profilePic ||
                "https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png"
              }
              className="widgetSmImage"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
              <span className="widgetSmUserTitle">TechFlix User</span>
            </div>
            <button className="widgetSmButton">
              <VisibilityIcon className="widgetSmIcon" /> View
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
