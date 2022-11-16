import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { listUsers, deleteUser } from "../actions/userActions";
import leftArrowIcon from "../icons/left.svg";
import tickIcon from "../icons/tick.png";
import closeIcon from "../icons/close.png";
import deleteIcon from "../icons/delete.png";

const AdminUserList = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { error, users } = userList;
  const userLogIn = useSelector((state) => state.userLogIn);
  const { userInfo } = userLogIn;
  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate, userInfo, successDelete]);

  //delete common user
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <Container className="justify-content-md-center">
      <Link to="/">
        <img
          src={leftArrowIcon}
          style={{ width: 28, height: 23 }}
          className="mt-5"
          variant="primary"
        />
      </Link>
      <h2 className="mb-4 text-center">USER LIST</h2>
      {error ? (
        <p>{error}</p>
      ) : (
        <Table
          striped
          bordered
          hover
          responsive
          className=" table-sm text-center my-5 text-nowrap"
        >
          <thead>
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">USERNAME</th>
              <th className="p-3">EMAIL</th>
              <th className="p-3">ADMIN</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user._id}>
                <td className="p-3">{user._id}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                {user.isAdmin ? (
                  <td className="p-3">
                    <img src={tickIcon} style={{ width: 20, height: 20 }} />
                  </td>
                ) : (
                  <td className="p-3">
                    <img src={closeIcon} style={{ width: 20, height: 20 }} />
                  </td>
                )}
                {user.isAdmin ? (
                  <td className="p-3">Admin</td>
                ) : (
                  <td className="p-3">
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(user._id)}
                    >
                      <img src={deleteIcon} style={{ width: 20, height: 20 }} />
                    </Button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default AdminUserList;
