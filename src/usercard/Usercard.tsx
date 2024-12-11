// src/UserCard.tsx
import React, { useState } from "react";
import { User } from "../types";

interface UserCardProps {
  users: User[];
}

const UserCard: React.FC<UserCardProps> = ({ users }) => {
  const [searchQuery, setSearchQuery] = useState<string>(""); // Search query state
  const [filteredUser, setFilteredUser] = useState<User | null>(null); // To store filtered user
  const [error, setError] = useState<string>(""); // To store error message

  const handleSearch = () => {
    const foundUser = users.find((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (foundUser) {
      setFilteredUser(foundUser);
      setError("");
    } else {
      setFilteredUser(null);
      setError("No user found with the given name.");
    }
  };

  return (
    <div className="user-card">
      <div className="search-section">
        <label htmlFor="">Enter User Name</label>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by name"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="result-section">
        {error && <p className="error">{error}</p>}

        {filteredUser && (
          <div className="user-info" key={filteredUser.id}>
            <img
              src={filteredUser.profilePicture}
              alt={filteredUser.name}
              className="profile-picture"
            />
            <div>
              <h2>{filteredUser.name}</h2>
              <p>Email: {filteredUser.email}</p>
              <p>Age: {filteredUser.age}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
