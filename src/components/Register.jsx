import { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";

export default function Register() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ name: "", email: "", password: "" });

    const handleSubmit = () => {
      if (!user.name || !user.email || !user.password) {
        alert("Please fill all fields before registering!");
        return;
      }
    
      const existingUser = users.find((u) => u.email === user.email);
      
      if (existingUser) {
        alert("This email is already registered!");
        return;
      }
    
      setUsers([...users, { ...user }]);
    
      setUser({ name: "", email: "", password: "" });
    };
    
  

    const handleDelete = (email) => {
      setUsers(users.filter((user) => user.email !== email));
    };
    

  return (
    <div>
      <h3>User Registration</h3>
      <div className="App-Row">
        <div className="App-Box">
          <p>
            <input
              type="text"
              placeholder="Name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </p>
          <p>
            <input
              type="email"
              placeholder="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </p>
          <p>
            <input
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </p>
          <button onClick={handleSubmit}>Register</button>
          <p>
          <Link to="../login">Already a member? Login here!</Link>
        </p>
        </div>
        <div className="App-Box Table-Container">
          <h3>Registered Users</h3>
          {users.length === 0 ? (
            <p>No users registered yet.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>
                    <button onClick={() => handleDelete(user.email)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        
        </div>
        
      </div>
      
    </div>
  );
}
