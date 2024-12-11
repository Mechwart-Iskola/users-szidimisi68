// src/App.tsx
import React, { useEffect, useState } from "react";
import { User } from "./types";
import UserCard from "./usercard/Usercard";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("/users.json")
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <div className="App">
      <h1>User Search</h1>
      
      {/* Render UserCard, no need to pass key here */}
      {users.length > 0 && <UserCard users={users} />}
    </div>
  );
};

export default App;
