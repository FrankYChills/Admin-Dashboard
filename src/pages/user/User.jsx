import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import EventIcon from "@mui/icons-material/Event";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PublishIcon from "@mui/icons-material/Publish";

const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <button className="userAddButton">New User</button>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="userImage"
              className="userShowImage"
            />

            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Jesper</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account details</span>
            <div className="userShowInfo">
              <PermIdentityIcon className="userShowIcon" />
              <span className="userShowInfoTitle">@annajesper11</span>
            </div>
            <div className="userShowInfo">
              <EventIcon className="userShowIcon" />
              <span className="userShowInfoTitle">Jan 15 1999</span>
            </div>
            <div className="userShowInfo">
              <PhoneInTalkIcon className="userShowIcon" />
              <span className="userShowInfoTitle">+11 756-1224-738</span>
            </div>
            <div className="userShowInfo">
              <LocationOnIcon className="userShowIcon" />
              <span className="userShowInfoTitle">New York, USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Anna Jesper"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="@annajesper11"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+11 756-1224-738"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York, USA"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
                <label htmlFor="file">
                  <PublishIcon /> Edit
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
