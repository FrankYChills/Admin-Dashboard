import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "username", headerName: "Username", width: 150 },
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "status",
    headerName: "Status",
    type: "string",
    width: 200,
  },
  {
    field: "transaction",
    headerName: "Transaction Volume",
    description: "Value transacted by a user on the platform",
    width: 200,
  },
];

const rows = [
  {
    id: 1,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "jon@hotmail.com",
    status: "active",
    transaction: "$200.00",
  },
  {
    id: 2,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "jon@hotmail.com",
    status: "active",
    transaction: "$200.00",
  },
  {
    id: 3,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "jon@hotmail.com",
    status: "active",
    transaction: "$200.00",
  },
  {
    id: 4,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "jon@hotmail.com",
    status: "active",
    transaction: "$200.00",
  },
  {
    id: 5,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "jon@hotmail.com",
    status: "active",
    transaction: "$200.00",
  },
];
const UserList = () => {
  return (
    <div className="userList">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default UserList;
