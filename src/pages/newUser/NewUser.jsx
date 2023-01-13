const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="Enter your name" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="Enter your phone number" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Enter your address" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Hell Yeah</option>
            <option value="no">Hell Nahh</option>
          </select>
        </div>
        <div className="newProductItem">
          <label>User Image</label>
          <input type="file" />
        </div>
      </form>
      <button className="newUserButton">Create</button>
    </div>
  );
};

export default NewUser;
