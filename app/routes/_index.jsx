import { useEffect, useState } from "react";
import axios from "axios";

export default function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log("API Response:", response.data); // Debugging log
        setListOfUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">User List</h1>
      <div className="bg-white shadow rounded-lg p-4 w-full max-w-md">
        {listOfUsers.length > 0 ? (
          <ul className="space-y-3">
            {listOfUsers.map((user) => (
              <li
                key={user.id}
                className="border-b border-gray-200 pb-2 last:border-none"
              >
                <p className="text-lg font-semibold text-gray-800">
                  {user.name}
                </p>
                <p className="text-sm text-gray-600">{user.email}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Loading users...</p>
        )}
      </div>
    </div>
  );
}
