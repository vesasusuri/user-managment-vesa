import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UsersTable.scss";
import { IoPersonSharp } from "react-icons/io5";

function UsersTable() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({});
  const [showAddModal, setShowAddModal] = useState(false);
  const [addFormData, setAddFormData] = useState({ name: "", email: "", phone: "", city: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const usersPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const handleUpdate = (user) => {
    setEditingUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone,
      city: user.address.city,
    });
  };

  const handleSave = () => {
    const updatedUsers = users.map((user) =>
      user.id === editingUser.id
        ? { ...user, name: formData.name, email: formData.email, phone: formData.phone, address: { ...user.address, city: formData.city } }
        : user
    );
    setUsers(updatedUsers);
    setEditingUser(null);
  };

  const handleDelete = (id) => {
    const filtered = users.filter((user) => user.id !== id);
    setUsers(filtered);
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    if (!addFormData.name || !addFormData.email) {
      alert("Name and Email are required!");
      return;
    }
    const maxId = users.length > 0 ? Math.max(...users.map((u) => u.id)) : 10;
    const newUser = {
      id: maxId + 1,
      name: addFormData.name,
      email: addFormData.email,
      phone: addFormData.phone,
      address: { city: addFormData.city || "" },
      company: { name: "" },
    };
    setUsers([newUser, ...users]);
    setShowAddModal(false);
    setAddFormData({ name: "", email: "", phone: "", city: "" });
  };

  return (
    <div className="users-table-container">
      <div className="header-section">
        <h2>Users List</h2>
        <button className="add-new-user" onClick={() => setShowAddModal(true)}>Add New User</button>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="table-wrapper">
        <table className="users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.company?.name || "-"}</td>
                <td>
                  <button className="update-btn" onClick={() => handleUpdate(user)}>Update</button>
                  <button className="delete-btn" onClick={() => handleDelete(user.id)}>Delete</button>
                  <button className="details-btn" onClick={() => navigate(`/users/${user.id}`)}><IoPersonSharp /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        {[...Array(totalPages)].map((_, idx) => (
          <button key={idx + 1} className={currentPage === idx + 1 ? "active" : ""} onClick={() => handlePageChange(idx + 1)}>
            {idx + 1}
          </button>
        ))}
      </div>

      {/* Update Modal */}
      {editingUser && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Edit User</h3>
            <label>Name:<input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} /></label>
            <label>Email:<input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} /></label>
            <label>Phone:<input type="text" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} /></label>
            <label>City:<input type="text" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} /></label>
            <div className="modal-buttons">
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setEditingUser(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Add User Modal */}
      {showAddModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Add New User</h3>
            <form onSubmit={handleAddUser}>
              <label>Name:*<input type="text" value={addFormData.name} onChange={(e) => setAddFormData({ ...addFormData, name: e.target.value })} /></label>
              <label>Email:*<input type="email" value={addFormData.email} onChange={(e) => setAddFormData({ ...addFormData, email: e.target.value })} /></label>
              <label>Phone:<input type="text" value={addFormData.phone} onChange={(e) => setAddFormData({ ...addFormData, phone: e.target.value })} /></label>
              <label>City:<input type="text" value={addFormData.city} onChange={(e) => setAddFormData({ ...addFormData, city: e.target.value })} /></label>
              <div className="modal-buttons">
                <button type="submit">Add</button>
                <button type="button" onClick={() => setShowAddModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default UsersTable;
