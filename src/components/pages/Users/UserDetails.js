import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MdEmail, MdPhone, MdHome } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import "./UserDetails.scss";
function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="user-card">
      <h2 className="user-name">{user.name}</h2>
      <div className="user-info">
        <p><MdEmail /> <b>Email:</b> {user.email}</p>
        <p><MdPhone /><b>Phone:</b> {user.phone}</p>
        <p><FaGlobe /><b>Website:</b> <a href={`http://${user.website}`} target="_blank" rel="noreferrer">{user.website}</a></p>
        <p><MdHome /><b>Address:</b> {user.address.street}, {user.address.city} {user.address.zipcode}</p>
      </div>
      <Link className="back-link" to="/">← Back to Users</Link>
    </div>

  );
}

export default UserDetails;
