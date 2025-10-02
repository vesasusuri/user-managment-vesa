import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

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
    <div className="user-details-page">
      <h2>{user.name}</h2>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Phone:</b> {user.phone}</p>
      <p><b>Website:</b> {user.website}</p>
      <p><b>Address:</b> {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
      <Link to="/">← Back to Users</Link>
    </div>
  );
}

export default UserDetails;
