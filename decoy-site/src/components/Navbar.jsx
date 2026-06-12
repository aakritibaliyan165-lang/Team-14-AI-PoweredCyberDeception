import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <div className="text-xl font-bold">🏦 SecureBank</div>
      <div className="flex gap-6 text-sm">
        <Link to="/dashboard" className="hover:text-yellow-300">Dashboard</Link>
        <Link to="/transactions" className="hover:text-yellow-300">Transactions</Link>
        <Link to="/admin" className="hover:text-yellow-300 text-red-300">⚠ Admin</Link>
        <Link to="/users" className="hover:text-yellow-300">Users</Link>
        <Link to="/" className="hover:text-yellow-300 text-red-400">Logout</Link>
      </div>
    </nav>
  );
}

export default Navbar;