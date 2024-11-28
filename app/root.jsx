import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/user-list" className="hover:underline">User List</Link>
      </nav>
    </header>
  );
}
